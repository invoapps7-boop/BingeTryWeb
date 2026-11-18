// Builds the free style tools and renders them in a familiar "online tools" layout:
// a hub with a searchable grid of tool tiles, and tool pages with a centered tool card,
// numbered steps, guidance, FAQ and "More style tools". Called from scripts/build.mjs.
import { shapes, archetypes, archetypeQuiz, occasions, weather, toolPages, archetypes12, archetypeStatements, likert } from '../content/tools.mjs';
import { seasonContent } from '../content/seasons.mjs';

export const TOOLS_PUBLISHED = '2026-11-09';
const ARCH12_PUBLISHED = '2026-11-18';
const seasonLabel = slug => slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const webApp = (name, url) => ({ '@type': 'WebApplication', name, url, applicationCategory: 'LifestyleApplication', operatingSystem: 'Any (web browser)', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@id': 'https://stylebff.ai/#organization' } });

// ---------- Tool tiles (hub grid and "More style tools") ----------
const svg = d => '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
const ICONS = {
  compass: svg('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z"/>'),
  palette: svg('<path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.7-.8 1.7-1.6 0-.9-.6-1.3-.6-2.1 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4C21 7.4 17 3 12 3Z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>'),
  ruler: svg('<rect x="2.5" y="8" width="19" height="8" rx="2"/><path d="M6.5 8v3M10.5 8v4M14.5 8v3M18.5 8v4"/>'),
  hanger: svg('<path d="M10 6a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.3V10"/><path d="m12 10-8.6 6.3c-.8.6-.4 1.7.6 1.7h16c1 0 1.4-1.1.6-1.7z"/>'),
  shirt: svg('<path d="M8.5 4 4 6.5l1.7 3.8L7.5 9.5V20h9V9.5l1.8.8L20 6.5 15.5 4a3.5 3.5 0 0 1-7 0Z"/>'),
  doc: svg('<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>')
};
export const TOOLS = [
  { path: '/tools/archetype-quiz/', name: 'Archetype quiz', desc: 'Which of the 12 archetypes are you, and how should you dress?', cat: 'Quiz', icon: 'compass', tint: '#EEE8FB', ink: '#5B3FB0', keys: 'archetype personality jung sage rebel lover hero innocent ruler' },
  { path: '/quiz/', name: 'Color season quiz', desc: 'Find your color season and palette in six questions.', cat: 'Quiz', icon: 'palette', tint: '#FFE9D6', ink: '#B54D07', keys: 'color colour season palette undertone analysis' },
  { path: '/tools/body-shape-calculator/', name: 'Body shape calculator', desc: 'Your shape from three measurements, and what to wear.', cat: 'Calculator', icon: 'ruler', tint: '#E1F4EA', ink: '#23704C', keys: 'body shape type calculator hourglass pear apple rectangle measurements' },
  { path: '/tools/style-archetype-quiz/', name: 'Style archetype quiz', desc: 'Classic, Minimalist, Romantic, Edgy and more: what is your style?', cat: 'Quiz', icon: 'hanger', tint: '#FCE6EE', ink: '#A8325E', keys: 'style archetype quiz what is my style personality' },
  { path: '/tools/outfit-generator/', name: 'Outfit generator', desc: 'Three outfit ideas for any occasion and weather.', cat: 'Generator', icon: 'shirt', tint: '#E2EFFA', ink: '#235E9C', keys: 'outfit generator what should i wear occasion weather ideas' },
  { path: '/tools/style-blueprint/', name: 'Style Blueprint', desc: 'Your rules, palette and outfit formulas on one page.', cat: 'Planner', icon: 'doc', tint: '#FFF2C7', ink: '#7A5B00', keys: 'style blueprint profile print share palette rules' }
];
const tile = t => '<a class="tl-tile" href="' + t.path + '" data-keywords="' + (t.name + ' ' + t.desc + ' ' + t.keys).toLowerCase().replace(/"/g, '') + '"><span class="tl-icon" style="--tint:' + t.tint + ';--icon:' + t.ink + '">' + ICONS[t.icon] + '</span><span class="tl-tile-name">' + t.name + '</span><span class="tl-tile-desc">' + t.desc + '</span><span class="tl-tile-cat" style="--icon:' + t.ink + '">' + t.cat + '</span></a>';
export const toolTiles = (except = '') => '<div class="tl-grid">' + TOOLS.filter(t => t.path !== except).map(tile).join('') + '</div>';

// ---------- Layouts ----------
const CHECK = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10.5 8 14l8-8.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const trust = '<ul class="tl-trust"><li>' + CHECK + 'Free</li><li>' + CHECK + 'No signup</li><li>' + CHECK + 'Runs in your browser; nothing is uploaded</li></ul>';
const appBox = (ctx, slug) => '<aside class="tl-app"><div><p class="tl-app-title">See it on you</p><p>The Style BFF app finds your colors and body type from one selfie, then builds outfits from your own closet and shows them on your photo.</p></div>' + ctx.storeButtons(slug) + '</aside>';

export function toolLayout(page, ctx) {
  const crumbs = '<nav class="tl-crumbs" aria-label="Breadcrumb"><a href="/tools/">Style tools</a>' + (page.crumbs || []).map(([href, label]) => '<span aria-hidden="true">›</span>' + (href ? '<a href="' + href + '">' + label + '</a>' : '<span aria-current="page">' + label + '</span>')).join('') + '</nav>';
  const steps = page.steps ? '<section class="tl-section tl-steps-wrap"><h2>How it works</h2><ol class="tl-steps">' + page.steps.map(([t, d], i) => '<li><span class="tl-step-n">' + (i + 1) + '</span><b>' + t + '</b><p>' + d + '</p></li>').join('') + '</ol></section>' : '';
  return '<main id="main" class="tl-main">'
    + '<section class="tl-hero">' + crumbs + (page.kicker ? '<p class="tl-kicker">' + page.kicker + '</p>' : '') + '<h1>' + ctx.esc(page.h1) + '</h1><p class="tl-tagline">' + page.tagline + '</p></section>'
    + '<section class="tl-stage"><div class="tl-card">' + (page.tool || '') + '</div>' + (page.noTrust ? '' : trust) + '</section>'
    + steps
    + '<div class="tl-section tl-content"><p class="tl-answer">' + page.answer + '</p>' + (page.extra || '') + ctx.sectionMarkup(page.sections) + ctx.faqMarkup(page.faq) + '</div>'
    + (page.journey ? '<section class="tl-section tl-journey">' + page.journey + '</section>' : '')
    + '<section class="tl-section tl-more"><h2>More style tools</h2>' + toolTiles(page.path) + '</section>'
    + '<div class="tl-section">' + appBox(ctx, page.path.replace(/\W+/g, '-')) + '</div>'
    + (page.data || '') + '</main>';
}

export function toolsHubLayout(page, ctx) {
  const SEARCH = svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>');
  return '<main id="main" class="tl-main tl-hub">'
    + '<section class="tl-hero"><p class="tl-kicker">Free · No signup</p><h1>' + ctx.esc(page.h1) + '</h1><p class="tl-tagline">' + page.tagline + '</p>'
    + '<form class="tl-search" role="search" data-tool-search><span class="tl-search-icon">' + SEARCH + '</span><input type="search" name="q" placeholder="Search tools" aria-label="Search style tools" autocomplete="off"><button class="button" type="submit">Search</button></form></section>'
    + '<section class="tl-stage tl-stage-wide">' + toolTiles() + '<p class="tl-empty" hidden>No tool matches that search. <a href="/tools/">See all tools</a></p>' + (page.journey || '') + '</section>'
    + '<div class="tl-section tl-content"><p class="tl-answer">' + page.answer + '</p>' + ctx.sectionMarkup(page.sections) + ctx.faqMarkup(page.faq) + '</div>'
    + '<div class="tl-section">' + appBox(ctx, 'tools') + '</div>'
    + (page.data || '') + '</main>';
}

// ---------- Quiz markup (one question at a time when JavaScript runs; all questions without it) ----------
export const quizCard = ({ id, label, questions, submit, cls = '' }) => '<form class="tl-quiz ' + cls + '" id="' + id + '" data-stepper novalidate><p class="tl-quiz-label">' + label + '</p>'
  + questions.map(([name, q, opts]) => '<fieldset><legend>' + q + '</legend><div class="tl-opts' + (opts.length > 5 ? ' tl-opts-2' : '') + '">' + opts.map(([text, value], oi) => '<label class="tl-opt"><input type="radio" name="' + name + '" value="' + (value ?? oi) + '" required><span>' + text + '</span></label>').join('') + '</div></fieldset>').join('')
  + '<p class="tool-error" aria-live="polite"></p><div class="tl-quiz-actions"><button class="button" type="submit">' + submit + '</button></div></form>';

export function toolsKit({ esc, scriptUrl, author }) {
  const data = {
    shapes, archetypes, quiz: archetypeQuiz, occasions, weather,
    seasons: Object.fromEntries(Object.entries(seasonContent).map(([k, v]) => [k, { best: v.best, neutrals: v.neutrals, avoid: v.avoid }])),
    arch12: archetypes12, statements: archetypeStatements
  };
  const dataTag = '<script type="application/json" id="sbff-tools-data">' + JSON.stringify(data).replaceAll('<', '\\u003c') + '</script><script src="' + scriptUrl + '" defer></script>';
  const journey = '<div class="journey" data-journey><p class="journey-title">Your Style Blueprint: body shape → color season → style archetype → outfits</p><p><a href="/tools/">Start the free style tools</a></p></div>';
  // Injected into the color quiz and season result pages so they join the journey.
  const inject = (kind, slug) => (kind === 'season' ? '<div class="tool-shell tool-actions" data-season-save="' + slug + '"></div>' : '') + journey + dataTag;

  const select = (name, label, opts, blank) => '<label class="tool-field">' + label + '<select name="' + name + '">' + (blank ? '<option value="">' + blank + '</option>' : '') + opts.map(([v, t]) => '<option value="' + v + '">' + esc(t) + '</option>').join('') + '</select></label>';
  const archOpts = Object.entries(archetypes).map(([k, a]) => [k, a.name]);
  const seasonOpts = Object.keys(seasonContent).map(k => [k, seasonLabel(k)]);
  const shapeOpts = Object.entries(shapes).map(([k, s]) => [k, s.name]);
  const archLinks = (except) => '<div class="archetype-links">' + Object.entries(archetypes).filter(([k]) => k !== except).map(([k, a]) => '<a href="/tools/style-archetype-quiz/' + k + '/"><b>' + esc(a.name) + '</b><small>' + esc(a.words) + '</small></a>').join('') + '</div>';
  const base = (key, extra) => { const t = toolPages[key]; return { path: t.path, title: t.title + ' | Style BFF', h1: t.h1, primaryKeyword: t.keyword, answer: t.answer, description: t.answer, status: 'published', lastModified: TOOLS_PUBLISHED, datePublished: TOOLS_PUBLISHED, layout: 'tool', journey, data: dataTag, crumbs: [[null, t.h1]], ...extra }; };

  const pages = [];

  pages.push(base('hub', {
    layout: 'tools-hub', crumbs: [],
    tagline: 'Quick quizzes and calculators for your colors, body shape and personal style.',
    sections: [
      ['What each tool gives you', table(['Tool', 'You enter', 'You get'], [['Archetype quiz', '12 quick statements about you', 'One of the 12 archetypes and how to dress like it'], ['Color season quiz', 'Six questions about your coloring', 'One of 12 color seasons, a palette and colors to go easy on'], ['Body shape calculator', 'Bust, waist and hip measurements', 'Your shape and the silhouettes that balance it'], ['Style archetype quiz', 'Eight questions about what you like', 'Your main and second style archetype, signature pieces and formulas'], ['Outfit generator', 'Occasion and weather', 'Three complete outfit formulas with colors'], ['Style Blueprint', 'Nothing new', 'Three style rules, palette and outfits on one shareable page']])],
      ['They work better together', 'Each tool works on its own. Each one also saves its result on your device, and the next tool uses it, so your outfit ideas fit your proportions, your coloring and your taste together. Your Style Blueprint collects everything on one page you can share or print.'],
      ['Privacy', 'The tools run in your browser. Measurements and answers stay on your device (in local storage) and are not sent to Style BFF. Clear your browser data to remove them.']
    ],
    faq: [['Are the style tools free?', 'Yes. All six tools are free and need no account or download.'], ['Do I have to use every tool?', 'No. Each tool works on its own. The Style Blueprint fills in whatever you have completed.'], ['How is this different from the Style BFF app?', 'The app does the color, body and style analysis from a selfie and a short quiz, then uses your real wardrobe to plan a daily outfit and shows it on your own photo.']],
    schema: { '@type': 'CollectionPage', name: 'Style BFF free style tools' }
  }));

  pages.push(base('archetype12', {
    lastModified: ARCH12_PUBLISHED, datePublished: ARCH12_PUBLISHED,
    kicker: '12 archetypes · 2 minutes',
    tagline: 'Which of the 12 archetypes are you, and how should you dress for it? Rate 12 quick statements to find out.',
    tool: quizCard({ id: 'arch12-quiz', label: 'Quick quiz', questions: archetypeStatements.map(([k, s]) => ['a-' + k, s, likert.map((l, i) => [l, i + 1])]), submit: 'Show my archetype' }) + '<div id="arch12-result" aria-live="polite"></div>',
    steps: [['Rate 12 statements', 'Choose how much each one sounds like you, from strongly disagree to strongly agree.'], ['Get your archetype', 'See your main archetype, its core desire and the archetypes you also scored highly on.'], ['Dress like it', 'See the style that goes with your archetype, signature pieces and outfits to try.']],
    extra: '<h2 id="the-12-archetypes">The 12 archetypes</h2><div class="tl-arch-grid">' + Object.entries(archetypes12).map(([k, a]) => '<article class="tl-arch" id="archetype-' + k + '"><h3>' + esc(a.name) + '</h3><p class="tl-arch-desire"><b>Core desire:</b> ' + esc(a.desire) + '</p><p>' + esc(a.dress) + '</p><p class="tl-arch-style">Style match: <a href="/tools/style-archetype-quiz/' + a.style + '/">' + esc(archetypes[a.style].name.replace(/^The /, '')) + '</a></p>' + (a.aka ? '<p class="tl-arch-aka">' + esc(a.aka) + '</p>' : '') + '</article>').join('') + '</div>',
    sections: [
      ['Where the 12 archetypes come from', 'The psychiatrist Carl Jung described archetypes as universal patterns that show up in stories, myths and dreams. The twelve used in this quiz were proposed for branding by Margaret Mark and Carol S. Pearson in <i>The Hero and the Outlaw</i> (2001) and are now common in personality quizzes. Source: <a href="https://en.wikipedia.org/wiki/Jungian_archetypes" rel="noopener">Jungian archetypes, Wikipedia</a>.'],
      ['Is this a scientific personality test?', 'No. It is a quick reflection tool, not a validated psychological assessment. Use it to think about what drives you and what you want your clothes to say. The style match for each archetype is Style BFF’s own editorial suggestion.'],
      ['Archetype quiz or style archetype quiz?', 'This quiz starts from who you are: your motivations and how you like to show up. The <a href="/tools/style-archetype-quiz/">style archetype quiz</a> starts from the clothes you are drawn to. Taking both shows whether your wardrobe matches the way you see yourself.'],
      ['What to do with your result', ['Use your signature pieces as a shopping filter.', 'Wear your archetype’s style in your best colors: find them with the <a href="/quiz/">color season quiz</a>.', 'Turn it into outfits for a real plan with the <a href="/tools/outfit-generator/">outfit generator</a>.']]
    ],
    faq: [['What are the 12 archetypes?', 'The Innocent, the Everyperson, the Hero, the Caregiver, the Explorer, the Rebel, the Lover, the Creator, the Jester, the Sage, the Magician and the Ruler.'], ['Can I be more than one archetype?', 'Yes. Most people have one main archetype and one or two strong others. Your result lists every archetype you scored highly on.'], ['What is the Everyperson?', 'The archetype also called the Everyman or the Regular Person: someone who values belonging, honesty and being at ease with people.'], ['Is the archetype quiz free?', 'Yes. It is free, needs no signup and runs in your browser.']],
    schema: { ...webApp('Style BFF archetype quiz', 'https://stylebff.ai/tools/archetype-quiz/'), '@type': ['Quiz', 'WebApplication'] }
  }));

  pages.push(base('shape', {
    kicker: 'Calculator · 1 minute',
    tagline: 'Enter three measurements to find your body shape and the silhouettes that balance it.',
    tool: '<form class="tool-card tl-form" id="shape-calc" novalidate><p class="tl-quiz-label">Your measurements</p><p class="tl-form-help">Use a soft tape measure over light clothing. Any unit works, as long as all three use the same one.</p><div class="tool-grid">' +
      [['bust', 'Bust (fullest part)'], ['waist', 'Waist (narrowest part)'], ['hips', 'Hips (fullest part)']].map(([n, l]) => '<label>' + l + '<input type="number" name="' + n + '" inputmode="decimal" min="1" step="0.1" required></label>').join('') +
      '</div><button class="button" type="submit">Find my body shape</button></form><div id="shape-result" aria-live="polite"></div>',
    steps: [['Measure', 'Measure your bust, waist and hips with a soft tape, snug but not tight.'], ['Enter the numbers', 'Type the three measurements. Inches or centimeters both work.'], ['Get your shape', 'See your shape, what it means and outfit advice for it.']],
    sections: [
      ['How to measure', ['<b>Bust:</b> around the fullest part of your chest, keeping the tape level.', '<b>Waist:</b> around the narrowest part of your torso, usually just above the belly button.', '<b>Hips:</b> around the fullest part of your hips and seat, feet together.', 'Stand relaxed, breathe out normally and keep the tape snug but not tight.']],
      ['How the calculator decides', table(['Shape', 'Rule used', 'Style goal'], [['Hourglass', 'Bust and hips within 5% of each other, waist at least 25% smaller', 'Follow the waist'], ['Rectangle', 'Bust and hips within 5%, waist less than 25% smaller', 'Create curves or go sleek'], ['Pear', 'Hips more than 5% wider than bust', 'Add interest on top'], ['Inverted triangle', 'Bust more than 5% wider than hips', 'Add volume below the waist'], ['Apple', 'Waist equal to or wider than bust or hips', 'Lengthen the torso']])],
      ['A result is a starting point', 'Shape calculators simplify real bodies. Many people sit between two shapes, and shoulders, leg length and posture matter too. If two results sound like you, read both guides and keep what works in the mirror. Your shape is never a rule about what you are allowed to wear.'],
      ['Guides for each shape', ['<a href="/blog/how-to-dress-for-your-body-type/">How to dress for your body type</a>', ...Object.values(shapes).map(s => '<a href="' + s.guide + '">How to dress: ' + esc(s.name) + '</a>')]]
    ],
    faq: [['What are the five body shapes?', 'Hourglass, pear (triangle), apple (round), rectangle (straight) and inverted triangle.'], ['Can I use inches or centimeters?', 'Either. The calculator compares ratios, so the unit does not matter as long as all three measurements use the same one.'], ['Is my data saved?', 'Only on your device, so the next tool can use it. Nothing is sent to Style BFF.']],
    schema: webApp('Style BFF body shape calculator', 'https://stylebff.ai/tools/body-shape-calculator/')
  }));

  pages.push(base('archetype', {
    kicker: 'Quiz · 2 minutes',
    tagline: 'What is my style? Answer eight quick questions to find your style archetype: Classic, Minimalist, Romantic, Relaxed, Bold, Sporty, Bohemian or Edgy.',
    tool: quizCard({ id: 'archetype-quiz', label: 'Style quiz', questions: archetypeQuiz.map(([id, q, opts]) => [id, esc(q), opts.map(([t], oi) => [esc(t), oi])]), submit: 'Show my style archetype' }),
    steps: [['Answer 8 questions', 'Pick the outfit, compliment or moment that feels most like you.'], ['Get two archetypes', 'See your main style archetype and the second one that adds your twist.'], ['Use it', 'Get signature pieces and outfit formulas for work, dates, weddings and travel.']],
    sections: [
      ['The eight style archetypes', archLinks()],
      ['How the quiz scores you', 'Every answer adds a point to one or two archetypes. Your main archetype has the most points and your second archetype comes next. Most people are a mix, so the second result matters: it is often the twist that makes an outfit feel like you.'],
      ['What to do with your result', ['Use your signature pieces as a shopping filter.', 'Try the outfit formulas with clothes you already own.', 'Combine it with your color season so the pieces come in your best colors.', 'Generate outfits for a real plan with the <a href="/tools/outfit-generator/">outfit generator</a>.']]
    ],
    faq: [['What is a style archetype?', 'A style archetype is a short name for your style personality: the mix of shapes, colors, fabrics and moods you are drawn to.'], ['Can my archetype change?', 'Yes. Style shifts with your job, city, body and stage of life. Retake the quiz once a year.'], ['Is this the same as Kibbe?', 'No. Kibbe types describe your body lines. Archetypes describe your taste. They work well together.'], ['How is it different from the archetype quiz?', 'The <a href="/tools/archetype-quiz/">archetype quiz</a> starts from your personality and matches you to one of 12 archetypes. This quiz starts from the clothes you like.']],
    schema: { ...webApp('Style BFF style archetype quiz', 'https://stylebff.ai/tools/style-archetype-quiz/'), '@type': ['Quiz', 'WebApplication'] }
  }));

  for (const [slug, a] of Object.entries(archetypes)) {
    const name = a.name.replace(/^The /, '');
    pages.push({
      path: '/tools/style-archetype-quiz/' + slug + '/', title: name + ' Style Archetype: Pieces and Outfits | Style BFF', h1: 'The ' + name + ' style archetype', primaryKeyword: name.toLowerCase() + ' style',
      answer: 'The ' + name + ' style archetype is ' + a.words + '. ' + a.summary,
      description: 'The ' + name + ' style archetype is ' + a.words + '. See signature pieces, colors and outfit formulas for work, dates, weddings, travel and festive days.',
      status: 'published', lastModified: TOOLS_PUBLISHED, datePublished: TOOLS_PUBLISHED,
      layout: 'tool', kicker: 'Style archetype', tagline: a.words.charAt(0).toUpperCase() + a.words.slice(1) + '.', noTrust: true,
      crumbs: [['/tools/style-archetype-quiz/', 'Style archetype quiz'], [null, name]],
      tool: '<div class="tool-shell tool-actions" data-archetype-result="' + slug + '"><a class="button" href="/tools/style-archetype-quiz/">Take the style archetype quiz</a></div>',
      journey, data: dataTag,
      sections: [
        ['Signature pieces', a.pieces],
        ['Colors', a.colors + ' Find your exact palette with the <a href="/quiz/">color season quiz</a>.'],
        ['Outfit formulas for every occasion', table(['Occasion', 'Formula'], occasions.map(([k, l]) => [l, esc(a.formulas[k])]))],
        ['Your shopping rule', a.rule],
        ['Other style archetypes', archLinks(slug)]
      ],
      faq: [['How do I know if I am ' + a.name + '?', 'Take the free <a href="/tools/style-archetype-quiz/">style archetype quiz</a>. If ' + a.words + ' describes the outfits you feel best in, this is likely your main archetype.'], ['Can I mix archetypes?', 'Yes. Most people have a main archetype and a second one. Use the second for one piece per outfit.']],
      schema: { '@type': 'Article', headline: 'The ' + name + ' style archetype', author }
    });
  }

  pages.push(base('outfit', {
    kicker: 'Generator · 30 seconds',
    tagline: 'Pick the occasion and the weather, and get three outfit ideas in your colors and style.',
    tool: '<form class="tool-card tl-form" id="outfit-gen"><p class="tl-quiz-label">What is the plan?</p><div class="tool-grid">' +
      select('occasion', 'Occasion', occasions) + select('weather', 'Weather', [['mild', 'Mild'], ['hot', 'Hot'], ['cold', 'Cold'], ['rainy', 'Rainy']]) +
      select('archetype', 'Style archetype', archOpts, 'Not sure yet') + select('season', 'Color season', seasonOpts, 'Not sure yet') + select('shape', 'Body shape', shapeOpts, 'Not sure yet') +
      '</div><button class="button" type="submit">Generate my outfits</button></form><div id="outfit-result" aria-live="polite"></div>',
    steps: [['Choose the plan', 'Pick the occasion and the weather.'], ['Add your results', 'Your style archetype, color season and body shape fill in automatically if you have used the other tools.'], ['Get three outfits', 'Three outfit formulas with the colors to wear near your face.']],
    sections: [
      ['How the generator builds outfits', ['<b>Formula:</b> from your style archetype and your second archetype, for the occasion you chose.', '<b>Colors:</b> from your color season: one color near your face, one accent and your best neutrals.', '<b>Shape:</b> one fit rule from your body shape.', '<b>Weather:</b> the layer or fabric the day needs.']],
      ['Not sure of your results yet?', 'Leave a field on "Not sure yet" and the generator still works. For better outfits, take the <a href="/tools/body-shape-calculator/">body shape calculator</a>, the <a href="/quiz/">color season quiz</a> and the <a href="/tools/style-archetype-quiz/">style archetype quiz</a> first. They take about five minutes together.'],
      ['Occasion guides', ['<a href="/blog/what-to-wear-to-a-wedding-as-a-guest/">What to wear to a wedding as a guest</a>', '<a href="/blog/what-to-wear-to-a-job-interview/">What to wear to a job interview</a>', '<a href="/blog/does-this-outfit-match/">Does this outfit match? A 60-second check</a>', '<a href="/blog/what-should-i-wear-today-from-my-closet/">What should I wear today from my closet?</a>']]
    ],
    faq: [['Can it use the clothes I own?', 'The web generator gives formulas you can fill from your closet. The Style BFF app goes further: it builds the outfit from the clothes you have added and shows it on your own photo.'], ['Is the outfit generator free?', 'Yes, with no sign-up.']],
    schema: webApp('Style BFF outfit generator', 'https://stylebff.ai/tools/outfit-generator/')
  }));

  pages.push(base('blueprint', {
    kicker: 'Planner', noTrust: true, journey: '',
    tagline: 'Your body shape, color season and style archetype as three style rules, a palette and outfit formulas, on one page.',
    tool: '<div id="blueprint" aria-live="polite"><p>Your Style Blueprint appears here once you complete at least one free tool. <a href="/tools/">Start with the free style tools</a>.</p></div>',
    sections: [
      ['What is in your Style Blueprint?', ['<b>Three style rules</b>: one each from your body shape, color season and style archetype.', '<b>Your palette</b>: six best colors, your neutrals and the colors to go easy on.', '<b>Signature pieces</b> for your archetype.', '<b>Outfit formulas</b> for work, everyday and a special occasion, in your colors.']],
      ['Share it or take it shopping', 'Your Blueprint has its own link, so a friend or stylist sees the same page you do. Use "Print or save as PDF" for a one-page version to keep in your bag.']
    ],
    faq: [['Is the Blueprint saved?', 'Your results are saved on this device and in the page link. Nothing is stored by Style BFF.'], ['What if a section is empty?', 'Complete the matching free tool and it fills in automatically.']],
    schema: webApp('Style BFF Style Blueprint', 'https://stylebff.ai/tools/style-blueprint/')
  }));

  return { pages, inject, dataTag, journey };
}
