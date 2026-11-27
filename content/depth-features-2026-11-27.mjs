// Extra depth for the 7 feature pages (seo-ops B22, cycle 2026-11-27).
// Product facts come only from the live Google Play listing for Style BFF, opened 2026-11-27.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';

export const depthFeatures = {
  '/features/virtual-try-on/': {
    sections: [
      ['How virtual try-on works in Style BFF', ['Add one clear photo of yourself: full length, good light, fitted clothes, nothing covering your body.', 'Pick what to try: an outfit idea from your stylist, a look built from your own closet, or a Pinterest, Instagram or store link you share to the app.', 'Style BFF renders the outfit on your photo, not on a model or a cartoon avatar.', 'Compare versions side by side, save the ones you like and restyle the rest.']],
      ['What you can judge from a try-on, and what you cannot', table(['Good for', 'Not a substitute for'], [['Whether a color works near your face', 'Checking the exact size or fit'], ['The overall silhouette and proportion', 'Feeling the fabric, stretch or weight'], ['Comparing two or three outfit directions quickly', 'Reading the size chart and measurements'], ['Deciding if a saved look is "you" before buying', 'The return policy of the store']])],
      ['Get a better result', ['Use the same photo for every comparison, so you compare clothes, not lighting.', 'Stand straight, facing the camera, arms slightly away from your body.', 'Plain background, daylight from a window, no filters or beauty mode.', 'Upload a new photo after a big change, such as a haircut or a different body shape.']],
      ['Who it is for', 'Virtual try-on is most useful if you save a lot of outfit inspiration but rarely wear it, if you shop online and return a lot, or if you want to see a new color or shape on yourself before committing. Because every look is built on your Style Profile (your color season and body type), the try-on is a styling decision, not just a picture. ' + a('/blog/is-ai-virtual-try-on-accurate/', 'How accurate is AI try-on?') + '.'],
      ['Free or Plus?', 'Your Style Profile is free. Unlimited virtual try-on is part of Style BFF Plus, which is available weekly, monthly or yearly; check the store listing for current prices in your country.']
    ],
    faq: [['Does Style BFF use an avatar or my real photo?', 'Your own photo. Outfits are rendered on the photo you add, not on a model or an avatar.'], ['Can I try on clothes from a store website?', 'Yes. Share a supported product page from a store to Style BFF, the same way you share a Pinterest or Instagram link.']]
  },
  '/features/daily-outfits-on-you/': {
    sections: [
      ['What happens each morning', ['Your stylist picks an outfit for the day using your weather, your plans and your color palette.', 'The outfit is shown on your own photo, so you see it the way you would in a mirror.', 'Swipe for more outfit ideas if the first one is not right.', 'Save favorites, and add the home screen widget to see today\'s outfit without opening the app.']],
      ['What shapes the outfit', table(['Input', 'Why it matters'], [['Weather', 'Layers and fabrics that make sense for the day'], ['Your plans', 'Work, a date, travel or errands need different levels of dressiness'], ['Color season', 'Colors near your face that suit your coloring'], ['Body type', 'Silhouettes that create the balance you want'], ['Your closet', 'Outfits built from clothes you already own']])],
      ['Why daily, not occasional', 'Most "nothing to wear" moments happen on ordinary weekdays, not before big events. A daily pick removes one decision from your morning and slowly shows you combinations from your own wardrobe that you had not tried. Outfit streaks keep the habit going if you want a nudge. ' + a('/blog/what-should-i-wear-today-from-my-closet/', 'What to wear today from your own closet') + '.'],
      ['Make the picks better over time', ['Add more of your clothes: the bigger your digital closet, the more varied the outfits.', 'Tell your stylist what the day is really for, such as "client meeting, then dinner".', 'Save the outfits you actually wore so you can repeat them.', 'Skip the looks that do not feel like you rather than forcing them.']],
      ['Free or Plus?', 'Your Style Profile is free. Daily outfits on you are part of Style BFF Plus, available weekly, monthly or yearly.']
    ],
    faq: [['Does the daily outfit use clothes I own?', 'Yes. Outfits are built from your digital closet, guided by your color season and body type.'], ['Is there a widget?', 'Yes. Add the home screen widget to see today\'s outfit on you.']]
  },
  '/features/try-on-from-pinterest-instagram/': {
    sections: [
      ['How to try a saved look on yourself', ['Open the outfit in Pinterest, Instagram or a store\'s product page.', 'Tap share and choose Style BFF.', 'Style BFF brings the visible outfit into the app and renders it on your own photo.', 'Save it, compare it with other looks, or ask your stylist to rebuild it from your closet.']],
      ['Links that work best', table(['Works well', 'May not import'], [['Public Pinterest pins showing one clear outfit', 'Private or deleted posts'], ['Instagram posts with the full outfit visible', 'Collages with many outfits in one image'], ['Store product pages with a clear garment photo', 'Pages that block sharing or need a login'], ['Full-length photos in good light', 'Heavily cropped or dark images']])],
      ['From inspiration to something you can wear', 'A saved look is a direction, not a uniform. Keep the part you love (the color contrast, the shape or the layering) and adapt the rest to your palette and proportions. If you would rather not buy anything, ask your stylist to rebuild the mood from clothes you already own. ' + a('/blog/recreate-a-pinterest-outfit-with-your-own-clothes/', 'How to recreate a Pinterest outfit with your own clothes') + '.'],
      ['Before you buy', ['Use the try-on to judge color and overall shape.', 'Check the store\'s size chart and measurements for fit.', 'Read the fabric details and the return policy.', 'If you need one missing piece, see whether it also works with other things you own.']],
      ['Free or Plus?', 'Your Style Profile is free. Unlimited virtual try-on is part of Style BFF Plus, available weekly, monthly or yearly.']
    ],
    faq: [['Can I try on a TikTok outfit?', 'Style BFF\'s listing names Instagram, Pinterest and store links. For other apps, a clear screenshot or saved image of the outfit is the practical route; check the app for what it accepts.'], ['Does the original image need to show the whole outfit?', 'It works best when the outfit is fully visible and well lit. Cropped or dark images give the app less to work with.']]
  },
  '/features/color-analysis/': {
    sections: [
      ['How the free color analysis works', ['Take one selfie in daylight, facing a window, with no filters and no heavy makeup.', 'Answer a five-question style quiz.', 'Style BFF runs a seasonal color analysis across all 12 seasons and finds your body type.', 'You get a personal Style Profile (color season, body shape and three style rules) that you can screenshot and keep.']],
      ['The 12 seasons at a glance', table(['Season family', 'Overall character', 'Sub-seasons'], [['Spring', 'Warm, clear and light to medium', 'Light, True (Warm), Bright'], ['Summer', 'Cool, soft and light to medium', 'Light, True (Cool), Soft'], ['Autumn', 'Warm, muted and medium to deep', 'Soft, True (Warm), Deep'], ['Winter', 'Cool, clear and high contrast', 'Bright, True (Cool), Deep']]) + '<p>' + a('/blog/seasonal-color-analysis-explained/', 'All 12 seasons explained') + '.</p>'],
      ['What makes it useful, not just interesting', 'A palette that lives on a results screen is easy to forget. In Style BFF your palette feeds every outfit idea, so color advice is applied when you get dressed, shop or try a saved look on yourself. If a color is fighting your skin tone, your stylist says so and shows a fix.'],
      ['Check the result yourself', ['Hold two tops near your face in daylight: one warm (cream, camel), one cool (pure white, icy blue).', 'The one that makes your skin look even and your eyes brighter points to your undertone.', 'If the app and your mirror disagree, take a second selfie on another day and compare.', a('/blog/what-colors-look-good-on-me/', 'Step-by-step drape test') + '.']]
    ],
    faq: [['Is the color analysis really free?', 'Yes. The Style Profile, including your color season, body type and three style rules, is free.'], ['Does it work for brown and Indian skin tones?', 'Yes. Undertone matters more than depth, and brown skin appears in every season family. ' + a('/blog/what-colors-look-good-on-brown-skin/', 'Colors for brown skin') + '.']]
  },
  '/features/digital-closet/': {
    sections: [
      ['How your closet gets built', ['Let Style BFF scan your photo library on your device to find photos of you and pull out the clothing for review.', 'Nothing is added until you approve it.', 'Accepted items are uploaded to your private closet, where your stylist organizes them and creates clean, product-style versions.', 'You can also choose photos manually instead.']],
      ['What you can do with a digital closet', table(['Use', 'What it saves you'], [['Outfits from clothes you own', 'Buying things to solve a "nothing to wear" morning'], ['Capsules for a trip, season or workweek', 'Overpacking and repeat decisions'], ['Spot real gaps', 'Buying duplicates of what you already have'], ['Try new combinations on your photo', 'Guessing whether two pieces work together']])],
      ['Start small', 'You do not need your whole wardrobe on day one. Start with the 20 to 30 pieces you wear most, plus anything you love but never know how to style. Add the rest over a few weeks as photos come up. ' + a('/blog/how-to-build-a-digital-closet/', 'How to build a digital closet') + '.'],
      ['Privacy', 'Style BFF\'s listing says your photos are used only to style you, and you can delete them, or your account, at any time from inside the app. Only the items you approve are added to your closet.'],
      ['Free or Plus?', 'Your Style Profile is free. The full digital closet is part of Style BFF Plus, available weekly, monthly or yearly.']
    ],
    faq: [['Does Style BFF scan my whole gallery automatically?', 'It scans your photo library on your device to find photos of you and suggests clothing for review. Nothing is added until you approve it, and you can choose photos manually instead.'], ['Can I add clothes without photos of me wearing them?', 'Yes. You can choose photos manually.']]
  },
  '/features/body-type/': {
    sections: [
      ['How body guidance works', ['Your body type is found as part of the free Style Profile (one selfie plus a five-question quiz).', 'Style BFF suggests silhouettes that create the balance you want.', 'That guidance feeds every outfit idea, alongside your color season, the occasion and your own taste.']],
      ['Common body shapes and a starting point', table(['Shape', 'Usual proportion', 'A starting point'], [['Hourglass', 'Bust and hips similar, defined waist', 'Pieces that follow the waist'], ['Pear (triangle)', 'Hips wider than shoulders', 'Detail and structure on top, simple bottoms'], ['Inverted triangle', 'Shoulders wider than hips', 'Volume or color on the lower half'], ['Rectangle', 'Bust, waist and hips similar', 'Create shape with belts, layers and cuts'], ['Apple (round)', 'Fuller middle, slimmer legs', 'Long lines, open necklines, flowing fabrics']]) + '<p>' + a('/blog/how-to-dress-for-your-body-type/', 'How to dress for your body type') + '.</p>'],
      ['Guidance, not rules', 'Body shape advice is useful when it gives you options, and unhelpful when it becomes a list of things you are "not allowed" to wear. Style BFF treats proportion as one input among several: if you love a shape that breaks a rule, your stylist works with it instead of against it.'],
      ['Measure yourself at home', ['Measure the widest part of your shoulders or bust, your natural waist and the widest part of your hips.', 'Compare the numbers rather than judging the shape in a mirror.', 'Or use the free ' + a('/tools/body-shape-calculator/', 'body shape calculator') + '.']]
    ],
    faq: [['Is body type the same as body shape?', 'People use them interchangeably. Strictly, body shape describes proportions (pear, hourglass), while body type can also describe frame or build. ' + a('/glossary/body-type-vs-body-shape/', 'Body type vs body shape') + '.'], ['Does body guidance work for plus sizes?', 'Proportion guidance applies at every size; what changes is the cut and fabric that create the balance you want.']]
  },
  '/features/complete-the-closet/': {
    sections: [
      ['How gaps are found', ['Style BFF looks across your digital closet for the two or three pieces that would unlock the most new outfits.', 'For each suggestion, it shows how the piece works with what you already own before you spend anything.', 'You shop the look only when a piece truly earns its place.']],
      ['What a good "connector" piece looks like', table(['Connector', 'Why it unlocks outfits'], [['A neutral layer in your palette', 'Works over most tops and dresses you own'], ['Shoes that bridge casual and smart', 'Lets one outfit work for more occasions'], ['A plain bottom in a versatile cut', 'Pairs with prints and statement tops'], ['A belt or bag in a neutral metal tone', 'Pulls mismatched pieces together']])],
      ['Buy less, wear more', 'Most wardrobes are not short on clothes; they are short on pieces that connect the clothes. Before any purchase, count how many outfits it would create with things you already have. If the answer is fewer than three, wait. ' + a('/blog/how-to-find-wardrobe-gaps-before-shopping/', 'How to find wardrobe gaps before shopping') + '.'],
      ['A simple test before checkout', ['Can I wear it at least three different ways with what I own?', 'Is it in my color palette?', 'Does it suit at least one plan in my calendar this month?', 'Would I still want it if it were not on sale?']]
    ],
    faq: [['Does Complete the Closet tell me to buy a lot?', 'No. It looks for the two or three pieces that unlock the most outfits, and shows how each works with your wardrobe before you spend.'], ['Can I use it without shopping?', 'Yes. Seeing what is missing also helps you rediscover combinations you already have.']]
  }
};
