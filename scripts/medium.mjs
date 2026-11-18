// Medium-style reading layout for /blog/ and every /blog/<slug>/ article.
// Called from scripts/build.mjs. Cover photos come from content/blog-images.mjs (Unsplash).
import { blogPhotos } from '../content/blog-images.mjs';

const UTM = '?utm_source=stylebff&utm_medium=referral';
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const slugOf = path => path.replace(/^\/blog\/|\/$/g, '');

export function blogPhoto(slug) {
  const p = blogPhotos[slug];
  if (!p) return null;
  const [id, alt, name, user, page] = p;
  return {
    src: (w, h) => 'https://images.unsplash.com/' + id + '?w=' + w + '&amp;h=' + h + '&amp;fit=crop&amp;crop=entropy&amp;fm=webp&amp;q=72',
    alt: alt.charAt(0).toUpperCase() + alt.slice(1),
    name,
    userUrl: 'https://unsplash.com/@' + user + UTM,
    photoUrl: 'https://unsplash.com/photos/' + page + UTM
  };
}

export function topicFor(slug) {
  if (/^style-bff-vs/.test(slug)) return ['compare', 'App comparisons'];
  if (/colou?r|season/.test(slug)) return ['color', 'Color'];
  if (/^best-|vs-ai-outfit/.test(slug)) return ['compare', 'App comparisons'];
  if (/body|shape/.test(slug)) return ['body', 'Body shape'];
  if (/wedding|interview|date|concert|pack|today/.test(slug)) return ['occasions', 'Occasions'];
  if (/try-on|pinterest|instagram|show-me|store-link/.test(slug)) return ['tryon', 'Virtual try-on'];
  if (/find-your-style|rebuild|match/.test(slug)) return ['style', 'Personal style'];
  return ['wardrobe', 'Wardrobe'];
}

export const TOPICS = [['all','For you'],['color','Color'],['body','Body shape'],['occasions','Occasions'],['wardrobe','Wardrobe'],['tryon','Virtual try-on'],['style','Personal style'],['compare','App comparisons']];

export function fmtDate(iso, withYear = true) {
  const [y, m, d] = String(iso).slice(0, 10).split('-').map(Number);
  return MONTHS[m - 1] + ' ' + d + (withYear ? ', ' + y : '');
}

export function readMinutes(html) {
  const words = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 238));
}

const icon = {
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"/></svg>',
  in: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm7 0h3.8v1.6h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.01c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V21h-4V9.75Z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>'
};

function byline(ctx, date, minutes, small = false) {
  return '<div class="md-byline' + (small ? ' md-byline-sm' : '') + '"><a class="md-avatar" href="' + ctx.AUTHOR_PATH + '" aria-hidden="true" tabindex="-1">MG</a><div><a class="md-author" href="' + ctx.AUTHOR_PATH + '">Muskan Gupta</a><span class="md-meta">' + minutes + ' min read · <time datetime="' + date + '">' + fmtDate(date) + '</time></span></div></div>';
}

export function mediumArticle(page, ctx) {
  const slug = slugOf(page.path);
  const photo = blogPhoto(slug);
  const [topicKey, topicLabel] = topicFor(slug);
  const date = page.datePublished || page.lastModified || ctx.LAST_UPDATED;
  const content = (page.cite ? '<blockquote class="md-cite">' + page.cite + '</blockquote>' : '') + (page.htmlFirst ? (page.html || '') + ctx.sectionMarkup(page.sections) : ctx.sectionMarkup(page.sections) + (page.html || '')) + ctx.faqMarkup(page.faq);
  const minutes = readMinutes(page.answer + ' ' + content);
  const share = encodeURIComponent(ctx.canonical);
  const text = encodeURIComponent(page.h1);
  const cover = photo ? '<figure class="md-cover"><img src="' + photo.src(1400, 840) + '" srcset="' + photo.src(700, 420) + ' 700w, ' + photo.src(1400, 840) + ' 1400w" sizes="(max-width: 728px) 100vw, 680px" alt="' + ctx.esc(photo.alt) + '" width="1400" height="840" fetchpriority="high" decoding="async"/><figcaption>Photo by <a href="' + photo.userUrl + '" rel="noopener">' + ctx.esc(photo.name) + '</a> on <a href="' + photo.photoUrl + '" rel="noopener">Unsplash</a></figcaption></figure>' : '';
  return '<main id="main" class="md-main"><article class="md-article">'
    + '<header class="md-header"><a class="md-kicker" href="/blog/#' + topicKey + '">' + ctx.esc(topicLabel) + '</a><h1 class="md-title">' + ctx.esc(page.h1) + '</h1>'
    + byline(ctx, date, minutes)
    + '<div class="md-actions"><span class="md-tag">Share</span><div class="md-share" aria-label="Share this story"><a href="https://twitter.com/intent/tweet?url=' + share + '&amp;text=' + text + '" rel="noopener" aria-label="Share on X">' + icon.x + '</a><a href="https://www.linkedin.com/sharing/share-offsite/?url=' + share + '" rel="noopener" aria-label="Share on LinkedIn">' + icon.in + '</a><a href="https://wa.me/?text=' + text + '%20' + share + '" rel="noopener" aria-label="Share on WhatsApp">' + icon.wa + '</a></div></div></header>'
    + cover
    + '<div class="md-body"><p class="md-lead">' + page.answer + '</p>' + content + '</div><!--/md-body-->'
    + '<aside class="md-app"><div><p class="md-app-title">See it on you before you wear it</p><p>Style BFF builds outfits from your own closet and shows them on your photo. Free Style Profile on iOS and Android.</p></div>' + ctx.storeButtons(slug) + '</aside>'
    + '<footer class="md-footer"><div class="md-tags"><a href="/blog/#' + topicKey + '">' + ctx.esc(topicLabel) + '</a><a href="/blog/">Style notes</a><a href="/tools/">Free style tools</a></div>'
    + '<div class="md-writer"><a class="md-avatar md-avatar-lg" href="' + ctx.AUTHOR_PATH + '" aria-hidden="true" tabindex="-1">MG</a><div><p class="md-writer-name">Written by <a href="' + ctx.AUTHOR_PATH + '">Muskan Gupta</a></p><p>Co-founder of Style BFF, built in Bangalore. Writes about color, proportion and getting dressed from the clothes you already own. <a href="/editorial-policy/">Editorial standards</a></p></div></div></footer>'
    + '</article><section class="md-more" aria-labelledby="md-more-h"><div class="md-more-inner"><h2 id="md-more-h">More from <span class="md-pub">Style BFF</span></h2><!--MORE_FROM--><a class="md-more-all" href="/blog/">See all stories</a></div></section></main>';
}

function thumb(item, ctx, w, h, cls) {
  const p = blogPhoto(slugOf(item.path));
  if (!p) return '';
  return '<img class="' + cls + '" src="' + p.src(w, h) + '" alt="' + ctx.esc(p.alt) + '" width="' + w + '" height="' + h + '" loading="lazy" decoding="async"/>';
}

export function mediumMore(current, items, ctx) {
  const topic = topicFor(slugOf(current.path))[0];
  const others = items.filter(i => i.path !== current.path);
  const picks = [...others.filter(i => topicFor(slugOf(i.path))[0] === topic), ...others.filter(i => topicFor(slugOf(i.path))[0] !== topic)].slice(0, 4);
  return '<div class="md-more-grid">' + picks.map(i => '<a class="md-card" href="' + i.path + '">' + thumb(i, ctx, 640, 384, 'md-card-img') + '<span class="md-card-author"><span class="md-avatar md-avatar-xs" aria-hidden="true">MG</span>Muskan Gupta</span><span class="md-card-title">' + ctx.esc(i.h1) + '</span><span class="md-card-excerpt">' + ctx.esc(ctx.trim(i.answer, 120)) + '</span><span class="md-meta">' + fmtDate(i.date) + ' · ' + i.minutes + ' min read</span></a>').join('') + '</div>';
}

export function mediumHub(items, ctx) {
  const picks = ['what-colors-look-good-on-me', 'how-to-dress-for-your-body-type', 'how-to-find-your-style'].map(s => items.find(i => i.path === '/blog/' + s + '/')).filter(Boolean);
  const list = items.map(i => {
    const [key, label] = topicFor(slugOf(i.path));
    return '<article class="md-item" data-cat="' + key + '"><a href="' + i.path + '"><div class="md-item-copy"><span class="md-item-author"><span class="md-avatar md-avatar-xs" aria-hidden="true">MG</span>Muskan Gupta <span class="md-in">in</span> <span class="md-pub">Style BFF</span></span><h2>' + ctx.esc(i.h1) + '</h2><p>' + ctx.esc(ctx.trim(i.answer, 150)) + '</p><span class="md-meta"><time datetime="' + i.date + '">' + fmtDate(i.date) + '</time> · ' + i.minutes + ' min read <span class="md-pill">' + label + '</span></span></div>' + thumb(i, ctx, 320, 214, 'md-item-img') + '</a></article>';
  }).join('');
  return '<main id="main" class="md-main md-hub"><div class="md-hub-grid"><div class="md-feed">'
    + '<header class="md-hub-head"><p class="md-eyebrow">The Style BFF blog</p><h1>Style notes</h1><p>Practical guides on color, proportion, outfits and the clothes you already own. Written by <a href="' + ctx.AUTHOR_PATH + '">Muskan Gupta</a>.</p></header>'
    + '<div class="md-tabs" role="toolbar" aria-label="Filter stories by topic">' + TOPICS.map(([k, l], n) => '<button type="button" data-cat="' + k + '" aria-pressed="' + (n === 0) + '">' + l + '</button>').join('') + '</div>'
    + '<div class="md-list">' + list + '</div></div>'
    + '<aside class="md-side"><section><h2>Start here</h2>' + picks.map(i => '<a class="md-pick" href="' + i.path + '"><span class="md-item-author"><span class="md-avatar md-avatar-xs" aria-hidden="true">MG</span>Muskan Gupta</span><span class="md-pick-title">' + ctx.esc(i.h1) + '</span></a>').join('') + '</section>'
    + '<section><h2>Recommended topics</h2><div class="md-chips">' + TOPICS.slice(1).map(([k, l]) => '<button type="button" data-cat="' + k + '">' + l + '</button>').join('') + '</div></section>'
    + '<section><h2>Free style tools</h2><a class="md-side-link" href="/tools/body-shape-calculator/">Body shape calculator</a><a class="md-side-link" href="/quiz/">Color season quiz</a><a class="md-side-link" href="/tools/style-archetype-quiz/">Style archetype quiz</a><a class="md-side-link" href="/tools/outfit-generator/">Outfit generator</a></section>'
    + '<section class="md-side-about"><p>Style BFF is an AI personal stylist app built in Bangalore. It builds outfits from your own closet and shows them on your photo.</p><a href="/about/">About us</a> · <a href="/download/">Get the app</a></section></aside></div>'
    + '<script>(()=>{const set=c=>{document.querySelectorAll(".md-tabs button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.cat===c)));document.querySelectorAll(".md-item").forEach(i=>{i.hidden=c!=="all"&&i.dataset.cat!==c});};document.querySelectorAll("[data-cat]").forEach(b=>{if(b.tagName==="BUTTON")b.addEventListener("click",()=>{set(b.dataset.cat);history.replaceState(null,"",b.dataset.cat==="all"?"/blog/":"#"+b.dataset.cat);document.querySelector(".md-tabs").scrollIntoView({block:"nearest"});});});const h=location.hash.slice(1);if(h&&document.querySelector(".md-tabs [data-cat=\'"+h+"\']"))set(h);})();</script></main>';
}
