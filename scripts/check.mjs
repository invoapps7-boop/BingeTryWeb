import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root=new URL('..',import.meta.url).pathname;
const out=join(root,'dist');
const files=[];
async function walk(dir){for(const name of await readdir(dir)){const path=join(dir,name);(await stat(path)).isDirectory()?await walk(path):files.push(path)}}
await walk(out);
const htmlFiles=files.filter(f=>f.endsWith('.html'));
const errors=[];
for(const file of htmlFiles){const html=await readFile(file,'utf8');if(!/<title>[^<]+<\/title>/.test(html))errors.push(file+': missing title');if(!/meta name="description"/.test(html))errors.push(file+': missing description');for(const match of html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)){try{JSON.parse(match[1])}catch{errors.push(file+': invalid JSON-LD')}}for(const word of ['revolutionary','seamless','unleash','empower','effortless','AI-powered'])if(new RegExp('\\b'+word+'\\b','i').test(html))errors.push(file+': banned word '+word);for(const match of html.matchAll(/href="(\/[^"]*)"/g)){const href=match[1].split(/[?#]/)[0];if(!href)continue;const candidate=href.endsWith('/')?join(out,href,'index.html'):join(out,href);if(!files.includes(candidate)&&!files.includes(join(candidate,'index.html')))errors.push(file+': broken link '+href)}}
for(const required of ['sitemap.xml','robots.txt','rss.xml','llms.txt','llms-full.txt','redirects.map.txt','.well-known/apple-app-site-association','.well-known/assetlinks.json'])if(!files.includes(join(out,required)))errors.push('missing '+required);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('Checked '+htmlFiles.length+' HTML files, JSON-LD, crawl files and banned words.');
