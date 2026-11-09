// New answer-first guides (cycle 2026-11-09). Each guide targets missing questions in seo-ops/questions.csv.
// Style BFF product facts were checked against the live App Store (apps.apple.com/us/app/id6767003047)
// and Google Play (play.google.com/store/apps/details?id=com.bingetry.vitualtryon) listings on 2026-11-09.
// Styling guidance is editorial: practical starting points, not rules.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const APP = ['Style BFF on the App Store', 'https://apps.apple.com/us/app/id6767003047'];
const PLAY = ['Style BFF on Google Play', 'https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon'];

export const guidePublished = '2026-11-09';

export const guides = [
  {
    slug: 'ai-outfit-planner-app',
    questions: ['Q019', 'Q022'],
    title: 'AI Outfit Planner App: How It Works',
    h1: 'AI outfit planner apps: what they do and how to pick one',
    keyword: 'ai outfit planner app',
    answer: 'An AI outfit planner app builds complete outfits for a specific day from the clothes you own, using your plans, the weather and what suits you. The useful ones remember your wardrobe and preferences, so each suggestion gets more specific. Style BFF plans a daily outfit and renders it on your own photo, on iPhone and Android.',
    sections: [
      ['What does an AI outfit planner actually do?', ['<b>Stores your wardrobe:</b> you add clothes by photo, or the app extracts them from photos you select.', '<b>Reads the day:</b> occasion, weather and how formal you need to be.', '<b>Builds a full look:</b> top, bottom, layer and shoes that work together, not single items.', '<b>Learns:</b> what you save, skip or restyle shapes the next suggestion.', '<b>Plans ahead:</b> the better apps also handle a week, a trip or a capsule.']],
      ['Planner, generator or closet app?', 'These labels get mixed up. An outfit <i>generator</i> creates ideas on demand and usually forgets you afterwards. A closet <i>app</i> catalogs what you own and may track wears. An outfit <i>planner</i> sits between them: it uses your saved wardrobe to decide what to wear on a real day. ' + a('/blog/ai-stylist-vs-ai-outfit-generator/', 'AI stylist vs AI outfit generator') + ' explains the difference in more detail.'],
      ['What to check before you pick one', ['<b>Platform.</b> Some planners are iPhone-only. Check the store listing for your phone.', '<b>Setup effort.</b> Adding 80 items one by one is where most people give up. Look for photo-library scanning or bulk import.', '<b>How you see the outfit.</b> A flat-lay of product images, an avatar, or the outfit on your own photo.', '<b>Does it use your colors and shape?</b> Generic combinations ignore what flatters you.', '<b>Free tier.</b> Find out what is free and what sits behind a subscription before you spend an evening on setup.']],
      ['How Style BFF plans outfits', 'Style BFF starts with a free Style Profile: one selfie and a five-question quiz give you a seasonal color palette and body-type guidance. You add the clothes you own, either directly or by letting the app scan photos you choose, and nothing is added until you approve it. Each morning it picks an outfit for your weather, plans and palette and shows it on your photo. You can ask for a specific occasion, such as a wedding-guest look, and there is a home-screen widget with today\'s outfit. Daily outfits, unlimited try-on and the full closet are part of Style BFF Plus; the Style Profile is free. ' + a('/features/daily-outfits-on-you/', 'See daily outfits') + ' and ' + a('/features/digital-closet/', 'the digital closet') + '.'],
      ['A simple weekly planning routine', ['Sunday: check the week\'s plans and forecast.', 'Pick one reliable base per day (trousers, jeans, a dress) before choosing tops.', 'Repeat your best combinations on purpose; nobody else is tracking.', 'Lay out or save Monday\'s outfit the night before.', 'After the week, note what you never reached for. Those items are the real wardrobe gaps or the pieces to let go.']]
    ],
    html: table(['Type of app', 'Best for', 'Usually missing'], [['Outfit generator', 'Quick inspiration', 'Your real wardrobe and memory of you'], ['Closet organizer', 'Cataloging and tracking wears', 'Day-specific outfit decisions'], ['AI outfit planner', 'Deciding what to wear from what you own', 'Depends on the app: check try-on and platform']]),
    faq: [
      ['Is there a free AI outfit planner?', 'Several apps have free tiers. In Style BFF the Style Profile is free; daily outfits and the full closet are part of Style BFF Plus. Check the current store listing for pricing in your country.'],
      ['Can an outfit planner use clothes I already own?', 'Yes, that is the point of a planner. Add your clothes once and it combines them for each day.'],
      ['Does an AI outfit planner work for men?', 'Most planners work for any wardrobe. Check the app\'s screenshots to see whether its examples match the clothes you wear.']
    ],
    sources: [APP, PLAY],
    related: ['/features/daily-outfits-on-you/', '/features/digital-closet/', '/blog/what-should-i-wear-today-from-my-closet/', '/blog/ai-stylist-vs-ai-outfit-generator/']
  },
  {
    slug: 'what-colors-look-good-on-me',
    questions: ['Q064', 'Q065', 'Q069', 'Q074'],
    title: 'What Colors Look Good on Me? A Quick Test',
    h1: 'What colors look good on me? A 10-minute test',
    keyword: 'what colors look good on me',
    answer: 'The colors that look good on you match three things about your coloring: undertone (warm, cool or neutral), depth (light or deep) and contrast between your hair, skin and eyes. Hold colors near your face in daylight: the right ones make your skin look even and your eyes brighter; the wrong ones show shadows and redness.',
    sections: [
      ['Step 1: Find your undertone', ['Look at the veins on your inner wrist in daylight. Mostly green suggests warm, mostly blue or purple suggests cool, a mix suggests neutral.', 'Compare gold and silver jewelry next to your face. The one that looks more natural points the same way.', 'Hold pure white and soft cream near your face. Cool undertones usually suit crisp white; warm ones suit cream.', 'If every test is a tie, you are probably neutral, which means you can wear softened versions of both sides.']],
      ['Step 2: Check your depth and contrast', 'Depth is how light or dark your overall coloring is. Contrast is the difference between your hair, skin and eyes. Take a black-and-white photo of your face: if your hair and skin look very different shades, you are high contrast and can wear strong pairings like navy and white. If they blend, low-contrast pairings such as taupe with soft blue look more balanced.'],
      ['Step 3: Do the drape test', ['Stand facing a window, no makeup, hair pulled back.', 'Hold one fabric or piece of paper under your chin at a time.', 'Take a photo of each and compare them side by side later, not in the moment.', 'Good colors: skin looks even, eyes stand out, under-eye shadows soften.', 'Poor colors: skin looks grey, sallow or red, and the color is the first thing you notice.']],
      ['Turn the result into a palette', 'Your undertone, depth and contrast together point to one of the 12 color seasons. A light, warm, low-contrast person often lands in a Spring palette; a deep, cool, high-contrast person often in Winter. ' + a('/blog/seasonal-color-analysis-explained/', 'Seasonal color analysis, explained') + ' walks through all 12, and the free ' + a('/quiz/', 'color season quiz') + ' gives you a starting season in six questions.'],
      ['Use it without buying a new wardrobe', ['Wear your best colors near your face: tops, scarves, collars, earrings.', 'Keep less flattering colors for trousers, skirts and shoes, further from your face.', 'Add one flattering layer over a tricky color you love.', 'When you next shop, check the color before the style.']],
      ['Let an app do the analysis', 'Style BFF runs a seasonal color analysis from one selfie as part of its free Style Profile, then uses your palette in every outfit it suggests. Take the selfie in indirect daylight with no filter. ' + a('/features/color-analysis/', 'How the color analysis works') + '.']
    ],
    html: table(['Your coloring', 'Often flattering', 'Often harder'], [['Warm, light', 'Peach, coral, warm ivory, camel', 'Icy pastels, pure black'], ['Warm, deep', 'Rust, olive, mustard, chocolate', 'Cool pastels, grey'], ['Cool, light', 'Powder blue, rose, lavender, soft grey', 'Orange, mustard'], ['Cool, deep', 'Navy, emerald, berry, pure white', 'Beige, muted orange'], ['Neutral', 'Teal, soft white, dusty rose, jade', 'Very neon or very muddy shades']]),
    faq: [
      ['Is there an app that tells me what colors look good on me?', 'Yes. Color analysis apps, including Style BFF, estimate your season from a selfie. Good lighting matters more than the app: use daylight and no filters.'],
      ['Can I wear colors outside my palette?', 'Yes. Palettes are guidance, not rules. Wear any color you love; place it away from your face or pair it with a flattering layer.'],
      ['What colors suit neutral undertones?', 'Neutral undertones usually suit medium-intensity colors such as teal, jade, soft white and dusty rose, and can borrow from both warm and cool palettes.']
    ],
    sources: [APP],
    related: ['/features/color-analysis/', '/quiz/', '/blog/seasonal-color-analysis-explained/', '/glossary/undertone/']
  },
  {
    slug: 'how-to-find-your-style',
    questions: ['Q116', 'Q117', 'Q118', 'Q119'],
    title: 'How to Find Your Style: A 5-Step Method',
    h1: 'How to find your personal style in five steps',
    keyword: 'how to find my style',
    answer: 'To find your style, collect 20 to 30 outfits you are drawn to, look for what repeats (colors, shapes, fabrics, mood), and compare that with the clothes you already wear most. Name it in three words, then test it for two weeks. Your style is the overlap between what you admire, what suits you and how you actually live.',
    sections: [
      ['Step 1: Collect without judging', 'Save 20 to 30 outfit images over a week from Pinterest, Instagram, films or people you see. Do not filter for "would I wear this". You are gathering evidence, not shopping.'],
      ['Step 2: Find what repeats', ['<b>Colors:</b> mostly neutrals, earthy tones or bright color?', '<b>Shapes:</b> fitted or relaxed, cropped or long?', '<b>Fabrics:</b> crisp cotton, soft knits, denim, silk?', '<b>Details:</b> minimal, or prints, texture and jewelry?', '<b>Mood:</b> polished, easy, romantic, bold, sporty?']],
      ['Step 3: Audit what you already wear', 'Your real style already shows in the 20 percent of clothes you wear 80 percent of the time. Pull out your ten most-worn pieces and ask why you reach for them: comfort, fit, color, or how they make you feel. Also pull the five pieces you never wear and name what is wrong with each.'],
      ['Step 4: Name it in three words', 'Pick three words that describe the overlap, for example "relaxed, warm, tailored" or "clean, bold, sporty". Three words are specific enough to guide a purchase and loose enough to grow. Before you buy anything, check it against all three.'],
      ['Step 5: Test it for two weeks', ['Dress to your three words every day using what you own.', 'Take a quick mirror photo of each outfit.', 'Mark the outfits you felt most like yourself in.', 'At the end, adjust a word if it never showed up or felt forced.']],
      ['Common style words and what they look like', '__TABLE__'],
      ['Where an app helps', 'Your style also has to suit your coloring and proportions. Style BFF\'s free Style Profile combines a selfie and a five-question quiz to give you a color palette, body-type guidance and three personal style rules, then uses them for daily outfit ideas from your own wardrobe. ' + a('/how-it-works/', 'See how it works') + '.']
    ],
    html: '',
    tableInSection: table(['Style word', 'Typical pieces', 'Typical colors'], [['Classic', 'Blazer, straight trousers, loafers, trench', 'Navy, camel, white, black'], ['Minimal', 'Clean lines, few details, quality basics', 'Neutrals, monochrome'], ['Romantic', 'Soft fabrics, florals, ruffles, midi skirts', 'Blush, cream, soft pastels'], ['Relaxed', 'Knitwear, wide trousers, sneakers', 'Earthy tones, washed denim'], ['Bold', 'Statement prints, strong silhouettes', 'Saturated color, high contrast'], ['Sporty', 'Track details, sneakers, technical fabrics', 'Black, white, primary accents']]),
    faq: [
      ['Is there a quiz to find my style?', 'Style quizzes are a useful starting point. Style BFF\'s Style Profile includes a five-question quiz plus a selfie for color and body-type guidance. Our free ' + a('/quiz/', 'color season quiz') + ' covers color only.'],
      ['How do I find my style aesthetic?', 'Use the same steps: collect images, find what repeats, and name it. An aesthetic label (for example "quiet luxury" or "coastal") can help you search, but your three words are more personal.'],
      ['How long does it take to find your style?', 'Most people see a clear pattern after two to four weeks of collecting and testing. Style keeps changing with your life, so revisit your three words once a year.']
    ],
    sources: [APP],
    related: ['/how-it-works/', '/quiz/', '/blog/how-to-create-a-capsule-wardrobe-that-feels-like-you/', '/blog/how-to-rebuild-your-style-after-a-life-change/']
  },
  {
    slug: 'does-this-outfit-match',
    questions: ['Q091', 'Q090'],
    title: 'Does This Outfit Match? A 60-Second Check',
    h1: 'Does this outfit match? A 60-second check',
    keyword: 'does this outfit match',
    answer: 'An outfit matches when its colors relate, its proportions balance and every piece fits the same level of formality. Check three things: no more than three main colors, one fitted and one looser piece, and shoes and bag at the same dress level as the clothes. If it passes all three, it works.',
    sections: [
      ['Check 1: Colors (keep to three)', ['Pick one main color, one supporting color and one accent.', 'Neutrals (navy, grey, beige, white, black, denim) do not count against the three.', 'Repeat the accent once: a bag that echoes a print, a belt that echoes shoes.', 'If two colors fight, put a neutral between them.']],
      ['Check 2: Proportion (one fitted, one relaxed)', 'If the top is loose, keep the bottom slimmer, and the other way round. Two oversized pieces can work, but only when one is clearly defined, for example with a tuck, a belt or a cropped length. Show your waist, or a clear line where it would be, unless the outfit is a deliberate column.'],
      ['Check 3: Formality (same dress level)', 'Mismatched formality is the most common reason an outfit feels "off". Sneakers with a suit is a deliberate choice; flip-flops with a blazer usually is not. Rate each piece from 1 (gym) to 5 (black tie). Everything should sit within one point of the others.'],
      ['Patterns: the two-print rule', ['Pair a large print with a small one.', 'Make sure the prints share at least one color.', 'Keep everything else plain.', 'Stripes and leopard behave like neutrals for most people.']],
      ['Quick color pairings that almost always work', '__TABLE__'],
      ['See it before you wear it', 'A mirror photo shows more than the mirror itself: you see the outfit the way others do. Style BFF goes one step further and renders outfit ideas on your own photo, built around your color palette, so you can compare options before getting dressed. ' + a('/features/virtual-try-on/', 'How virtual try-on works') + '.']
    ],
    tableInSection: table(['Base', 'Pairs well with'], [['Navy', 'White, camel, burgundy, pale pink, olive'], ['Black', 'White, red, cobalt, emerald, camel'], ['Grey', 'Pink, lilac, burgundy, yellow, navy'], ['Beige or camel', 'White, navy, olive, rust, chocolate'], ['Denim blue', 'Almost anything: white, red, khaki, black']]),
    faq: [
      ['Is there an app that tells you if an outfit matches?', 'Several styling apps give outfit feedback. Style BFF builds outfits around your color palette and shows them on your own photo, so you can judge them before you dress.'],
      ['Can I wear black and navy together?', 'Yes. Make the difference look deliberate by keeping the navy clearly blue and adding a third neutral like white or camel.'],
      ['Do my shoes have to match my bag?', 'No. They should match the formality level, and ideally share a color with something else in the outfit.']
    ],
    sources: [APP],
    related: ['/answers/how-do-i-know-if-an-outfit-suits-me/', '/features/virtual-try-on/', '/blog/what-should-i-wear-today-from-my-closet/']
  },
  {
    slug: 'how-to-dress-for-your-body-type',
    questions: ['Q076', 'Q086', 'Q078'],
    title: 'How to Dress for Your Body Type',
    h1: 'How to dress for your body type (without rules)',
    keyword: 'how to dress for my body type',
    answer: 'To dress for your body type, first see where you are widest and narrowest: shoulders, waist and hips. Then choose shapes that create the balance you want, usually by adding volume where you are narrower and keeping lines clean where you are wider. Body type is a starting point for fit, not a list of things you cannot wear.',
    sections: [
      ['Find your shape in two minutes', ['Measure around the widest part of your shoulders (or bust), your natural waist and the widest part of your hips.', 'Compare shoulders and hips: within about 5 percent of each other counts as balanced.', 'Then compare the waist to both: clearly smaller means defined; similar means straight.', 'No tape? Take a straight-on photo in fitted clothes and compare the widths by eye.']],
      ['The five common shapes', '__TABLE__'],
      ['Principles that work for every shape', ['<b>Fit beats trend.</b> Clothes that fit at the shoulders and waist look better than any "flattering" cut that does not fit.', '<b>Mark the waist</b> (or where you want one) with a tuck, belt or seam.', '<b>Use vertical lines</b> such as open jackets, V-necks and long necklaces to lengthen.', '<b>Put detail where you want attention</b>, keep the rest simpler.', '<b>Tailor one thing.</b> Hemming trousers to your shoe height changes more than a new outfit.']],
      ['Body type and age', 'The same principles apply at any age. What changes is usually comfort and fabric: softer structure, more stretch and better shoes. Shape can also shift over the years, so re-measure rather than dressing for the body you had a decade ago.'],
      ['Let Style BFF read your proportions', 'Style BFF\'s free Style Profile estimates your body type from a photo and a short quiz, suggests silhouettes that flatter it, and applies that guidance to outfits from your own wardrobe. ' + a('/features/body-type/', 'How body guidance works') + '.']
    ],
    tableInSection: table(['Shape', 'Typical proportions', 'Common goal', 'Guide'], [['Pear (triangle)', 'Hips wider than shoulders', 'Balance by adding width up top', a('/blog/how-to-dress-a-pear-body-shape/', 'Pear guide')], ['Hourglass', 'Shoulders and hips balanced, defined waist', 'Follow the waist', a('/blog/how-to-dress-an-hourglass-body-shape/', 'Hourglass guide')], ['Apple (round)', 'Fuller middle, slimmer legs', 'Lengthen the torso, show the legs', a('/blog/how-to-dress-an-apple-body-shape/', 'Apple guide')], ['Rectangle', 'Shoulders, waist and hips similar', 'Create curves or lean into clean lines', a('/blog/how-to-dress-a-rectangle-body-shape/', 'Rectangle guide')], ['Inverted triangle', 'Shoulders wider than hips', 'Add volume below the waist', a('/blog/how-to-dress-an-inverted-triangle-body-shape/', 'Inverted triangle guide')]]),
    faq: [
      ['Is there a body type quiz?', 'Yes. Style BFF\'s Style Profile includes a body-type estimate. You can also use the two-minute measurement method above.'],
      ['What if I am between two shapes?', 'Most people are. Read both guides and keep the advice that works for you in the mirror.'],
      ['Is there a body type calculator for women?', 'A calculator only compares your shoulder, waist and hip measurements, as above. ' + a('/features/body-type/', 'Style BFF\'s body guidance') + ' does this from a photo.']
    ],
    sources: [APP],
    related: ['/features/body-type/', '/how-it-works/']
  },
  {
    slug: 'how-to-dress-a-pear-body-shape',
    questions: ['Q081'],
    title: 'How to Dress a Pear Body Shape',
    h1: 'How to dress a pear body shape',
    keyword: 'how to dress a pear body shape',
    answer: 'A pear (or triangle) body shape has hips wider than the shoulders, usually with a defined waist. To balance it, add interest and structure above the waist (boat necks, puff sleeves, light colors, detail) and keep the lower half clean and simple with A-line, straight or wide-leg shapes in darker or plain fabrics.',
    sections: [
      ['Tops that work', ['Boat, square and wide V necklines that widen the shoulders.', 'Puff, cap or structured sleeves.', 'Lighter colors, prints and detail on top.', 'Cropped jackets and blazers that end at the waist.', 'Tucked or half-tucked tops to show your waist.']],
      ['Bottoms that work', ['A-line and fit-and-flare skirts that skim the hips.', 'Straight, bootcut and wide-leg trousers in plain fabrics.', 'Mid to high rise that sits at the narrowest part of your waist.', 'Darker or solid colors below the waist.']],
      ['Dresses', 'Fit-and-flare and wrap dresses follow the waist and skim the hips. Look for detail at the neckline or shoulders. A bodycon dress can work when paired with a structured jacket that adds width up top.'],
      ['Easy outfit formulas', ['Striped boat-neck top, dark straight jeans, loafers.', 'Puff-sleeve blouse tucked into a midi A-line skirt.', 'Cropped blazer, plain dress, pointed flats.']],
      ['What to keep simple', 'Very tight, shiny or heavily patterned bottoms and hip-level details (big pockets, belts slung low) draw the eye to the hips. Wear them if you like them, and balance with more detail on top.']
    ],
    faq: [['Can a pear shape wear skinny jeans?', 'Yes. Pair them with a top that has some volume or structure on top, or a longer jacket.'], ['Which necklines suit a pear shape?', 'Boat, square, off-shoulder and wide V necklines visually widen the shoulders.']],
    related: ['/blog/how-to-dress-for-your-body-type/', '/features/body-type/']
  },
  {
    slug: 'how-to-dress-an-hourglass-body-shape',
    questions: ['Q082'],
    title: 'How to Dress an Hourglass Body Shape',
    h1: 'How to dress an hourglass body shape',
    keyword: 'how to dress an hourglass',
    answer: 'An hourglass body shape has balanced shoulders and hips with a clearly defined waist. The simplest approach is to follow that waist: wrap tops and dresses, belted coats, high-waisted trousers and fitted knits. Avoid shapeless or boxy pieces that hide the waist, or belt them to bring it back.',
    sections: [
      ['Tops that work', ['Wrap and surplice tops.', 'V and scoop necklines.', 'Fitted knits and bodysuits.', 'Tops tucked into a high waist.']],
      ['Bottoms that work', ['High-waisted straight, flared or wide-leg trousers.', 'Pencil and midi skirts.', 'Stretch denim with a high rise.']],
      ['Dresses', 'Wrap, sheath and fit-and-flare dresses with a defined waist. Bias-cut slip dresses also follow your curves. Shirt dresses work best belted.'],
      ['Jackets and coats', 'Choose jackets that nip in at the waist or can be belted. Boxy jackets work when cropped to the waist or worn open over a fitted base.'],
      ['Easy outfit formulas', ['Wrap top, high-waisted wide-leg trousers, heeled boots.', 'Fitted knit tucked into a midi pencil skirt.', 'Belted trench over a slip dress.']]
    ],
    faq: [['Can an hourglass wear oversized clothes?', 'Yes. Tuck, belt or crop one piece so the waist still shows.'], ['Do high-waisted jeans suit an hourglass?', 'Yes. A high rise sits at the narrowest point and makes the most of a defined waist.']],
    related: ['/blog/how-to-dress-for-your-body-type/', '/features/body-type/']
  },
  {
    slug: 'how-to-dress-an-apple-body-shape',
    questions: ['Q083'],
    title: 'How to Dress an Apple Body Shape',
    h1: 'How to dress an apple body shape',
    keyword: 'how to dress an apple body shape',
    answer: 'An apple (round) body shape carries more volume through the middle, usually with slimmer legs and arms. Lengthen the torso with V necklines, open layers and fabrics that skim rather than cling, mark a waist just under the bust or at the hip, and show off your legs with straight or slim trousers and above-the-knee hems.',
    sections: [
      ['Tops that work', ['V necklines and open collars that draw the eye up and down.', 'Empire-line and A-line tops that flow from under the bust.', 'Soft, fluid fabrics that skim the middle.', 'Longer tops that end at the hip, not the waist.']],
      ['Bottoms that work', ['Straight-leg and slim trousers that show your legs.', 'Mid-rise with a flat front, or a comfortable stretch waist.', 'Above-the-knee or knee-length skirts in A-line shapes.']],
      ['Dresses', 'Empire-waist, shift and wrap dresses work well, as do shirt dresses worn open over a slim base. A dress that skims the body and shows the legs is an easy default.'],
      ['Layers', 'An open long cardigan, duster or unbuttoned blazer creates two long vertical lines down the front, which visually lengthens the torso.'],
      ['Easy outfit formulas', ['V-neck tunic, slim trousers, ankle boots.', 'Open long cardigan over a plain tee and straight jeans.', 'Empire-waist dress with a long pendant necklace.']]
    ],
    faq: [['Should an apple shape wear a belt?', 'A belt just under the bust, or a loose belt at the hip, often works better than one at the natural waist.'], ['Which necklines suit an apple shape?', 'V necks, scoop necks and open collars that create a vertical line.']],
    related: ['/blog/how-to-dress-for-your-body-type/', '/features/body-type/']
  },
  {
    slug: 'how-to-dress-a-rectangle-body-shape',
    questions: ['Q084'],
    title: 'How to Dress a Rectangle Body Shape',
    h1: 'How to dress a rectangle body shape',
    keyword: 'how to dress a rectangle body shape',
    answer: 'A rectangle (straight) body shape has shoulders, waist and hips of similar width. You can either create curves, with peplums, wrap tops, belts and full skirts, or lean into the straight line with clean, tailored, column shapes. Both work; pick the one that feels more like you.',
    sections: [
      ['Option 1: Create curves', ['Peplum and wrap tops.', 'Belts over dresses and coats.', 'Full or A-line skirts that add volume at the hip.', 'Ruffles or detail at the bust and hip.']],
      ['Option 2: Lean into clean lines', ['Straight, tailored trousers and blazers.', 'Column and shift dresses.', 'Boyfriend shirts and straight jeans.', 'Monochrome outfits in one color.']],
      ['Dresses', 'Shift, slip and column dresses suit the clean-line approach; wrap and fit-and-flare dresses create curves. Drop-waist shapes also tend to work.'],
      ['Easy outfit formulas', ['Tailored blazer, straight trousers, loafers, all one color.', 'Peplum top tucked into a full midi skirt.', 'Slip dress with a belted cardigan.']]
    ],
    faq: [['What is the difference between a rectangle and an hourglass?', 'Both have balanced shoulders and hips. An hourglass has a clearly smaller waist; a rectangle does not.'], ['Do belts suit a rectangle shape?', 'Yes, if you want to create a waist. Wide belts over a dress or coat work best.']],
    related: ['/blog/how-to-dress-for-your-body-type/', '/features/body-type/']
  },
  {
    slug: 'how-to-dress-an-inverted-triangle-body-shape',
    questions: ['Q085'],
    title: 'How to Dress an Inverted Triangle Shape',
    h1: 'How to dress an inverted triangle body shape',
    keyword: 'how to dress an inverted triangle',
    answer: 'An inverted triangle body shape has shoulders or bust wider than the hips. To balance it, keep the top half simple, with V necks, raglan or soft sleeves and darker colors, and add volume, color and detail below the waist with wide-leg trousers, A-line or pleated skirts and patterned bottoms.',
    sections: [
      ['Tops that work', ['Deep V and scoop necklines that narrow the shoulder line.', 'Raglan, dolman or soft, unstructured sleeves.', 'Plain or darker colors on top.', 'Halter necks, which draw the eye inward.']],
      ['Bottoms that work', ['Wide-leg, flared and cargo trousers.', 'A-line, pleated and full skirts.', 'Light colors, prints and detail below the waist.', 'Hip pockets and texture.']],
      ['Dresses', 'Fit-and-flare and drop-waist dresses with a full skirt. Keep the top of the dress simple and let the skirt carry the volume.'],
      ['What to keep simple', 'Shoulder pads, puff sleeves, boat necks and big collars add width where you already have it. Wear them when you want a strong shoulder look on purpose.'],
      ['Easy outfit formulas', ['Dark V-neck knit, light wide-leg trousers, chunky shoes.', 'Plain fitted tee tucked into a printed pleated midi skirt.', 'Halter top with flared jeans.']]
    ],
    faq: [['Should an inverted triangle avoid blazers?', 'No. Pick soft-shouldered or unstructured blazers and wear them open.'], ['Which skirts suit an inverted triangle?', 'A-line, pleated, tiered and full skirts add balance at the hips.']],
    related: ['/blog/how-to-dress-for-your-body-type/', '/features/body-type/']
  },
  {
    slug: 'what-to-wear-to-a-wedding-as-a-guest',
    questions: ['Q094'],
    title: 'What to Wear to a Wedding as a Guest',
    h1: 'What to wear to a wedding as a guest',
    keyword: 'what to wear to a wedding',
    answer: 'Start with the invitation: the dress code, venue and time of day set the level. For most daytime and semi-formal weddings, a midi dress, a jumpsuit or a suit in a color that is not white works. Avoid white and anything that competes with the couple, and check whether the ceremony is religious and needs covered shoulders.',
    sections: [
      ['Decode the dress code', '__TABLE__'],
      ['Colors', ['Avoid white, ivory and cream unless the couple asks for them.', 'Check the invitation or wedding website for a requested palette.', 'Daytime: lighter colors and prints. Evening: deeper jewel tones.', 'At Indian weddings, red is often worn by the bride; many guests choose other colors, and some families avoid black at festive events. Ask if unsure.']],
      ['Practical checks', ['Outdoor or garden venue: block heels or flats, and a layer for the evening.', 'Religious ceremony: bring a shawl or jacket to cover shoulders.', 'Long day: choose fabrics that do not crease and shoes you have already worn in.', 'Multi-day wedding: plan one look per event and repeat accessories.']],
      ['Plan the look from your wardrobe', 'Before you buy, check what you already own. Tell Style BFF the occasion (for example "wedding guest, garden, afternoon") and it builds a look from your wardrobe, guided by your color palette, and shows it on your photo. ' + a('/features/daily-outfits-on-you/', 'See occasion outfits') + '.']
    ],
    tableInSection: table(['Dress code', 'What it usually means'], [['Black tie', 'Floor-length gown or a very formal cocktail dress; tuxedo or dark suit'], ['Formal / black tie optional', 'Long dress, dressy midi or elegant jumpsuit; dark suit and tie'], ['Cocktail / semi-formal', 'Knee-length or midi dress, dressy separates; suit, tie optional'], ['Smart casual / daytime', 'Sundress, skirt and blouse, smart trousers; chinos and a blazer'], ['Traditional (e.g. Indian)', 'Saree, lehenga, anarkali or kurta sets; sherwani or kurta-pajama']]),
    faq: [['Can I wear black to a wedding?', 'For most Western evening weddings, yes. For daytime or some cultural ceremonies, check with the couple or family.'], ['Can I repeat an outfit at weddings?', 'Yes. Change the accessories, shoes and layers to make it feel new.']],
    related: ['/features/daily-outfits-on-you/', '/blog/what-should-i-wear-today-from-my-closet/']
  },
  {
    slug: 'what-to-wear-to-a-job-interview',
    questions: ['Q095', 'Q101'],
    title: 'What to Wear to a Job Interview',
    h1: 'What to wear to a job interview',
    keyword: 'what to wear to a job interview',
    answer: 'Dress one level above what people wear at the company day to day. Look at the team photos on the company\'s site or LinkedIn and match their formality, then go a step smarter. Choose clean, well-fitting clothes in simple colors, so the interviewer remembers what you said, not what you wore.',
    sections: [
      ['Match the industry', '__TABLE__'],
      ['Fit and grooming matter more than price', ['Clothes should be clean, pressed and fit at the shoulders.', 'Try the full outfit on the day before, including shoes, and sit down in it.', 'Keep jewelry and fragrance subtle.', 'Plan for the weather and the commute.']],
      ['Colors', 'Navy, grey, black, white and soft blue read as calm and reliable. Add one color you look good in near your face, such as a blouse or tie in your palette, to look fresh on camera and in person. ' + a('/blog/what-colors-look-good-on-me/', 'Find your colors') + '.'],
      ['Video interviews', ['Solid colors work better on camera than tight stripes or small checks.', 'Avoid colors that match your background.', 'Dress fully: you may need to stand up.', 'Test your lighting: face a window rather than sitting with it behind you.']],
      ['Plan it from your closet', 'Ask Style BFF for an interview look ("interview, office, smart") and it builds one from your wardrobe and shows it on your photo, so you can decide the night before. ' + a('/features/digital-closet/', 'How the digital closet works') + '.']
    ],
    tableInSection: table(['Workplace', 'Safe interview outfit'], [['Corporate (finance, law, consulting)', 'Matching suit or tailored dress with a blazer, leather shoes'], ['Business casual (most offices)', 'Blazer with smart trousers or a skirt, shirt or blouse, loafers'], ['Tech and startups', 'Clean dark jeans or chinos, a good shirt or knit, a light layer, clean sneakers or loafers'], ['Creative industries', 'Smart base with one personal piece: a print, a color or an accessory'], ['Hands-on or retail roles', 'Neat, practical clothes one step smarter than the uniform']]),
    faq: [['Can I wear jeans to an interview?', 'In tech, startups and many creative roles, dark, clean jeans with a blazer or smart top are fine. In corporate roles, choose trousers.'], ['What are business casual outfit ideas for women?', 'A blazer with straight trousers and a blouse, a knit with a midi skirt, or a shirt dress with a belt, each with loafers or low heels.']],
    related: ['/features/digital-closet/', '/blog/what-should-i-wear-today-from-my-closet/']
  }
];
