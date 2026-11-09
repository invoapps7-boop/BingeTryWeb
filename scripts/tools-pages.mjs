// Builds the free style tools (Style Blueprint journey). Called from scripts/build.mjs.
import { shapes, archetypes, archetypeQuiz, occasions, weather, toolPages } from '../content/tools.mjs';
import { seasonContent } from '../content/seasons.mjs';

export const TOOLS_PUBLISHED = '2026-11-09';
const seasonLabel = slug => slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const webApp = (name, url) => ({ '@type': 'WebApplication', name, url, applicationCategory: 'LifestyleApplication', operatingSystem: 'Any (web browser)', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@id': 'https://stylebff.ai/#organization' } });

export function toolsKit({ esc, scriptUrl }) {
  const data = {
    shapes, archetypes, quiz: archetypeQuiz, occasions, weather,
    seasons: Object.fromEntries(Object.entries(seasonContent).map(([k, v]) => [k, { best: v.best, neutrals: v.neutrals, avoid: v.avoid }]))
  };
  const dataTag = '<script type="application/json" id="sbff-tools-data">' + JSON.stringify(data).replaceAll('<', '\\u003c') + '</script><script src="' + scriptUrl + '" defer></script>';
  const journey = '<div class="journey" data-journey><p class="journey-title">Your Style Blueprint: body shape → color season → style archetype → outfits</p><p><a href="/tools/">Start the free style tools</a></p></div>';
  // Injected into the existing color quiz and season result pages so they join the journey.
  const inject = (kind, slug) => (kind === 'season' ? '<div class="tool-shell tool-actions" data-season-save="' + slug + '"></div>' : '') + journey + dataTag;

  const select = (name, label, opts, blank) => '<label class="tool-field">' + label + '<select name="' + name + '">' + (blank ? '<option value="">' + blank + '</option>' : '') + opts.map(([v, t]) => '<option value="' + v + '">' + esc(t) + '</option>').join('') + '</select></label>';
  const archOpts = Object.entries(archetypes).map(([k, a]) => [k, a.name]);
  const seasonOpts = Object.keys(seasonContent).map(k => [k, seasonLabel(k)]);
  const shapeOpts = Object.entries(shapes).map(([k, s]) => [k, s.name]);
  const archLinks = (except) => '<div class="archetype-links">' + Object.entries(archetypes).filter(([k]) => k !== except).map(([k, a]) => '<a href="/tools/style-archetype-quiz/' + k + '/"><b>' + esc(a.name) + '</b><small>' + esc(a.words) + '</small></a>').join('') + '</div>';
  const relatedTools = ['<a href="/tools/">All free style tools</a>', '<a href="/tools/body-shape-calculator/">Body shape calculator</a>', '<a href="/quiz/">Color season quiz</a>', '<a href="/tools/style-archetype-quiz/">Style archetype quiz</a>', '<a href="/tools/outfit-generator/">Outfit generator</a>', '<a href="/tools/style-blueprint/">Your Style Blueprint</a>'];
  const base = (key, extra) => { const t = toolPages[key]; return { path: t.path, title: t.title + ' | Style BFF', h1: t.h1, primaryKeyword: t.keyword, answer: t.answer, description: t.answer, status: 'published', lastModified: TOOLS_PUBLISHED, datePublished: TOOLS_PUBLISHED, kicker: 'Free style tool', htmlFirst: true, ...extra }; };

  const pages = [];

  pages.push(base('hub', {
    kicker: 'Free style tools',
    html: journey + '<div class="tool-directory">' + [
      ['Step 1 · 1 minute', 'Body shape calculator', 'Three measurements, five shapes, and what to wear for yours.', '/tools/body-shape-calculator/'],
      ['Step 2 · 2 minutes', 'Color season quiz', 'Six questions to find the colors that light up your face.', '/quiz/'],
      ['Step 3 · 2 minutes', 'Style archetype quiz', 'Eight questions to find your style personality.', '/tools/style-archetype-quiz/'],
      ['Step 4 · 30 seconds', 'Outfit generator', 'Three outfits for any occasion and weather, built from your results.', '/tools/outfit-generator/'],
      ['Your result', 'Style Blueprint', 'Your rules, palette and outfit formulas on one page to share or print.', '/tools/style-blueprint/']
    ].map(([s, t, d, h]) => '<a href="' + h + '"><small>' + s + '</small><b>' + t + '</b><span>' + d + '</span></a>').join('') + '</div>' + dataTag,
    sections: [
      ['Why these tools work better together', 'Most style advice looks at one thing at a time: your shape, or your colors, or a mood board. Getting dressed uses all of them at once. Each tool here saves its result on your device, and the next tool uses it, so by the end your outfit ideas fit your proportions, your coloring and your taste together.'],
      ['What each tool gives you', table(['Tool', 'You enter', 'You get'], [['Body shape calculator', 'Bust, waist and hip measurements', 'Your shape and the silhouettes that balance it'], ['Color season quiz', 'Six questions about your coloring', 'One of 12 color seasons, a palette and colors to go easy on'], ['Style archetype quiz', 'Eight questions about what you like', 'Your main and second archetype, signature pieces and formulas'], ['Outfit generator', 'Occasion and weather', 'Three complete outfit formulas with colors'], ['Style Blueprint', 'Nothing new', 'Three style rules, palette and outfits on one shareable page']])],
      ['For stylists, teachers and friends', 'The Blueprint is a link, so you can send it to a friend before a shopping trip, use it with clients as a starting questionnaire, or print it for a styling workshop. Every printed page shows where it came from.'],
      ['Privacy', 'The tools run in your browser. Measurements and answers stay on your device (in local storage) and are not sent to Style BFF. Clear your browser data to remove them.']
    ],
    faq: [['Are the style tools free?', 'Yes. All five tools are free and need no account or download.'], ['Do I have to do every step?', 'No. Each tool works on its own. The Blueprint fills in whatever you have completed.'], ['How is this different from the Style BFF app?', 'The app does the same three analyses from a selfie and short quiz, then uses your real wardrobe to plan a daily outfit and shows it on your own photo.']],
    schema: { '@type': 'CollectionPage', name: 'Style BFF free style tools' }
  }));

  pages.push(base('shape', {
    html: journey + '<form class="tool-card" id="shape-calc" novalidate><h2>Enter your measurements</h2><p>Use a soft tape measure over light clothing. Any unit works, as long as all three use the same one.</p><div class="tool-grid">' +
      [['bust', 'Bust (fullest part)'], ['waist', 'Waist (narrowest part)'], ['hips', 'Hips (fullest part)']].map(([n, l]) => '<label>' + l + '<input type="number" name="' + n + '" inputmode="decimal" min="1" step="0.1" required></label>').join('') +
      '</div><button class="button" type="submit">Find my body shape</button></form><div id="shape-result" aria-live="polite"></div>' + dataTag,
    sections: [
      ['How to measure', ['<b>Bust:</b> around the fullest part of your chest, keeping the tape level.', '<b>Waist:</b> around the narrowest part of your torso, usually just above the belly button.', '<b>Hips:</b> around the fullest part of your hips and seat, feet together.', 'Stand relaxed, breathe out normally and keep the tape snug but not tight.']],
      ['How the calculator decides', table(['Shape', 'Rule used', 'Style goal'], [['Hourglass', 'Bust and hips within 5% of each other, waist at least 25% smaller', 'Follow the waist'], ['Rectangle', 'Bust and hips within 5%, waist less than 25% smaller', 'Create curves or go sleek'], ['Pear', 'Hips more than 5% wider than bust', 'Add interest on top'], ['Inverted triangle', 'Bust more than 5% wider than hips', 'Add volume below the waist'], ['Apple', 'Waist equal to or wider than bust or hips', 'Lengthen the torso']])],
      ['A result is a starting point', 'Shape calculators simplify real bodies. Many people sit between two shapes, and shoulders, leg length and posture matter too. If two results sound like you, read both guides and keep what works in the mirror. Your shape is never a rule about what you are allowed to wear.'],
      ['Guides for each shape', ['<a href="/blog/how-to-dress-for-your-body-type/">How to dress for your body type</a>', ...Object.values(shapes).map(s => '<a href="' + s.guide + '">How to dress: ' + esc(s.name) + '</a>')]],
      ['More free tools', relatedTools]
    ],
    faq: [['What are the five body shapes?', 'Hourglass, pear (triangle), apple (round), rectangle (straight) and inverted triangle.'], ['Can I use inches or centimeters?', 'Either. The calculator compares ratios, so the unit does not matter as long as all three measurements use the same one.'], ['Is my data saved?', 'Only on your device, so the next tool can use it. Nothing is sent to Style BFF.']],
    schema: webApp('Style BFF body shape calculator', 'https://stylebff.ai/tools/body-shape-calculator/')
  }));

  pages.push(base('archetype', {
    html: journey + '<form class="tool-card" id="archetype-quiz"><h2>Eight questions</h2>' + archetypeQuiz.map(([id, q, opts], qi) => '<fieldset><legend>' + (qi + 1) + '. ' + esc(q) + '</legend><div class="tool-options">' + opts.map(([t], oi) => '<label><input type="radio" name="' + id + '" value="' + oi + '" required> ' + esc(t) + '</label>').join('') + '</div></fieldset>').join('') +
      '<p class="tool-error" id="archetype-error" aria-live="polite"></p><button class="button" type="submit">Show my style archetype</button></form>' + dataTag,
    sections: [
      ['The eight style archetypes', archLinks()],
      ['How the quiz scores you', 'Every answer adds a point to one or two archetypes. Your main archetype has the most points and your second archetype comes next. Most people are a mix, so the second result matters: it is often the twist that makes an outfit feel like you.'],
      ['What to do with your result', ['Use your signature pieces as a shopping filter.', 'Try the outfit formulas with clothes you already own.', 'Combine it with your color season so the pieces come in your best colors.', 'Generate outfits for a real plan with the <a href="/tools/outfit-generator/">outfit generator</a>.']],
      ['More free tools', relatedTools]
    ],
    faq: [['What is a style archetype?', 'A style archetype is a short name for your style personality: the mix of shapes, colors, fabrics and moods you are drawn to.'], ['Can my archetype change?', 'Yes. Style shifts with your job, city, body and stage of life. Retake the quiz once a year.'], ['Is this the same as Kibbe?', 'No. Kibbe types describe your body lines. Archetypes describe your taste. They work well together.']],
    schema: { ...webApp('Style BFF style archetype quiz', 'https://stylebff.ai/tools/style-archetype-quiz/'), '@type': ['Quiz', 'WebApplication'] }
  }));

  for (const [slug, a] of Object.entries(archetypes)) {
    const name = a.name.replace(/^The /, '');
    pages.push({
      path: '/tools/style-archetype-quiz/' + slug + '/', title: name + ' Style Archetype: Pieces and Outfits | Style BFF', h1: 'The ' + name + ' style archetype', primaryKeyword: name.toLowerCase() + ' style',
      answer: 'The ' + name + ' style archetype is ' + a.words + '. ' + a.summary,
      description: 'The ' + name + ' style archetype is ' + a.words + '. See signature pieces, colors and outfit formulas for work, dates, weddings, travel and festive days.',
      kicker: 'Style archetype', status: 'published', lastModified: TOOLS_PUBLISHED, datePublished: TOOLS_PUBLISHED, htmlFirst: true,
      html: '<div class="tool-shell tool-actions" data-archetype-result="' + slug + '"><a class="button" href="/tools/style-archetype-quiz/">Take the style archetype quiz</a></div>' + journey + dataTag,
      sections: [
        ['Signature pieces', a.pieces],
        ['Colors', a.colors + ' Find your exact palette with the <a href="/quiz/">color season quiz</a>.'],
        ['Outfit formulas for every occasion', table(['Occasion', 'Formula'], occasions.map(([k, l]) => [l, esc(a.formulas[k])]))],
        ['Your shopping rule', a.rule],
        ['Other style archetypes', archLinks(slug)]
      ],
      faq: [['How do I know if I am ' + a.name + '?', 'Take the free <a href="/tools/style-archetype-quiz/">style archetype quiz</a>. If ' + a.words + ' describes the outfits you feel best in, this is likely your main archetype.'], ['Can I mix archetypes?', 'Yes. Most people have a main archetype and a second one. Use the second for one piece per outfit.']],
      schema: { '@type': 'Article', headline: 'The ' + name + ' style archetype', author: { '@type': 'Organization', name: 'Style BFF editorial team' } }
    });
  }

  pages.push(base('outfit', {
    html: journey + '<form class="tool-card" id="outfit-gen"><h2>What is the plan?</h2><div class="tool-grid">' +
      select('occasion', 'Occasion', occasions) + select('weather', 'Weather', [['mild', 'Mild'], ['hot', 'Hot'], ['cold', 'Cold'], ['rainy', 'Rainy']]) +
      select('archetype', 'Style archetype', archOpts, 'Not sure yet') + select('season', 'Color season', seasonOpts, 'Not sure yet') + select('shape', 'Body shape', shapeOpts, 'Not sure yet') +
      '</div><button class="button" type="submit">Generate my outfits</button></form><div id="outfit-result" aria-live="polite"></div>' + dataTag,
    sections: [
      ['How the generator builds outfits', ['<b>Formula:</b> from your style archetype and your second archetype, for the occasion you chose.', '<b>Colors:</b> from your color season: one color near your face, one accent and your best neutrals.', '<b>Shape:</b> one fit rule from your body shape.', '<b>Weather:</b> the layer or fabric the day needs.']],
      ['Not sure of your results yet?', 'Leave a field on "Not sure yet" and the generator still works. For better outfits, take the <a href="/tools/body-shape-calculator/">body shape calculator</a>, the <a href="/quiz/">color season quiz</a> and the <a href="/tools/style-archetype-quiz/">style archetype quiz</a> first. They take about five minutes together.'],
      ['Occasion guides', ['<a href="/blog/what-to-wear-to-a-wedding-as-a-guest/">What to wear to a wedding as a guest</a>', '<a href="/blog/what-to-wear-to-a-job-interview/">What to wear to a job interview</a>', '<a href="/blog/does-this-outfit-match/">Does this outfit match? A 60-second check</a>', '<a href="/blog/what-should-i-wear-today-from-my-closet/">What should I wear today from my closet?</a>']],
      ['More free tools', relatedTools]
    ],
    faq: [['Can it use the clothes I own?', 'The web generator gives formulas you can fill from your closet. The Style BFF app goes further: it builds the outfit from the clothes you have added and shows it on your own photo.'], ['Is the outfit generator free?', 'Yes, with no sign-up.']],
    schema: webApp('Style BFF outfit generator', 'https://stylebff.ai/tools/outfit-generator/')
  }));

  pages.push(base('blueprint', {
    html: journey + '<div id="blueprint" aria-live="polite"><p>Your Style Blueprint appears here once you complete at least one free tool. <a href="/tools/">Start with the free style tools</a>.</p></div>' + dataTag,
    sections: [
      ['What is in your Style Blueprint?', ['<b>Three style rules</b>: one each from your body shape, color season and style archetype.', '<b>Your palette</b>: six best colors, your neutrals and the colors to go easy on.', '<b>Signature pieces</b> for your archetype.', '<b>Outfit formulas</b> for work, everyday and a special occasion, in your colors.']],
      ['Share it or take it shopping', 'Your Blueprint has its own link, so a friend or stylist sees the same page you do. Use "Print or save as PDF" for a one-page version to keep in your bag.'],
      ['More free tools', relatedTools]
    ],
    faq: [['Is the Blueprint saved?', 'Your results are saved on this device and in the page link. Nothing is stored by Style BFF.'], ['What if a section is empty?', 'Complete the matching free tool and it fills in automatically.']],
    schema: webApp('Style BFF Style Blueprint', 'https://stylebff.ai/tools/style-blueprint/')
  }));

  return { pages, inject };
}
