// Second pass of depth for B22/B23 (cycle 2026-11-27): practical sections only, no new third-party claims.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';

export const depthExtra = {
  '/blog/best-ai-personal-stylist-app/': { sections: [
    ['Getting good results from any AI stylist', ['Give it accurate inputs: a clear photo in daylight and honest answers about your lifestyle.', 'Add the clothes you actually wear, not only the special pieces.', 'Tell it what the day is for; "office then dinner" gets a better outfit than "work".', 'Rate or skip suggestions so it learns what you like.', 'Give it two weeks before you judge it; the first outfits are the least personal.']]
  ]},
  '/blog/does-this-outfit-match/': { sections: [
    ['Fixes for the most common mismatches', table(['Problem', 'Quick fix'], [['Too many colors', 'Swap one piece for a neutral'], ['Top and bottom fight for attention', 'Make one of them plain'], ['Looks too casual for the plan', 'Change the shoes or add a structured jacket'], ['Looks too formal', 'Swap a blazer for a knit, or heels for clean sneakers'], ['Proportions feel off', 'Tuck the top, roll the sleeves or add a belt'], ['Shoes look heavy', 'Pick a shoe with a slimmer shape or a lighter color']])],
    ['Neutrals that go with almost everything', 'Navy, black, white, cream, grey, camel, olive and denim act as neutrals. If you are unsure whether two colors match, put a neutral between them, or make one of them a neutral. Denim counts as a neutral with most colors, including other blues when the shades are clearly different.']
  ]},
  '/blog/what-colors-look-good-on-brown-skin/': { sections: [
    ['Colors for occasions', table(['Occasion', 'Colors that often work on brown skin'], [['Office', 'Navy, burgundy, olive, cobalt, crisp white or ivory'], ['Weddings and festive events', 'Emerald, magenta, royal blue, marigold, maroon with gold or silver zari'], ['Summer days', 'Coral, turquoise, mint, lemon, white'], ['Evenings', 'Jewel tones, black with gold jewelry, deep plum']])]
  ]},
  '/blog/what-colors-look-good-on-me/': { sections: [
    ['Quick answers by undertone', table(['If your undertone is…', 'Try', 'Go easy on'], [['Warm', 'Cream, camel, olive, rust, coral, gold jewelry', 'Icy pastels, pure black near the face'], ['Cool', 'Pure white, navy, berry, emerald, silver jewelry', 'Orange, mustard, warm browns'], ['Neutral', 'Soft white, teal, dusty rose, jade, both metals', 'Very neon or very muddy shades'], ['Olive', 'Teal, plum, forest green, warm reds', 'Pale yellow, some beiges']])]
  ]},
  '/blog/best-free-color-analysis-apps/': { sections: [
    ['Take a selfie that gives an accurate result', ['Face a window in indirect daylight, around midday if you can.', 'Turn off beauty mode, filters and HDR.', 'Wear a white or grey top and pull dyed hair away from your face.', 'Hold the phone at eye level and keep your face fully visible.']]
  ]},
  '/blog/how-to-try-on-pinterest-outfits-on-yourself/': { sections: [
    ['Take a photo that gives a good try-on', table(['Do', 'Avoid'], [['Full-length, head to toe in frame', 'Cropped at the knees or neck'], ['Daylight facing a window', 'Warm indoor bulbs or harsh flash'], ['Fitted clothes, arms slightly away from the body', 'Baggy layers or crossed arms'], ['Plain wall or door behind you', 'Busy rooms and mirrors'], ['Phone at chest height, straight on', 'Steep angles from above or below']]) + '<p>Use the same photo for every comparison so the only thing that changes is the outfit.</p>'],
    ['A quick checklist before you buy a look', ['Does the color suit you near your face in the preview?', 'Does the shape balance your proportions?', 'Can you wear the key piece at least three ways with clothes you own?', 'Have you checked the size chart, fabric and return policy?']],
    ['Example: one pin, three outcomes', 'Say you saved a pin of a camel coat over a white knit and wide-leg jeans. The try-on shows camel washes you out: keep the shape, swap the coat for navy or olive from your palette. Or the look works, and you already own the jeans and knit: you only need the coat, and the try-on helped you decide. Or the proportions overwhelm you: try the same look with straight-leg trousers instead.']
  ]},
  '/blog/ai-outfit-planner-app/': { sections: [
    ['Signs your outfit planner is working', ['You spend less time getting dressed on weekdays.', 'You are wearing pieces you had forgotten about.', 'You buy less, and what you buy fits into several planned outfits.', 'Packing for trips takes minutes, not an evening.']]
  ]},
  '/blog/how-to-find-your-style/': { sections: [
    ['Questions to ask yourself', ['Which three outfits from the last year did I feel best in, and what do they share?', 'What do I reach for when I have no time to think?', 'Which pieces do I keep but never wear, and why?', 'How do I want people to feel when they meet me: calm, impressed, curious, comfortable?', 'What does my real week require: office, school runs, travel, events?']]
  ]},
  '/blog/best-digital-wardrobe-app/': { sections: [
    ['What to look for, feature by feature', table(['Feature', 'Why it matters', 'Good sign'], [['Adding clothes', 'Setup is where most people give up', 'Several ways to add, with automatic cleanup'], ['Organization', 'Finding things quickly', 'Automatic categories and colors'], ['Outfit suggestions', 'Turns a catalog into decisions', 'Uses your clothes, weather and plans'], ['Planning', 'Weeks and trips', 'A calendar or packing lists'], ['Seeing outfits on you', 'Confidence before you get dressed or buy', 'Previews on your own photo'], ['Privacy', 'Your photos and home are personal', 'Delete photos and account from inside the app']])],
    ['A 30-day routine to get value from it', ['Week 1: add your 20 to 30 most-worn pieces.', 'Week 2: ask for an outfit every morning and wear at least three suggestions.', 'Week 3: add the pieces you never wear and ask for outfits that use them.', 'Week 4: review what you did not wear at all and decide whether to keep, alter or donate it.']]
  ]},
  '/features/virtual-try-on/': { sections: [
    ['An example', 'You are choosing between two dresses for a wedding. Try both on your photo, then try each with the shoes you own. One color makes your skin look tired; the other works and goes with shoes you already have. That is a decision made in minutes, without a return.']
  ]},
  '/features/daily-outfits-on-you/': { sections: [
    ['An example morning', 'It is raining, you have a client meeting and then drinks. Your stylist suggests dark trousers, a knit in a color from your palette and a waterproof jacket, then shows it on your photo. Not feeling it? Swipe for another idea built from the same closet.']
  ]},
  '/features/try-on-from-pinterest-instagram/': { sections: [
    ['An example', 'You saved an Instagram post of a rust knit with cream trousers. Share it to Style BFF and see it on your photo. If rust suits you, ask your stylist to rebuild the look with a knit you already own; if not, it suggests a color from your palette that keeps the mood.']
  ]},
  '/features/color-analysis/': { sections: [
    ['An example', 'Your profile says Soft Autumn. Next morning, your stylist suggests an olive knit and a camel coat rather than the black blazer you usually reach for, and the try-on on your photo shows why: your skin looks warmer and more even.']
  ]},
  '/features/digital-closet/': { sections: [
    ['An example', 'You approve 25 items from photos you already have. That afternoon your stylist builds a week of outfits from them, including two combinations with a skirt you had not worn in a year.']
  ]},
  '/features/body-type/': { sections: [
    ['An example', 'Your profile shows an inverted triangle shape. When you ask for a weekend outfit, your stylist pairs a simple fitted top with wide-leg trousers to add volume below, then shows the result on your photo so you can see the balance.']
  ]},
  '/features/complete-the-closet/': { sections: [
    ['An example', 'Your closet has lots of prints but few plain layers. Complete the Closet suggests one neutral cardigan in your palette and shows it with five tops and three bottoms you already own, so you can see exactly what it unlocks before buying.']
  ]}
};
