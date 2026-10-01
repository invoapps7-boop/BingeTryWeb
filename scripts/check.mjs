import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { SITE_URL } from '../site.config.mjs';

const root = new URL('..', import.meta.url).pathname;
const out = join(root,'dist');
const files = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir,name);
    (await stat(path)).isDirectory() ? await walk(path) : files.push(path);
  }
}
await walk(out);

const errors = [];
const htmlFiles = files.filter(file=>file.endsWith('.html'));
const indexable = [];
const titles = new Map();
const descriptions = new Map();
const outgoingByRoute = new Map();
const get = (html,pattern) => html.match(pattern)?.[1] || '';
const routeFor = file => {
  const rel = relative(out,file).replaceAll('\\','/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404.html';
  return '/' + rel.replace(/index\.html$/,'');
};

for (const file of htmlFiles) {
  const html = await readFile(file,'utf8');
  const route = routeFor(file);
  const title = get(html,/<title>([^<]+)<\/title>/);
  const description = get(html,/<meta name="description" content="([^"]*)"\s*\/>/);
  const canonical = get(html,/<link rel="canonical" href="([^"]+)"\s*\/>/);
  const robots = get(html,/<meta name="robots" content="([^"]+)"\s*\/>/);
  const ogUrl = get(html,/<meta property="og:url" content="([^"]+)"\s*\/>/);
  const h1Count = (html.match(/<h1(?:\s[^>]*)?>/g) || []).length;
  const noindex = robots.includes('noindex');

  if (!title) errors.push(route+': missing title');
  if (!description) errors.push(route+': missing description');
  if (!canonical) errors.push(route+': missing canonical');
  if (!robots) errors.push(route+': missing robots directive');
  if (!ogUrl) errors.push(route+': missing og:url');
  if (canonical && ogUrl && canonical !== ogUrl) errors.push(route+': canonical and og:url disagree');
  if (h1Count !== 1) errors.push(route+': expected one h1, found '+h1Count);
  if (!noindex && title && (title.length < 20 || title.length > 60)) errors.push(route+': indexable title length is '+title.length);
  if (!noindex && description && (description.length < 70 || description.length > 160)) errors.push(route+': indexable description length is '+description.length);
  for (const required of ['og:site_name','og:image:alt','twitter:image:alt']) if (!html.includes(required)) errors.push(route+': missing '+required);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    const src = tag.match(/src="([^"]+)"/)?.[1] || '';
    if (!/\balt="[^"]*"/.test(tag)) errors.push(route+': image missing alt attribute: '+src);
    if (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag)) errors.push(route+': image missing intrinsic dimensions: '+src);
    if (src && !src.endsWith('.webp') && src !== '/assets/qr-download.png') errors.push(route+': non-WebP content image: '+src);
  }

  if (!noindex && route !== '/404.html') {
    indexable.push({route,canonical});
    const titleRoutes = titles.get(title) || [];
    titleRoutes.push(route);
    titles.set(title,titleRoutes);
    const descriptionRoutes = descriptions.get(description) || [];
    descriptionRoutes.push(route);
    descriptions.set(description,descriptionRoutes);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1]);
      if (JSON.stringify(data).includes('SearchAction')) errors.push(route+': advertises a search action that the site does not implement');
    } catch {
      errors.push(route+': invalid JSON-LD');
    }
  }
  for (const word of ['revolutionary','seamless','unleash','empower','effortless','AI-powered']) if (new RegExp('\\b'+word+'\\b','i').test(html)) errors.push(route+': banned word '+word);
  const outgoing = new Set();
  for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const href = match[1].split(/[?#]/)[0];
    if (!href) continue;
    outgoing.add(href.endsWith('/') ? href : href+'/');
    const candidate = href.endsWith('/') ? join(out,href,'index.html') : join(out,href);
    if (!files.includes(candidate) && !files.includes(join(candidate,'index.html'))) errors.push(route+': broken link '+href);
  }
  outgoingByRoute.set(route,outgoing);
}

for (const [title,routes] of titles) if (routes.length > 1) errors.push('duplicate indexable title "'+title+'": '+routes.join(', '));
for (const [description,routes] of descriptions) if (routes.length > 1) errors.push('duplicate indexable description "'+description+'": '+routes.join(', '));

for (const required of ['sitemap.xml','robots.txt','rss.xml','llms.txt','llms-full.txt','redirects.map.txt','.well-known/apple-app-site-association','.well-known/assetlinks.json']) if (!files.includes(join(out,required))) errors.push('missing '+required);

const sitemapFiles = files.filter(file=>file.includes(join(out,'sitemaps')) && file.endsWith('.xml'));
const sitemapUrls = new Set();
for (const file of sitemapFiles) {
  const xml = await readFile(file,'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(match[1]);
}
for (const page of indexable) if (!sitemapUrls.has(page.canonical)) errors.push(page.route+': indexable canonical missing from XML sitemap');
for (const sitemapUrl of sitemapUrls) {
  const page = indexable.find(item=>item.canonical === sitemapUrl);
  if (!page) errors.push('XML sitemap contains a non-indexable or non-canonical URL: '+sitemapUrl);
}
for (const page of indexable) {
  if (page.route === '/') continue;
  const incoming = [...outgoingByRoute.values()].some(links=>links.has(page.route));
  if (!incoming) errors.push(page.route+': indexable orphan page');
}
const redirectTargets = new Set(['/contact/','/app/','/try/','/r/','/look/','/download/color/','/download/tryon/','/download/closet/']);
for (const [route,links] of outgoingByRoute) for (const link of links) if (redirectTargets.has(link)) errors.push(route+': internal link points to redirect or utility route '+link);

const rss = await readFile(join(out,'rss.xml'),'utf8');
if ((rss.match(/<item>/g) || []).length < 10) errors.push('RSS feed does not contain the published blog inventory');
const llmsFull = await readFile(join(out,'llms-full.txt'),'utf8');
if (/pending source review|preparing a source-reviewed answer/i.test(llmsFull)) errors.push('llms-full.txt exposes unpublished editorial outlines');
const htmlSitemap = await readFile(join(out,'sitemap','index.html'),'utf8');
const publishedDirectory = htmlSitemap.match(/<div class="link-grid">([\s\S]*?)<\/div>/)?.[1] || '';
for (const match of publishedDirectory.matchAll(/href="(\/[^"#]*)"/g)) {
  const linkedUrl = SITE_URL + (match[1] === '/' ? '/' : match[1].replace(/\/$/,'')+'/');
  if (!sitemapUrls.has(linkedUrl)) errors.push('HTML sitemap links to a route outside the published sitemap: '+match[1]);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Checked '+htmlFiles.length+' HTML files, '+indexable.length+' indexable routes, canonical/sitemap consistency, structured data, image SEO, internal links, RSS and AI crawler files.');
