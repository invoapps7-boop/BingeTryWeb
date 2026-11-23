// Renders the A-Z fashion glossary page (/glossary/fashion-terms/) from content/fashion-glossary.mjs.
import { fashionTerms, fashionCategories } from '../content/fashion-glossary.mjs';

export const FASHION_GLOSSARY_PATH = '/glossary/fashion-terms/';

// Terms that already have a full Style BFF page get a "Read more" link.
const deeperPages = {
  'capsule wardrobe': '/glossary/capsule-wardrobe/',
  'cost per wear': '/glossary/cost-per-wear/',
  'dupe': '/glossary/dupe/',
  'ootd': '/glossary/ootd/',
  'hourglass body shape': '/blog/how-to-dress-for-your-body-type/',
  'pear body shape': '/blog/how-to-dress-for-your-body-type/',
  'apple body shape': '/blog/how-to-dress-for-your-body-type/',
  'rectangle body shape': '/blog/how-to-dress-for-your-body-type/',
  'inverted triangle body shape': '/blog/how-to-dress-for-your-body-type/',
  'color palette': '/quiz/',
  'neutrals': '/blog/what-colors-look-good-on-me/',
  'indo-western': '/answers/best-fashion-styling-apps-in-india/'
};

export function fashionGlossary({ esc, slugify, siteUrl, existing }) {
  const catLabel = Object.fromEntries(fashionCategories);
  const sorted = [...fashionTerms].sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' }));
  const idOf = term => 'term-' + slugify(term);
  const letterOf = term => { const c = term.normalize('NFD')[0].toUpperCase(); return /[A-Z]/.test(c) ? c : '#'; };
  const groups = new Map();
  for (const t of sorted) { const l = letterOf(t[0]); if (!groups.has(l)) groups.set(l, []); groups.get(l).push(t); }
  const counts = {};
  for (const t of fashionTerms) counts[t[1]] = (counts[t[1]] || 0) + 1;

  const termHtml = ([term, cat, def, aka]) => {
    const link = deeperPages[term.toLowerCase()];
    const more = link && existing(link) ? ' <a class="fg-more" href="' + link + '">Read more</a>' : '';
    return '<div class="fg-term" id="' + idOf(term) + '" data-cat="' + cat + '"><h3>' + esc(term) + '</h3><span class="fg-cat">' + esc(catLabel[cat]) + '</span><p>' + esc(def) + more + '</p>' + (aka ? '<p class="fg-aka">Also called: ' + esc(aka) + '</p>' : '') + '</div>';
  };

  const letters = [...groups.keys()];
  const az = '<nav class="fg-az" aria-label="Jump to letter">' + letters.map(l => '<a href="#letter-' + (l === '#' ? 'num' : l.toLowerCase()) + '">' + l + '</a>').join('') + '</nav>';
  const tools = '<div class="fg-tools"><label class="fg-search-label" for="fg-search">Search the glossary <span>(try raglan, ikat or midi)</span></label><input id="fg-search" class="fg-search" type="search" autocomplete="off"/><div class="fg-chips" role="group" aria-label="Filter by category"><button type="button" class="fg-chip is-on" data-cat="all">All (' + fashionTerms.length + ')</button>' + fashionCategories.map(([k, label]) => '<button type="button" class="fg-chip" data-cat="' + k + '">' + esc(label) + ' (' + (counts[k] || 0) + ')</button>').join('') + '</div><p class="fg-count" aria-live="polite"></p></div>';
  const list = letters.map(l => '<section class="fg-letter" id="letter-' + (l === '#' ? 'num' : l.toLowerCase()) + '"><h2>' + l + '</h2><div class="fg-grid">' + groups.get(l).map(termHtml).join('') + '</div></section>').join('');
  const browse = '<section class="article-section fg-browse"><h2>Browse fashion terms by category</h2>' + fashionCategories.map(([k, label]) => '<details><summary>' + esc(label) + ' (' + (counts[k] || 0) + ')</summary><p>' + sorted.filter(t => t[1] === k).map(t => '<a href="#' + idOf(t[0]) + '">' + esc(t[0]) + '</a>').join(' · ') + '</p></details>').join('') + '</section>';
  const script = '<script>(()=>{const q=document.getElementById("fg-search"),chips=[...document.querySelectorAll(".fg-chip")],terms=[...document.querySelectorAll(".fg-term")],letters=[...document.querySelectorAll(".fg-letter")],count=document.querySelector(".fg-count");let cat="all";const run=()=>{const s=q.value.trim().toLowerCase();let n=0;for(const t of terms){const ok=(cat==="all"||t.dataset.cat===cat)&&(!s||t.textContent.toLowerCase().includes(s));t.hidden=!ok;if(ok)n++}for(const l of letters)l.hidden=!l.querySelector(".fg-term:not([hidden])");count.textContent=(s||cat!=="all")?n+" of "+terms.length+" terms":""};q.addEventListener("input",run);for(const c of chips)c.addEventListener("click",()=>{cat=c.dataset.cat;chips.forEach(x=>x.classList.toggle("is-on",x===c));run()})})();</script>';

  const html = tools + az + '<div class="fg-list">' + list + '</div>' + browse + script;
  const schema = {
    '@type': 'DefinedTermSet',
    'name': 'Style BFF fashion glossary',
    'description': 'Definitions of ' + fashionTerms.length + ' fashion terms: necklines, collars, sleeves, silhouettes, fabrics, prints, construction details, shoes, bags, Indian wear and styling terms.',
    'hasDefinedTerm': sorted.map(([term, cat, def]) => ({ '@type': 'DefinedTerm', 'name': term, 'description': def, 'url': siteUrl + FASHION_GLOSSARY_PATH + '#' + idOf(term), 'termCode': catLabel[cat] }))
  };
  return { html, schema, total: fashionTerms.length };
}
