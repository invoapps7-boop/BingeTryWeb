// Answer-first guides added in cycle 2026-11-18 (seo-ops backlog B34, B35, B36; questions Q190-Q197).
// Research cited: Porcheron, Mauger & Russell (2013), PLOS ONE, and Porcheron et al. (2017),
// Frontiers in Psychology, both opened on 2026-11-18. Those studies measured faces, not clothes;
// the clothing advice built on them is editorial styling guidance and the guides say so.
// Style BFF facts (free Style Profile, Plus features) match the App Store and Google Play listings.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const PLOS = ['Porcheron, Mauger and Russell (2013), Aspects of facial contrast decrease with age and are cues for age perception, PLOS ONE', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0057985'];
const FRONTIERS = ['Porcheron et al. (2017), Facial contrast is a cross-cultural cue for perceiving age, Frontiers in Psychology', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.01208/full'];

export const guides2026_11_18 = [
  {
    slug: 'how-to-dress-to-look-younger',
    published: '2026-11-18',
    questions: ['Q190', 'Q191', 'Q192'],
    title: 'How to Dress to Look Younger at Any Age',
    h1: 'How to dress to look younger at any age',
    keyword: 'how to dress to look younger',
    answer: "To look younger in your clothes, wear a color that brightens your face, choose pieces that fit the body you have now, and update the few items that date an outfit fastest: jeans, shoes, glasses frames and bags. Add one current detail per outfit instead of chasing every trend. The goal is to look fresh and current at the age you are.",
    sections: [
      ['Start with the color near your face', "The color between your chin and your collarbone does more than anything else you wear. Researchers who measured the contrast between facial features (eyes, brows and lips) and the surrounding skin found that it tends to fall with age, and that faces were judged younger when that contrast was increased. A 2017 follow-up found the same pattern in Chinese, Latin American and black South African women (" + a(PLOS[1], 'PLOS ONE, 2013') + '; ' + a(FRONTIERS[1], 'Frontiers in Psychology, 2017') + "). Those studies measured faces, not clothes. In styling practice, a color that suits your coloring keeps your features looking defined, while a shade close to your skin tone, or one too muted for you, can make your face look flat and tired. Our guide to " + a('/blog/colors-that-make-you-look-younger/', 'colors that make you look younger') + ' shows which shades to try.'],
      ['Buy for the body you have now', [
        'Shoulder seams should sit at the edge of your shoulder, and sleeves should end at the wrist bone.',
        'If your size or shape has changed, buy the size that fits today rather than the size you used to wear.',
        'Clothes that pull across the bust, gape at the waist or bunch at the ankle make any outfit look less cared for. A tailor can take in a waist or shorten sleeves for much less than a new garment costs.',
        'Replace pilled knits, stretched T-shirts and faded black. Worn fabric makes an outfit look tired faster than an old style does.',
        'A well-fitted bra changes how every top sits. If yours has stretched, get measured again.'
      ]],
      ['Update the pieces that date an outfit fastest', '__TABLE__'],
      ['Add one current detail per outfit', "An outfit made entirely of this season's trends can look like you are trying hard. One current piece does more: a wide-leg trouser, a modern loafer, an updated frame or a longer, softer blazer. Keep the rest classic and well kept, and the whole outfit reads as current."],
      ['Show some shape', 'Hiding under oversized, shapeless layers tends to make an outfit look older. You do not need tight clothes. Pair one fitted piece with one easy one, such as slim trousers with a soft blouse, or a relaxed knit with a straight skirt. Our ' + a('/blog/how-to-dress-for-your-body-type/', 'guide to dressing for your body type') + ' shows which silhouettes balance your proportions.'],
      ['Hair, brows and a little color', "Clothes are only part of the picture. The authors of the 2013 study note that everyday makeup increases facial contrast and suggest this is part of why it makes faces look younger. Groomed brows, a lip color close to or a little deeper than your natural lip, and an updated haircut all add definition around the eyes and mouth. Skincare and health are beyond the scope of this guide."],
      ['What tends to look older', [
        'Head-to-toe colors close to your skin tone, such as some beiges, taupes and grays.',
        'Shapeless, oversized clothes worn to hide your body.',
        'Very matched sets: the same color bag, shoes and jewelry in every outfit.',
        'Faded, pilled or stretched fabric.',
        'Trends from a single season worn head to toe.'
      ]],
      ['See it on you before you buy', "Before you spend on a new coat or a new color, see how it looks on you. Style BFF's free Style Profile finds your color season and the colors to keep near your face. With Style BFF Plus, it builds outfits from the clothes you already own and shows them on your own photo."]
    ],
    tableInSection: table(['Item', 'Looks dated when', 'A fresher choice'], [
      ['Jeans', 'The wash has faded or the cut has not changed in a decade', 'A straight or wide leg in a clean mid or dark wash'],
      ['Shoes', 'Soles and heels are worn down or the shape looks tired', 'Clean white sneakers, loafers or simple ankle boots'],
      ['Glasses', 'You have worn the same frames for many years', 'Try a few current shapes at an optician; frames sit right next to your face'],
      ['Bag', 'It is heavily branded, scuffed or has lost its shape', 'A simple leather or canvas bag in a neutral you wear often'],
      ['Coat', 'It is shapeless, pilled or in a color that drains you', 'A tailored coat or trench in a shade that suits you'],
      ['Hair', 'The cut and color have not changed in years', 'Ask for an updated shape; your hair frames everything else you wear']
    ]),
    faq: [
      ['What colors make you look older?', 'Colors that drain your face for your coloring. For many people that means muted grays, beiges and khakis close to their skin tone, or very dark shades on someone with light, soft coloring. Which shades depends on your undertone and contrast; see ' + a('/blog/colors-that-make-you-look-younger/', 'colors that make you look younger') + '.'],
      ['Does black make you look older?', 'Not always. Black suits people with high contrast, such as dark hair with light skin, or deep skin with bright eyes. If your coloring is soft or light, black next to your face can look harsh. Try navy, charcoal or chocolate brown instead, or break the black with a lighter collar or scarf.'],
      ['How should a woman over 50 dress to look younger?', 'Put fit and color first: clothes that fit the body you have now, a flattering color near your face and one current piece per outfit. Keep classics such as a well-cut blazer, straight or wide-leg jeans in a clean wash and simple shoes, and update your frames and haircut if they have not changed in years.']
    ],
    sources: [PLOS, FRONTIERS],
    related: ['/blog/colors-that-make-you-look-younger/', '/blog/what-colors-look-good-on-me/', '/blog/how-to-dress-for-your-body-type/', '/blog/how-to-look-good-every-day/', '/blog/how-to-look-expensive-on-a-budget/', '/quiz/']
  },
  {
    slug: 'colors-that-make-you-look-younger',
    published: '2026-11-18',
    questions: ['Q193'],
    title: 'Colors That Make You Look Younger',
    h1: 'Colors that make you look younger, by skin tone',
    keyword: 'colors that make you look younger',
    answer: 'The colors that make you look younger are the ones that match your natural coloring, worn near your face. Warm undertones often look fresher in coral, warm red, teal and cream; cool undertones in cobalt, berry, emerald and soft white. Dull shades close to your own skin tone, such as some beiges and grays, tend to make a face look tired.',
    sections: [
      ['Why the right color looks younger', 'Researchers have found that the contrast between the eyes, brows and lips and the surrounding skin tends to fall with age, and that faces are judged younger when that contrast is increased (' + a(PLOS[1], 'PLOS ONE, 2013') + '). A 2017 follow-up found the pattern held for Chinese, Latin American and black South African women as well (' + a(FRONTIERS[1], 'Frontiers in Psychology, 2017') + '). The studies looked at faces, not clothing, so treat what follows as styling practice: a color that suits you keeps your features looking defined, while one too close to your skin tone or too muted for your coloring softens them.'],
      ['Find your undertone and contrast first', [
        'Undertone: in daylight, look at the veins on your inner wrist. Greenish suggests warm, blue or purple suggests cool, and a mix suggests neutral.',
        'Jewelry test: hold gold and then silver near your face. The one that looks more natural usually points to your undertone.',
        'White test: crisp white tends to suit cool coloring, while ivory or cream tends to suit warm coloring.',
        'Contrast: compare your hair, skin and eyes. A big difference, like dark hair with light skin, means high contrast; a small difference means low contrast.',
        'Not sure? The free ' + a('/quiz/', 'color season quiz') + ' walks you through it.'
      ]],
      ['Colors to try near your face', '__TABLE__'],
      ['If your hair is turning gray or silver', 'Lighter hair lowers the contrast between your hair and your skin, so colors that suited you with darker hair can start to look heavy. Many people with silver hair look fresher in clear, cool shades such as cobalt, raspberry, emerald, navy and crisp white, while warmer blond-gray hair often suits softer warm tones such as camel, coral and cream. Test both in daylight before you shop.'],
      ['Black near the face', 'Black can look sharp on high-contrast coloring and severe on soft or light coloring. If black makes the shadows under your eyes look deeper, wear it below the waist and choose navy, charcoal, chocolate or a deep jewel tone for tops, or add a lighter collar or scarf.'],
      ['How to add color without a new wardrobe', [
        'A scarf in one of your colors over a neutral coat or top.',
        'A colored shirt collar showing under a gray or navy sweater.',
        'Earrings or glasses frames in a shade that suits you.',
        'A lip color that suits your undertone: coral or warm red for warm, berry or rose for cool.',
        'Keep the brightest color closest to your face and the quieter neutrals lower down.'
      ]],
      ['Test any color in two minutes', [
        'Stand facing a window in daylight, with no filter or beauty mode.',
        'Hold one color under your chin, then another.',
        'Look at your eyes and skin, not the fabric: the better color makes your eyes look clearer and your skin more even.',
        'Take a photo in each color and compare them side by side the next day.'
      ]],
      ['See your palette on you', "Style BFF's free Style Profile finds your color season from one selfie and a short quiz. With Style BFF Plus, it builds outfits in those colors from the clothes you already own and shows them on your own photo. " + a('/blog/seasonal-color-analysis-explained/', 'Seasonal color analysis, explained') + ' covers all 12 seasons in more detail.']
    ],
    tableInSection: table(['Your coloring', 'Often looks fresher near the face', 'Often looks tired near the face'], [
      ['Warm undertone (golden, peachy)', 'Coral, warm red, teal, camel, cream, olive', 'Icy pastels, blue-gray, stark white'],
      ['Cool undertone (pink, rosy)', 'Cobalt, berry, emerald, raspberry, navy, soft white', 'Mustard, orange, khaki'],
      ['Neutral or olive undertone', 'Jade, soft teal, plum, soft red, off-white', 'Neon shades, very pale beige'],
      ['High contrast', 'Black with white, jewel tones, clear red', 'Washed-out pastels worn on their own'],
      ['Low contrast', 'Medium tones, tonal outfits, rose, sage, soft navy', 'Hard black-and-white combinations']
    ]),
    faq: [
      ['What colors make older women look younger?', 'Clear, medium-to-rich colors in your undertone family, worn near your face. For many people that means cobalt, berry, emerald, coral or soft white. Shades close to your skin or hair color, such as beige next to blond-gray hair, tend to wash the face out.'],
      ['Does white make you look younger?', 'Often, because a white near the face brightens it. Pick the right white: crisp white for cool or high-contrast coloring, ivory or cream for warm coloring.'],
      ['What colors make you look tired?', 'Usually colors that are too close to your skin tone or too muted for your coloring, such as some beiges, khakis and grays, or mustard and orange on cool skin.']
    ],
    sources: [PLOS, FRONTIERS],
    related: ['/blog/what-colors-look-good-on-me/', '/blog/how-to-dress-to-look-younger/', '/blog/seasonal-color-analysis-explained/', '/blog/what-colors-look-good-on-brown-skin/', '/quiz/']
  },
  {
    slug: 'how-to-look-good-every-day',
    published: '2026-11-18',
    questions: ['Q194', 'Q195', 'Q196', 'Q197'],
    title: 'How to Look Good Every Day: A Style Checklist',
    h1: 'How to look good every day: a simple style checklist',
    keyword: 'how to look good',
    answer: 'To look good every day, get four things right before anything else: clothes that fit, a color near your face that suits you, clean and cared-for basics, and one finishing detail such as a belt, jacket or earrings. Plan around the clothes you already own, and keep a few go-to outfits ready for busy mornings.',
    sections: [
      ['Get the fit right', [
        'Shoulder seams sit at your shoulder, and sleeves end at your wrist bone.',
        'Trousers sit at your waist without pulling and end where the cut intends: skimming the shoe, or showing a little ankle.',
        'Nothing pulls across the bust or gapes between buttons.',
        'If something pulls, gapes or bunches, have it altered or let it go.'
      ]],
      ['Wear one color that suits you near your face', 'You do not need a whole wardrobe in your palette. One top, scarf or collar in a color that suits your undertone, worn near your face, makes the rest of the outfit look chosen. ' + a('/blog/colors-that-make-you-look-younger/', 'Colors that make you look younger') + ' and ' + a('/blog/what-colors-look-good-on-me/', 'What colors look good on me?') + ' show how to find yours.'],
      ['Keep the basics cared for', [
        'Run a lint roller over dark clothes before you leave.',
        'Use a fabric shaver on pilled knits.',
        'Steam or press shirts; a handheld steamer takes a few minutes.',
        'Wipe or polish your shoes and replace worn heels.',
        'Replace black and navy pieces once they fade.'
      ]],
      ['Use an outfit formula', '__TABLE__'],
      ['Finish with one detail', 'A finished outfit usually has one thing that shows you chose it: a belt, a pair of earrings, a watch, a scarf, a jacket or a lip color. One is enough. Three competing details cancel each other out.'],
      ['Balance fitted and relaxed', 'Pair one fitted piece with one relaxed piece: a fitted top with wide trousers, or a loose shirt with slim jeans. The contrast shows your shape without anything feeling tight. See ' + a('/blog/how-to-dress-for-your-body-type/', 'how to dress for your body type') + ' for proportions that suit you.'],
      ['Plan tomorrow tonight', [
        'Check the weather and your plans for tomorrow.',
        'Lay out the whole outfit, including shoes and the bag you will carry.',
        'Keep three to five go-to outfits you know work, and save a photo of each.',
        'When you are stuck, start from one piece you love and build around it. ' + a('/blog/what-should-i-wear-today-from-my-closet/', 'What should I wear today?') + ' walks through it step by step.'
      ]],
      ['Look good in photos and on video calls', [
        'Solid colors photograph more cleanly than very fine stripes or small checks, which can flicker on camera.',
        'Face a window so the light falls on your face.',
        'Keep the camera at eye level or slightly above.',
        'A color that suits you near your face matters even more on camera, where only your top half shows.'
      ]],
      ['Wear what you can forget about', 'Clothes you keep pulling, tucking or adjusting draw attention to themselves. Choose pieces you can move, sit and walk in comfortably; ease shows in how you carry yourself.']
    ],
    tableInSection: table(['Day', 'Formula', 'Example'], [
      ['Workday', 'Tailored trousers + fine knit or blouse + blazer', 'Navy trousers, cream knit, camel blazer, loafers'],
      ['Weekend', 'Straight jeans + clean T-shirt + light jacket', 'Mid-wash jeans, white tee, denim or utility jacket, white sneakers'],
      ['Evening out', 'One statement piece + simple everything else', 'A printed midi skirt with a plain black top and simple heels'],
      ['Hot weather', 'Midi dress + flat sandals + a light layer', 'Linen dress, leather sandals, a cotton shirt as a cover-up'],
      ['Festive or family event', 'Kurta or kurti + straight pants + dupatta', 'A jewel-toned kurta with ivory pants and a printed dupatta']
    ]),
    faq: [
      ['How can I look good without spending money?', 'Start with what you own. Fix fit with a belt or a quick alteration, wear a color that suits you near your face, press your clothes, clean your shoes and plan three go-to outfits from your current wardrobe.'],
      ['How do I look good on a video call?', 'Wear a solid color that suits you, avoid very fine stripes that can flicker on camera, face a window for light and keep the camera at eye level.'],
      ['How can I look more attractive as a woman?', 'From a style point of view, focus on what clothes can change: fit that shows your shape, colors that suit your coloring near your face, and pieces you feel comfortable in. Comfort and confidence show in how you carry yourself.']
    ],
    related: ['/blog/how-to-find-your-style/', '/blog/what-should-i-wear-today-from-my-closet/', '/blog/how-to-dress-for-your-body-type/', '/blog/how-to-dress-to-look-younger/', '/blog/how-to-look-more-attractive-as-a-woman/', '/blog/how-to-look-expensive-on-a-budget/', '/tools/outfit-generator/']
  }
];
