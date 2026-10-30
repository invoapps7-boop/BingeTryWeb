// Reviewed answer content (2026-10-29). Each entry: a direct, quotable answer first, then supporting
// sections. Third-party facts carry a source link. Style BFF facts were checked against the live
// App Store listing (apps.apple.com/app/id6767003047) on 2026-10-29.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';

export const answerContent = {
  'what-is-an-ai-personal-stylist': {
    sections: [
      ['What does an AI stylist actually do?', ['Reads personal inputs such as skin tone, contrast, body proportions and style preferences.', 'Organizes the clothes you already own into a searchable digital wardrobe.', 'Builds complete outfits for a specific day, occasion or weather.', 'In apps like Style BFF, renders the suggested outfit on your own photo so you can judge it visually.']],
      ['How is it different from asking a chatbot?', 'A general chatbot starts from zero each time unless you re-explain yourself. A dedicated AI stylist keeps a persistent profile and your wardrobe, so suggestions get more specific over time. See ' + a('/compare/chatgpt-as-a-stylist/', 'ChatGPT as a stylist vs a stylist app') + '.'],
      ['Where does it fall short?', 'AI cannot feel fabric, check tailoring or see how a garment moves on your body. Treat outfit renders as a styling preview and use retailer size guides for fit.']
    ]
  },
  'how-does-an-ai-stylist-app-work': {
    sections: [
      ['The usual four steps', ['<b>Profile:</b> a selfie and a short quiz estimate your color season, body shape and style direction.', '<b>Wardrobe:</b> you add clothes by photo, or the app extracts them from gallery photos you select.', '<b>Recommendation:</b> the app ranks outfit combinations for an occasion, the weather and your palette.', '<b>Preview:</b> some apps render the look on an avatar or, in Style BFF, on your own photo.']],
      ['What makes the advice good or bad?', 'Quality depends on inputs. A clear daylight selfie, accurate clothing photos and honest feedback on suggestions all improve results. Apps that ignore your wardrobe tend to recommend things you would need to buy.'],
      ['Try it', 'Style BFF builds the Style Profile for free. ' + a('/how-it-works/', 'See how Style BFF works') + '.']
    ]
  },
  'what-is-the-best-ai-stylist-app': {
    answer: 'There is no single best AI stylist app; it depends on the job. For organizing and tracking a large wardrobe, closet apps such as Whering or Acloset are strong. For color analysis on its own, Style DNA or Dressly. For daily outfits from your own clothes, rendered on your own photo, with try-on from Pinterest, Instagram and store links, Style BFF is built for that.',
    sections: [
      ['Match the app to your main problem', '<div class="table-wrap"><table><thead><tr><th>If you mainly want…</th><th>Look at</th></tr></thead><tbody><tr><td>To catalog clothes and track wears</td><td>Whering, Acloset, Indyx</td></tr><tr><td>Color and style-type analysis</td><td>Style DNA, Dressly</td></tr><tr><td>Outfit planning with an avatar</td><td>Alta</td></tr><tr><td>Daily outfits on your own photo, plus link try-on</td><td>Style BFF</td></tr></tbody></table></div>'],
      ['What to check before paying', ['Does it work on your platform? Some apps are iPhone-only.', 'Does try-on use your real photo, an avatar or a model?', 'Can it style the clothes you already own?', 'What is in the free tier versus the subscription?']],
      ['Compare in detail', a('/compare/', 'Side-by-side comparisons') + ' cover Whering, Alta, Style DNA, Dressly and Doppl alternatives using each product’s official listing.']
    ]
  },
  'is-there-a-free-ai-stylist-app': {
    answer: 'Yes. Most AI stylist apps have a free tier. Style BFF gives you a free Style Profile with no card required: your seasonal color palette, body type and three personal style rules. Daily outfits on your photo, unlimited try-ons and the full closet are part of Style BFF Plus, sold weekly, monthly or yearly.',
    sections: [
      ['What free tiers usually include', ['A one-time color or style analysis.', 'A limited number of wardrobe items or outfit ideas.', 'A few try-on generations before a paywall.']],
      ['What usually costs money', 'Unlimited try-on renders, daily recommendations and large closets are the common paid features, because image generation has a real cost per use. Check the current App Store or Google Play listing for prices in your region.'],
      ['Start free', a('/download/', 'Download Style BFF') + ' and create your Style Profile without a card.']
    ]
  },
  'how-much-does-a-personal-stylist-cost': {
    answer: 'A human personal stylist commonly charges around $100 to $400 per session in the US, and more for wardrobe edits or personal shopping days. Rates vary with city, experience and scope. AI stylist apps cost far less, usually a free tier plus a weekly, monthly or yearly subscription, but they do not replace a professional’s in-person judgment.',
    sections: [
      ['What drives the price of a human stylist', ['Location and the stylist’s experience.', 'Scope: one consultation, a closet audit, or ongoing shopping.', 'Hourly versus package pricing.', 'Online-only services are usually cheaper than in-person sessions.']],
      ['When an app is enough', 'If you want daily outfit decisions, color guidance and a second opinion before buying, an app covers most of that for a fraction of the cost. For tailoring, special events or a full wardrobe rebuild, a human stylist adds real value.'],
      ['Read next', a('/answers/is-an-ai-stylist-better-than-a-human-stylist/', 'Is an AI stylist better than a human stylist?')]
    ]
  },
  'is-an-ai-stylist-better-than-a-human-stylist': {
    sections: [
      ['Where AI wins', ['Available every morning, in seconds.', 'Cheaper than repeated sessions.', 'Remembers your whole wardrobe and suggests combinations you forget.', 'Can show a look on your photo before you buy.']],
      ['Where a human wins', ['Sees fit, fabric and posture in person.', 'Handles tailoring, special events and complex body or lifestyle needs.', 'Builds a relationship and challenges you in ways an app will not.']],
      ['A practical mix', 'Many people use an AI stylist for everyday decisions and book a human stylist for a big wardrobe reset or an important event.']
    ]
  },
  'what-is-virtual-try-on-and-how-accurate-is-it': {
    sections: [
      ['Three kinds of try-on', ['<b>Model or avatar:</b> clothing placed on a generic model or a 3D avatar.', '<b>AR camera:</b> live overlays, common for glasses, makeup and shoes.', '<b>Generative photo try-on:</b> AI redraws the garment onto a photo of you, which is what Style BFF does.']],
      ['What it gets right', 'Color against your skin, overall silhouette, length and the general mood of an outfit.'],
      ['What it cannot promise', 'Exact fit, fabric drape, stretch, sheerness and fine details like stitching or prints. Always check measurements and the return policy. More detail: ' + a('/blog/is-ai-virtual-try-on-accurate/', 'Is AI virtual try-on accurate?')]
    ]
  },
  'can-i-try-on-clothes-with-my-own-photo': {
    sections: [
      ['How to get a good result', ['Use a clear, well-lit, unfiltered photo.', 'Stand front-facing with your full outfit area visible.', 'Wear fitted, plain clothing so the new outfit renders cleanly.', 'Avoid other people or busy backgrounds.']],
      ['What you can try on in Style BFF', 'Daily outfits built from your closet, plus looks shared from supported public Pinterest, Instagram and store links.']
    ]
  },
  'can-i-try-on-an-outfit-from-pinterest-or-instagram': {
    sections: [
      ['Step by step', ['Open the Pin or Instagram post.', 'Tap Share and choose Style BFF.', 'Pick your photo.', 'Review the try-on, then save it or find similar pieces in your own closet.']],
      ['Why some links fail', 'Private accounts, deleted posts, carousels where the outfit is unclear, and some restricted content cannot be imported. Pinterest’s own Try On feature focuses on beauty products, not full outfits.'],
      ['Full guide', a('/blog/how-to-try-on-pinterest-outfits-on-yourself/', 'How to try on Pinterest outfits on yourself')]
    ]
  },
  'what-happened-to-google-doppl': {
    answer: 'Google shut down Doppl, its experimental virtual try-on app, on April 30, 2026. Doppl launched in the US in June 2025 on iOS and Android through Google Labs. Google said its try-on technology continues on eligible product listings and image results across Google Search and Shopping instead of in a standalone app.',
    sections: [
      ['Timeline', ['<b>June 2025:</b> Doppl launches in the US on iOS and Android as a Google Labs experiment.', '<b>March 2026:</b> Google Labs announces the shutdown on X.', '<b>April 30, 2026:</b> the app stops working.', '<b>After that:</b> try-on appears on eligible apparel listings in Google Search and Shopping.']],
      ['What to use now', 'Google’s in-Search try-on works for products Google lists. To try on looks from Pinterest, Instagram or any store link, or to style clothes you already own, you need a separate app. See ' + a('/compare/doppl-alternatives/', 'Doppl alternatives') + '.']
    ],
    sources: [['Google Labs announcement on X', 'https://x.com/GoogleLabs/status/2036188820128071786'], ['Google’s Doppl launch post', 'https://blog.google/innovation-and-ai/models-and-research/google-labs/doppl/']]
  },
  'what-is-the-best-doppl-alternative': {
    answer: 'Since Doppl closed on April 30, 2026, the closest options are Google’s own try-on inside Search and Shopping for listed products, and dedicated apps for everything else. Style BFF is a Doppl alternative for iOS and Android that tries on looks from Pinterest, Instagram and store links on your own photo, and also styles the clothes you already own.',
    sections: [
      ['Pick by what you used Doppl for', ['<b>Trying on products you find on Google:</b> use the try-on button on eligible Google Shopping listings.', '<b>Trying on social-media looks:</b> use an app that accepts Pinterest and Instagram links, such as Style BFF.', '<b>Styling your own wardrobe:</b> choose an app with a digital closet and outfit suggestions.']],
      ['Full comparison', a('/compare/doppl-alternatives/', 'Doppl alternatives compared')]
    ],
    sources: [['Google Labs announcement on X', 'https://x.com/GoogleLabs/status/2036188820128071786']]
  },
  'what-is-seasonal-color-analysis': {
    answer: 'Seasonal color analysis groups personal coloring into seasons (Spring, Summer, Autumn and Winter) based on undertone (warm or cool), value (light or deep) and chroma (bright or soft). The popular 12-season system splits each season into three. The result is a palette of colors that tends to make your skin look clearer and your features more defined.',
    sections: [
      ['The three dimensions', ['<b>Hue or undertone:</b> warm (golden) versus cool (pink or blue).', '<b>Value:</b> how light or deep your overall coloring is.', '<b>Chroma:</b> how bright and clear versus soft and muted your coloring is.']],
      ['Where it came from', 'The four-season idea was popularized by Carole Jackson’s 1980 book Color Me Beautiful. Later systems expanded it to 12 or 16 seasons for finer distinctions.'],
      ['How to use the result', 'Wear your best colors near your face, use your palette’s neutrals for big pieces, and repeat one accent color across an outfit. Full guide: ' + a('/blog/seasonal-color-analysis-explained/', 'Seasonal color analysis explained') + '.']
    ]
  },
  'how-do-i-find-my-color-season': {
    answer: 'Find your color season by testing undertone, value and chroma in natural daylight with no makeup. Compare gold versus silver and warm versus cool fabrics near your face, then notice which make your skin look even and your eyes brighter. A professional draping session is the most reliable method; a selfie-based app or quiz gives a useful starting point.',
    sections: [
      ['A quick at-home test', ['Stand by a window in daylight, makeup-free, hair pulled back.', 'Hold gold, then silver near your face. Gold flattering suggests warm; silver suggests cool.', 'Compare a bright color with a dusty version of it. Bright suggests clear chroma; dusty suggests soft.', 'Compare a light pastel with a deep shade to judge value.']],
      ['Common mistakes', ['Testing under warm indoor bulbs.', 'Judging dyed hair instead of natural coloring.', 'Using filtered phone photos.']],
      ['Shortcuts', 'Take the free ' + a('/quiz/', 'color season quiz') + ' or get a selfie-based palette in the Style BFF app.']
    ]
  },
  'is-ai-color-analysis-accurate': {
    answer: 'AI color analysis is a useful starting point but less reliable than professional in-person draping. Accuracy depends heavily on the photo: lighting, white balance, makeup and camera processing can shift results by a whole season. Use a daylight, unfiltered selfie, then confirm the result by testing a few palette colors against your face.',
    sections: [
      ['Why results vary', ['Phone cameras auto-adjust white balance and smooth skin.', 'Warm indoor light pushes results toward warm seasons.', 'Makeup, tans and dyed hair change the input.']],
      ['How to get a better result', ['Shoot near a window in indirect daylight.', 'Remove makeup and turn off beauty filters.', 'Hold a white sheet of paper in frame as a neutral reference.']],
      ['Check it yourself', 'If your result says Soft Summer, try a dusty rose versus a bright fuchsia near your face. Your eyes are the best final judge. Learn the seasons: ' + a('/answers/what-are-the-12-color-seasons/', 'the 12 color seasons') + '.']
    ]
  },
  'what-are-the-12-color-seasons': {
    answer: 'The 12 color seasons are Bright Spring, True Spring, Light Spring, Light Summer, True Summer, Soft Summer, Soft Autumn, True Autumn, Deep Autumn, Deep Winter, True Winter and Bright Winter. Each of the four classic seasons splits into three, depending on whether temperature, value or chroma is the dominant feature of your coloring.',
    sections: [
      ['The 12 at a glance', '<div class="table-wrap"><table><thead><tr><th>Season</th><th>Dominant trait</th><th>Feel</th></tr></thead><tbody>' + [
        ['Bright Spring','Bright, warm-leaning','Clear, vivid, high energy'],['True Spring','Warm','Golden, fresh, light to medium'],['Light Spring','Light, warm-leaning','Delicate, airy, warm pastels'],
        ['Light Summer','Light, cool-leaning','Soft pastels, low contrast'],['True Summer','Cool','Blue-based, gently muted'],['Soft Summer','Soft, cool-leaning','Dusty, smoky, blended'],
        ['Soft Autumn','Soft, warm-leaning','Muted earth tones'],['True Autumn','Warm','Rich, golden, earthy'],['Deep Autumn','Deep, warm-leaning','Dark, warm, intense'],
        ['Deep Winter','Deep, cool-leaning','Dark, cool, high contrast'],['True Winter','Cool','Icy, clear, blue-based'],['Bright Winter','Bright, cool-leaning','Jewel tones, maximum contrast']
      ].map(r => '<tr><td>' + a('/quiz/result/' + r[0].toLowerCase().replace(' ', '-') + '/', r[0]) + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>').join('') + '</tbody></table></div>'],
      ['Find yours', a('/quiz/', 'Take the color season quiz') + ' or read ' + a('/answers/how-do-i-find-my-color-season/', 'how to find your color season') + '.']
    ]
  },
  'what-is-a-kibbe-body-type': {
    answer: 'A Kibbe body type is one of 13 style identities from David Kibbe’s 1987 book Metamorphosis. Instead of comparing hip and waist measurements, Kibbe looks at the balance of yin (soft, curved, small) and yang (sharp, long, angular) in your bone structure and flesh. The types fall into Dramatic, Natural, Classic, Gamine and Romantic families, each with recommended lines and fabrics.',
    sections: [
      ['The 13 types', ['<b>Dramatic:</b> Dramatic, Soft Dramatic.', '<b>Natural:</b> Flamboyant Natural, Natural, Soft Natural.', '<b>Classic:</b> Dramatic Classic, Classic, Soft Classic.', '<b>Gamine:</b> Flamboyant Gamine, Gamine, Soft Gamine.', '<b>Romantic:</b> Theatrical Romantic, Romantic.']],
      ['Kibbe versus body shape', 'Body-shape systems (pear, apple, hourglass) describe proportions. Kibbe describes overall line and essence, so two people with the same measurements can be different Kibbe types. ' + a('/answers/how-do-i-know-my-body-type/', 'How do I know my body type?')]
    ]
  },
  'how-do-i-know-my-body-type': {
    answer: 'Measure your shoulders, bust, waist and hips, then compare them. Hips wider than shoulders suggests a pear (triangle); shoulders wider than hips, an inverted triangle; similar shoulders and hips with a defined waist, an hourglass; similar measurements with little waist definition, a rectangle; a fuller midsection, an apple. Use the result to choose balancing silhouettes, not as a rule.',
    sections: [
      ['How to measure', ['<b>Shoulders:</b> around the widest point of your shoulders.', '<b>Bust:</b> around the fullest part.', '<b>Waist:</b> at the narrowest point.', '<b>Hips:</b> around the fullest part of your hips and seat.']],
      ['The five common shapes', ['<b>Hourglass:</b> bust and hips similar, waist clearly smaller.', '<b>Pear:</b> hips noticeably wider than bust and shoulders.', '<b>Inverted triangle:</b> shoulders or bust wider than hips.', '<b>Rectangle:</b> bust, waist and hips within a few inches of each other.', '<b>Apple:</b> weight carried around the middle, often with slimmer legs.']],
      ['Faster option', 'Style BFF estimates body shape from a photo as part of the free Style Profile. Learn more: ' + a('/features/body-type/', 'body type guidance') + '.']
    ]
  },
  'what-is-a-digital-closet-app': {
    answer: 'A digital closet app is a phone app that stores photos of the clothes you own so you can browse, combine and plan outfits without opening your wardrobe. Most remove photo backgrounds automatically, tag items by type and color, and suggest outfits. Some, like Style BFF, also learn your colors and show outfits on your own photo.',
    sections: [
      ['What you can do with one', ['See everything you own at a glance.', 'Build outfits and plan a week or a trip.', 'Spot gaps before shopping.', 'Track cost per wear and what you never wear.']],
      ['How to set one up fast', a('/blog/how-to-build-a-digital-closet/', 'How to build a digital closet') + ' walks through it. Style BFF can also extract clothes from gallery photos you select.']
    ]
  },
  'what-is-the-best-digital-closet-app': {
    answer: 'The best digital closet app depends on what you want once the closet is built. Whering and Acloset are strong for cataloging, wear tracking and outfit planning. Indyx adds paid human stylists. Style BFF focuses on what comes next: outfits for real occasions from your clothes, guided by your color season and shown on your own photo.',
    sections: [
      ['Quick guide', ['<b>Fastest setup:</b> apps that extract items from existing photos or purchase receipts.', '<b>Wear tracking and stats:</b> Whering, Acloset.', '<b>Human stylist add-on:</b> Indyx.', '<b>Personal styling and try-on:</b> Style BFF.']],
      ['Compare', a('/compare/style-bff-vs-whering/', 'Style BFF vs Whering') + ', ' + a('/blog/style-bff-vs-acloset-in-depth/', 'Style BFF vs Acloset') + ', ' + a('/blog/style-bff-vs-indyx/', 'Style BFF vs Indyx') + ' and ' + a('/blog/best-digital-wardrobe-app/', 'how to choose a digital wardrobe app') + '.']
    ]
  },
  'what-is-a-capsule-wardrobe': {
    answer: 'A capsule wardrobe is a small, deliberately chosen set of clothes, often 25 to 40 pieces including shoes, that all work together so you can create many outfits from few items. The idea is credited to London boutique owner Susie Faux in the 1970s and was popularized by designer Donna Karan’s 1985 Seven Easy Pieces collection.',
    sections: [
      ['What makes a capsule work', ['A tight color story: two or three neutrals plus one or two accents.', 'Pieces that suit your coloring and body shape.', 'Items matched to the life you actually live, not an ideal one.']],
      ['Build one', a('/answers/how-many-clothes-do-i-need-for-a-capsule-wardrobe/', 'How many clothes you need') + ' and ' + a('/blog/how-to-create-a-capsule-wardrobe-that-feels-like-you/', 'how to create a capsule that feels like you') + '.']
    ]
  },
  'how-many-clothes-do-i-need-for-a-capsule-wardrobe': {
    answer: 'Most capsule wardrobes use 25 to 40 pieces per season, counting tops, bottoms, dresses, outerwear and shoes, but not underwear, activewear or accessories. The popular 10x10 challenge uses just 10 pieces for 10 days. The right number is the smallest set that covers your real weekly schedule without laundry stress.',
    sections: [
      ['A sample 30-piece split', ['10 tops', '6 bottoms', '3 dresses or jumpsuits', '4 layers or jackets', '2 coats', '5 pairs of shoes']],
      ['Adjust for your life', 'If you work in an office five days a week, weight the capsule toward workwear. If you are home most days, cut formal pieces and add comfortable basics you will actually reach for.']
    ]
  },
  'what-is-cost-per-wear': {
    answer: 'Cost per wear is the price of a garment divided by the number of times you wear it. A $120 coat worn 60 times costs $2 per wear; a $40 dress worn twice costs $20 per wear. It is a simple way to judge whether a purchase is good value and to favor versatile, durable pieces.',
    sections: [
      ['The formula', '<b>Cost per wear = (purchase price + care costs) ÷ number of wears.</b> Including dry cleaning or tailoring gives a truer number.'],
      ['How to use it', ['Before buying, estimate realistic wears in the next year.', 'Track wears in a digital closet to see your real numbers.', 'Compare a cheaper trend piece against a pricier staple.']]
    ]
  },
  'how-do-i-know-if-an-outfit-suits-me': {
    answer: 'An outfit suits you when people notice you before the clothes: your skin looks even, your eyes look bright, the proportions balance your shape, and you are comfortable enough to forget what you are wearing. Check color near your face first, then fit at the shoulders and waist, then whether the style matches the occasion.',
    sections: [
      ['A 30-second mirror check', ['<b>Color:</b> does your skin look clearer or more tired?', '<b>Line:</b> do the shoulders, waist and hem land in flattering places?', '<b>Proportion:</b> is there balance between top and bottom volume?', '<b>Occasion:</b> is it right for where you are going?', '<b>Feeling:</b> would you be happy to be photographed in it?']],
      ['Get a second opinion', 'Take a photo in daylight, because mirrors flatter. Or try the outfit on your photo in Style BFF before you buy it.']
    ]
  },
  'why-do-i-feel-like-i-have-nothing-to-wear': {
    answer: 'You feel like you have nothing to wear when your clothes do not combine easily, do not fit your current life or body, or are hidden from view. It is rarely about quantity. The fix is to identify the pieces you reach for, find the missing connectors between them, and keep your options visible.',
    sections: [
      ['Common causes', ['Clothes bought for an imagined life, not your real week.', 'Lots of statement pieces and few basics to connect them.', 'Colors that clash with each other or with you.', 'Items that no longer fit and add decision fatigue.']],
      ['What to do this week', a('/blog/nothing-to-wear-use-what-you-own/', 'Use what you own') + ' and ' + a('/blog/how-to-find-wardrobe-gaps-before-shopping/', 'find wardrobe gaps before shopping') + '.']
    ]
  },
  'what-should-i-wear-today': {
    answer: 'Start with three questions: where are you going, what is the weather, and how do you want to feel? Pick one reliable base (jeans, trousers or a dress), add a top in one of your best colors near your face, then choose shoes that match the formality. Repeat one color or texture to make the outfit look intentional.',
    sections: [
      ['A quick formula', ['Base you trust + best-color top + shoes that match the formality.', 'Add one layer for the weather.', 'Repeat one color or metal in an accessory.']],
      ['Let your BFF decide', 'Style BFF builds a daily outfit from your closet for your weather and plans, then shows it on your photo. ' + a('/features/daily-outfits-on-you/', 'Daily outfits on you') + '.']
    ]
  },
  'does-style-bff-work-on-android': {
    answer: 'Yes. Style BFF is available on Android through Google Play and on iPhone through the App Store. Your free Style Profile, digital closet, daily outfits and link try-on work on both. On Android, share a Pinterest, Instagram or store link to Style BFF from the share sheet to try it on.',
    sections: [
      ['Download links', ['<a href="https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon">Style BFF on Google Play</a>', '<a href="https://apps.apple.com/app/id6767003047">Style BFF on the App Store</a> (iPhone; requires iOS 15.1 or later)']],
      ['Subscriptions', 'On Android, manage or cancel Style BFF Plus in Google Play Subscriptions.']
    ]
  },
  'how-much-does-style-bff-cost': {
    answer: 'Style BFF is free to download, and the Style Profile is free with no card required. Daily outfits on your photo, unlimited try-ons and your full closet are included in Style BFF Plus, available as a weekly, monthly or yearly subscription. Exact prices depend on your country and store, so check the App Store or Google Play listing.',
    sections: [
      ['Free versus Plus', '<div class="table-wrap"><table><thead><tr><th></th><th>Free</th><th>Plus</th></tr></thead><tbody><tr><td>Style Profile (color season, body type, three style rules)</td><td>✓</td><td>✓</td></tr><tr><td>Daily outfits on your photo</td><td>–</td><td>✓</td></tr><tr><td>Unlimited try-ons</td><td>–</td><td>✓</td></tr><tr><td>Full closet</td><td>–</td><td>✓</td></tr></tbody></table></div>'],
      ['Billing', 'Subscriptions renew automatically unless cancelled at least 24 hours before the period ends. Manage them in your Apple ID or Google Play settings.']
    ]
  },
  'is-style-bff-free': {
    answer: 'Partly. Style BFF is free to download and the Style Profile is free: you get your seasonal color palette, body type and three personal style rules without entering a card. Daily outfits on your own photo, unlimited try-ons and the full closet need Style BFF Plus, a weekly, monthly or yearly subscription.',
    sections: [
      ['Details', a('/answers/how-much-does-style-bff-cost/', 'How much does Style BFF cost?')]
    ]
  },
  'is-my-photo-safe-in-style-bff': {
    answer: 'Style BFF uses the photos you choose to provide only to deliver styling features such as your Style Profile, wardrobe scanning and try-on. You can delete your photos and your account at any time from inside the app. Wardrobe scanning uses only the gallery photos you select, not your whole camera roll.',
    sections: [
      ['Your controls', ['Choose which gallery photos to share for wardrobe scanning.', 'Delete individual photos in the app.', 'Delete your account from settings or via ' + a('/delete-account/', 'the delete-account page') + '.']],
      ['Read the policy', a('/privacy/', 'Style BFF privacy policy') + '. Apple’s App Store privacy label for Style BFF lists user content, contact info, identifiers, purchases and usage data.']
    ]
  },
  'what-was-bingetry-is-bingetry-the-same-as-style-bff': {
    answer: 'Yes. BingeTry is the former name of Style BFF. It is the same AI personal stylist and virtual try-on app, from the same team, now called Style BFF on the App Store and Google Play. It uses the same App Store and Google Play listings, so if you had BingeTry installed, updating the app brings you to Style BFF.',
    sections: [
      ['Why the name changed', 'The new name says what the app does: a personal stylist that acts like a best friend for getting dressed. ' + a('/bingetry/', 'Read about the rename') + '.']
    ]
  }
};
