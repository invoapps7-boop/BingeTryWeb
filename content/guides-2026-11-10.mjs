// Answer-first guides added in cycle 2026-11-10 (seo-ops backlog B13, B16, B20).
// Third-party app facts come only from the App Store listings linked in each guide's sources;
// Google try-on facts come from Google's own help pages and blog. All opened on 2026-11-10.
// Style BFF facts were checked against the live Google Play and App Store listings the same day.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const APP = ['Style BFF on the App Store', 'https://apps.apple.com/us/app/id6767003047'];
const PLAY = ['Style BFF on Google Play', 'https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon'];

export const guides2026_11_10 = [
  {
    slug: 'best-free-color-analysis-apps',
    published: '2026-11-10',
    questions: ['Q062'],
    title: 'Best Free Color Analysis Apps (2026)',
    h1: 'The best free color analysis apps in 2026',
    keyword: 'best color analysis app free',
    answer: 'The best free color analysis apps in 2026 are Magenta for a 12-season palette with no paywall at all; My Best Colors for free 12-season palettes with an optional one-time upgrade; Style BFF if you want your season and body type turned into outfits on your own photo; and Palette Hunt or Season Palette if you will pay later for makeup, hair and try-on extras.',
    html: '<p class="editorial-meta"><b>Disclosure:</b> Style BFF publishes this guide and makes one of the apps listed. Other apps are described only from their own App Store listings, linked below and checked on November 10, 2026. Prices and features change, so check the listing before you pay.</p>' + table(['App', 'What is free', 'Paid option (as listed)', 'How it analyzes you', 'Best for'], [
      ['Magenta: Color Analysis', 'Everything: the listing says no subscriptions, trials or locked features', 'None listed', 'One uploaded photo, 12 seasons', 'A palette with no paywall'],
      ['My Best Colors', 'Core 12-season palettes (ad-supported)', 'One-time lifetime upgrade; no subscription', 'Camera tools and palettes by season', 'Exploring and shopping by palette'],
      ['Style BFF', 'Style Profile: color season, body type, style rules', 'Style BFF Plus for daily outfits, unlimited try-on, full closet', 'One selfie plus a five-question quiz, 12 seasons', 'Turning your palette into outfits on your own photo'],
      ['Palette Hunt', 'Free download', 'Yearly plan listed', 'Selfie: undertone, depth, contrast, palette', 'Makeup and hair color ideas'],
      ['Season Palette', 'Free download', 'Subscription required for full access; try-on packs', 'One photo: skin, hair and eye color', 'Virtual try-on of colors']
    ]),
    sections: [
      ['1. Magenta: best if "free" means no paywall', 'Magenta\'s App Store listing says you upload a photo and get your season and palette automatically, based on the 12-season system, and states "No subscriptions. No trials. No locked features." It is the simplest option if you only want a palette. iPhone.'],
      ['2. My Best Colors: best for exploring palettes', 'My Best Colors (by colorwise.me) organizes colors by the 12-season system and adds complementary, neutral, accent, jewelry and makeup palettes plus a color picker and camera tools. Its listing says the core features are free and ad-supported, and a one-time upgrade unlocks premium palettes, with no subscription. iPhone and iPad.'],
      ['3. Style BFF: best if you want outfits, not only a palette', 'Style BFF\'s free Style Profile uses one selfie and a five-question quiz to find your season (all 12), your body type and the silhouettes that suit you. The difference is what happens next: your palette drives every outfit idea, built from your own clothes and shown on your own photo. Daily outfits, unlimited try-on and the full closet are part of Style BFF Plus. iPhone and Android. ' + a('/features/color-analysis/', 'How the color analysis works') + '.'],
      ['4. Palette Hunt: best for makeup and hair color ideas', 'Palette Hunt\'s listing describes a selfie-based analysis of your best colors, undertone, depth and contrast, with makeup shade suggestions, hair color ideas and AI photos in your colors. The download is free; the listing shows a yearly plan.'],
      ['5. Season Palette: best for trying colors on', 'Season Palette analyzes skin, hair and eye color from one photo and adds a "Fitting Room" try-on and a palette generator. The listing says full access requires a subscription.'],
      ['How to get an accurate result from any app', ['Use indirect daylight, facing a window. Avoid warm indoor bulbs.', 'No filters, beauty mode or heavy makeup.', 'Pull hair back if it is dyed; note your natural color.', 'Take two photos on different days and compare the results.', 'If two apps disagree, do a drape test with clothes you own. ' + a('/blog/what-colors-look-good-on-me/', 'Here is how') + '.']],
      ['Free app or in-person analysis?', 'Apps are a fast, free starting point. Camera color and lighting can shift the result, so treat the season as a hypothesis and confirm it in the mirror. An in-person analyst with physical drapes is more reliable if you are about to buy a lot of clothes or makeup.']
    ],
    faq: [
      ['Is there a completely free color analysis app?', 'Magenta\'s App Store listing states it has no subscriptions, trials or locked features. Style BFF\'s Style Profile (season, body type and style rules) is also free.'],
      ['Which color analysis app works on Android?', 'Style BFF is on Google Play and the App Store. Several color-only apps are iPhone-only, so check Google Play for the app you want.'],
      ['Are AI color analysis apps accurate?', 'They are a good starting point but sensitive to lighting and camera color. Use daylight, no filters, and confirm with a drape test.'],
      ['How many color seasons are there?', 'Most apps use 12 seasons: three each of Spring, Summer, Autumn and Winter. ' + a('/blog/seasonal-color-analysis-explained/', 'All 12, explained') + '.']
    ],
    sources: [['Magenta: Color Analysis on the App Store', 'https://apps.apple.com/us/app/id6757819430'], ['My Best Colors on the App Store', 'https://apps.apple.com/au/app/my-best-colors/id1459421275'], ['Palette Hunt on the App Store', 'https://apps.apple.com/tt/app/color-analysis-palette-hunt/id6737066020'], ['Season Palette on the App Store', 'https://apps.apple.com/us/app/season-palette-color-analysis/id6740197585'], PLAY, APP],
    related: ['/features/color-analysis/', '/quiz/', '/blog/what-colors-look-good-on-me/', '/blog/seasonal-color-analysis-explained/', '/blog/what-colors-look-good-on-brown-skin/']
  },
  {
    slug: 'try-on-clothes-online-free',
    published: '2026-11-10',
    questions: ['Q026', 'Q144', 'Q038'],
    title: 'How to Try On Clothes Online for Free',
    h1: 'How to try on clothes online for free',
    keyword: 'try on clothes online free',
    answer: 'You can try on clothes online for free with the Try it on button Google shows on eligible apparel listings in Search, Shopping and Images: upload one full-body photo and Google shows the item on you. For looks from Pinterest, Instagram or any store, or for outfits from your own closet, use a try-on app such as Style BFF, which works from your own photo.',
    sections: [
      ['Option 1: Google\'s free try-on (products listed on Google)', ['Search for a top, bottom or dress on Google and open an apparel listing.', 'Tap <b>Try it on</b> and upload one photo of yourself (full body or a selfie, no other people).', 'Google shows the garment on you. Swap items to compare.', 'Requirements listed by Google: you must be 18+, signed in, with Search history and personalized recommendations turned on.', 'Google lists 18 countries, including the US, UK, India, Canada, Australia and Japan.']],
      ['Option 2: Try-on in Chrome on retailer sites', 'Google\'s Chrome help page describes a "Try it on" option on product pages at some clothing retailers: Chrome swaps the site\'s model image for a photo of you wearing the item. You need to be signed in to Chrome, 18 or older, and on a personal (not Workspace) account. It is not yet on every retailer site or in every region.'],
      ['Option 3: An app for looks Google cannot try on', 'Google\'s try-on only works on products it lists. To try a Pinterest pin, an Instagram post, a store link Google does not cover, or clothes you already own, use an app. Style BFF lets you share a supported Pinterest, Instagram or store link and see the look on your own photo, and builds outfits from your closet around your color season. Unlimited try-on is part of Style BFF Plus; check the store listing for what the free tier includes. ' + a('/features/try-on-from-pinterest-instagram/', 'How link try-on works') + '.'],
      ['Which option fits what you want to try on?', '__TABLE__'],
      ['Get a better result', ['Stand straight, facing the camera, hands visible, in fitted clothes.', 'Use good light and a plain background.', 'Use the same photo for every item so you compare clothes, not photos.', 'Treat the image as a style check, not a fit guarantee. Google\'s own help page says try-on "does not determine or guarantee the actual fit". Check the size chart.']],
      ['Privacy', 'Google says it does not store biometric data from try-on or use your photo for training. For any app, read the privacy policy before uploading, and only upload photos of yourself or someone who has agreed.']
    ],
    tableInSection: table(['You want to try on', 'Free option', 'What to use'], [['A top, bottom or dress you found on Google', 'Yes', 'Google Search, Shopping or Images: "Try it on"'], ['An item on a supported retailer site', 'Yes', 'Chrome "Try it on" (signed in, 18+)'], ['A Pinterest or Instagram outfit', 'Depends on the app', 'Style BFF (link try-on on your photo)'], ['Outfits from clothes you own', 'Depends on the app', 'Style BFF or another closet app with try-on'], ['Lingerie, swimwear, accessories', 'Not on Google', 'Retailer\'s own tools, or try in store']]),
    faq: [
      ['Is Google virtual try-on free?', 'Google\'s help page does not list any charge; you need a signed-in Google account, to be 18+, and to be in a supported country.'],
      ['Can I try on clothes on my own photo?', 'Yes. Google\'s try-on and Style BFF both use your photo rather than a model or avatar.'],
      ['Is virtual try-on available in India?', 'Yes. Google lists India among supported countries, and Style BFF is on Google Play and the App Store in India.'],
      ['What replaced Google Doppl?', 'Google closed the Doppl app and moved try-on into Search and Shopping. ' + a('/answers/what-happened-to-google-doppl/', 'What happened to Doppl') + '.']
    ],
    sources: [['How the Google try-on tool works (Google Shopping Help)', 'https://support.google.com/googleshopping/answer/16253678?hl=en'], ['Try on clothes virtually in Chrome (Chrome Help)', 'https://support.google.com/chrome/answer/18507944?hl=en-GB'], ['Virtual apparel try-on comes to the UK and India (Google blog)', 'https://blog.google/products/shopping/virtual-apparel-try-on-uk-india/'], PLAY],
    related: ['/features/virtual-try-on/', '/blog/best-virtual-try-on-apps/', '/blog/how-to-try-on-pinterest-outfits-on-yourself/', '/blog/is-ai-virtual-try-on-accurate/', '/compare/doppl-alternatives/']
  },
  {
    slug: 'what-colors-look-good-on-brown-skin',
    published: '2026-11-10',
    questions: ['Q138', 'Q070', 'Q134', 'Q133'],
    title: 'What Colors Look Good on Brown Skin?',
    h1: 'What colors look good on brown and Indian skin tones?',
    keyword: 'what colors look good on brown skin',
    answer: 'Brown and Indian skin tones can be warm, cool or neutral, so undertone matters more than depth. Most brown skin glows in rich, clear colors such as emerald, cobalt, mustard, rust, fuchsia and ivory. Washed-out pastels and colors close to your own skin tone, like some beiges and greys, tend to look flat near the face.',
    sections: [
      ['Start with undertone, not "dusky" or "fair"', ['Check your wrist veins in daylight: greenish suggests warm, blue or purple suggests cool, a mix suggests neutral.', 'Compare gold and silver jewelry near your face; the one that looks more natural points the same way.', 'Many brown skin tones are warm or olive-neutral, but cool brown skin is common too. Do not assume.', 'Depth (light, medium, deep) changes how strong a color you can carry; undertone changes which family suits you.']],
      ['Colors that often work, by undertone', '__TABLE__'],
      ['Colors to wear away from your face', 'Beige, taupe and khaki that are close to your skin tone can blur where the clothes end and you begin. Very pale pastels can make deeper skin look ashy. You do not have to give them up: wear them as trousers, skirts or shoes, or add a flattering dupatta, scarf or necklace near your face.'],
      ['Indian wear: sarees, kurtis and festive colors', ['<b>Warm undertones:</b> mustard, marigold, rust, maroon, bottle green and antique gold zari.', '<b>Cool undertones:</b> royal blue, emerald, magenta, berry, wine and silver zari.', '<b>Neutral or olive:</b> teal, peacock blue, coral, plum and both gold and silver.', '<b>For Diwali and weddings:</b> jewel tones photograph well on brown skin at night; save pastels for daytime functions.', '<b>Kurtis for everyday:</b> pick one or two hero colors from your palette and pair them with neutral bottoms you already own.']],
      ['Which color season is brown skin?', 'Brown skin appears in every season family. Deep warm skin often lands in Deep Autumn, deep cool skin in Deep Winter, and medium olive skin in Soft or True Autumn. The season depends on your hair, eyes and contrast too. ' + a('/blog/seasonal-color-analysis-explained/', 'All 12 seasons, explained') + '.'],
      ['Find your exact palette', 'Style BFF\'s free Style Profile runs a seasonal color analysis from one selfie and uses that palette for every outfit idea, including festive looks, built from your own wardrobe and shown on your photo. It is available in India on Google Play and the App Store. Take the selfie in daylight with no filter. ' + a('/features/color-analysis/', 'How the color analysis works') + '.']
    ],
    tableInSection: table(['Your undertone', 'Often flattering on brown skin', 'Often harder near the face'], [['Warm (golden, peachy)', 'Mustard, rust, olive, terracotta, coral, cream, gold', 'Icy pastels, cool greys, stark white'], ['Cool (pink, red, blue)', 'Cobalt, emerald, fuchsia, berry, plum, pure white, silver', 'Orange, mustard, camel'], ['Neutral or olive', 'Teal, jade, dusty rose, wine, soft white', 'Very neon or muddy shades'], ['Deep skin, any undertone', 'High-contrast pairings, jewel tones, bright white', 'Colors close to your own skin tone'], ['Light-medium brown', 'Medium-depth colors: coral, teal, rose, sage', 'Very heavy black head to toe']]),
    faq: [
      ['Does white suit brown skin?', 'Yes. Cool and deep skin tones usually suit crisp white; warm skin tones often look better in ivory or cream.'],
      ['Can brown skin wear pastels?', 'Yes. Choose clearer pastels such as mint, powder blue or lilac over dusty or greyed ones, and keep them away from the face if they look ashy.'],
      ['What colors suit dusky skin for a saree?', 'Rich jewel tones such as emerald, royal blue, magenta and maroon flatter most deeper skin tones. Match the zari to your undertone: gold for warm, silver for cool.']
    ],
    sources: [PLAY, APP],
    related: ['/blog/what-colors-look-good-on-me/', '/blog/best-free-color-analysis-apps/', '/features/color-analysis/', '/quiz/', '/answers/best-fashion-styling-apps-in-india/']
  }
];
