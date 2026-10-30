// Reviewed glossary definitions (2026-10-29). Keyed by the term exactly as listed in build.mjs.
// Each entry: definition (quotable, first), how it is used in styling, and an example.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';

export const glossaryContent = {
  '12 color seasons': {
    definition: 'The 12 color seasons are a personal color analysis system that splits Spring, Summer, Autumn and Winter into three sub-seasons each: Bright, True and Light Spring; Light, True and Soft Summer; Soft, True and Deep Autumn; Deep, True and Bright Winter. Each describes a combination of undertone, value and chroma.',
    use: 'Stylists use your season to choose colors to wear near your face, neutrals for large pieces, and makeup and hair shades.',
    example: 'A Soft Summer looks best in dusty rose, slate blue and soft grey, and can look washed out in bright orange.',
    related: [['/answers/what-are-the-12-color-seasons/', 'The 12 color seasons explained'], ['/quiz/', 'Color season quiz']]
  },
  '13 kibbe types': {
    definition: 'The 13 Kibbe types are body and style categories created by David Kibbe in his 1987 book Metamorphosis. They describe the balance of yin (soft, rounded, small) and yang (sharp, long, angular) in your frame, grouped into Dramatic, Natural, Classic, Gamine and Romantic families.',
    use: 'Kibbe types guide the lines, fabrics and level of detail that harmonize with your overall look, rather than prescribing what hides or highlights body parts.',
    example: 'A Soft Natural is often advised to wear relaxed, unstructured shapes with soft drape rather than sharp tailoring.',
    related: [['/answers/what-is-a-kibbe-body-type/', 'What is a Kibbe body type?']]
  },
  'color analysis': {
    definition: 'Color analysis is the process of identifying which clothing, makeup and hair colors best suit a person’s natural coloring, based on skin undertone, hair and eye color, and the contrast between them. The result is usually a seasonal type and a personal palette.',
    use: 'It narrows shopping and outfit choices to colors that make skin look even and eyes look bright.',
    example: 'Someone with warm, golden undertones and medium contrast might be typed as True Autumn and steered toward olive, rust and camel.',
    related: [['/answers/what-is-seasonal-color-analysis/', 'What is seasonal color analysis?'], ['/features/color-analysis/', 'Color analysis in Style BFF']]
  },
  'draping': {
    definition: 'Draping is the in-person color analysis method of holding fabric swatches of different colors under a person’s face in neutral light to see which shades improve or dull their complexion. It is considered the most reliable way to find a color season.',
    use: 'Analysts compare pairs, such as warm versus cool or bright versus muted, and narrow down step by step.',
    example: 'If a cool pink drape makes shadows under the eyes disappear while a warm peach makes skin look sallow, the person likely has cool undertones.',
    related: [['/answers/how-do-i-find-my-color-season/', 'How do I find my color season?']]
  },
  'undertone': {
    definition: 'Undertone is the subtle color beneath the surface of your skin: warm (golden, peachy), cool (pink, rosy, bluish) or neutral (a mix). Unlike surface tone, it does not change with a tan.',
    use: 'Undertone is the first dimension in color analysis and decides whether warm or cool versions of a color suit you.',
    example: 'A quick test: if gold jewelry looks better on you than silver, you may have a warm undertone.',
    related: [['/answers/how-do-i-find-my-color-season/', 'Find your color season']]
  },
  'chroma': {
    definition: 'Chroma, also called saturation or clarity, describes how pure and bright a color is versus how muted or greyed it is. In personal color analysis it describes whether your coloring is clear and vivid or soft and blended.',
    use: 'High-chroma people (Bright Spring, Bright Winter) suit clear, saturated colors; low-chroma people (Soft Summer, Soft Autumn) suit dusty, muted ones.',
    example: 'Fuchsia is high chroma; dusty rose is the same hue at low chroma.',
    related: [['/glossary/value/', 'Value'], ['/glossary/undertone/', 'Undertone']]
  },
  'value': {
    definition: 'Value is how light or dark a color is, independent of its hue. In color analysis it describes the overall lightness or depth of your hair, skin and eyes together.',
    use: 'Light-value people (Light Spring, Light Summer) look best in lighter shades; deep-value people (Deep Autumn, Deep Winter) carry dark, rich colors.',
    example: 'Navy and powder blue share a hue but differ in value.',
    related: [['/glossary/chroma/', 'Chroma'], ['/glossary/12-color-seasons/', '12 color seasons']]
  },
  'body type vs body shape': {
    definition: 'Body shape usually describes measurable proportions such as hourglass, pear, apple, rectangle or inverted triangle. Body type is used more loosely and can mean shape, build (ectomorph, mesomorph, endomorph) or style systems such as Kibbe types.',
    use: 'Shape guides proportion choices, like where to add volume or define the waist. Style systems guide overall line and fabric.',
    example: 'A pear shape might balance wider hips with structured shoulders or a boat neckline.',
    related: [['/answers/how-do-i-know-my-body-type/', 'How do I know my body type?'], ['/glossary/13-kibbe-types/', '13 Kibbe types']]
  },
  'capsule wardrobe': {
    definition: 'A capsule wardrobe is a small, curated collection of versatile clothes, often 25 to 40 pieces including shoes, that mix and match to create many outfits. The term is credited to Susie Faux in the 1970s and was popularized by Donna Karan’s 1985 Seven Easy Pieces.',
    use: 'Capsules reduce decision fatigue, cut impulse buys and make packing easier.',
    example: 'A workweek capsule might be two trousers, one skirt, five tops, two layers and two pairs of shoes in a navy, cream and camel palette.',
    related: [['/answers/what-is-a-capsule-wardrobe/', 'What is a capsule wardrobe?'], ['/answers/how-many-clothes-do-i-need-for-a-capsule-wardrobe/', 'How many clothes you need']]
  },
  'cost per wear': {
    definition: 'Cost per wear is a garment’s price divided by the number of times it is worn. It measures real value: a higher-priced piece worn often can cost less per wear than a cheap item worn once.',
    use: 'Use it before buying to compare options, and in a digital closet to see which pieces earn their place.',
    example: 'A $150 pair of boots worn 100 times costs $1.50 per wear.',
    related: [['/answers/what-is-cost-per-wear/', 'What is cost per wear?']]
  },
  'virtual try-on': {
    definition: 'Virtual try-on is technology that shows how clothing, accessories or makeup would look on a person without physically wearing them, using a 3D avatar, augmented reality through the camera, or generative AI that redraws the garment onto a photo.',
    use: 'It helps judge color, silhouette and overall style before buying, but it does not guarantee fit or fabric behavior.',
    example: 'In Style BFF you can share an Instagram outfit and see it rendered on your own photo.',
    related: [['/answers/what-is-virtual-try-on-and-how-accurate-is-it/', 'How accurate is virtual try-on?'], ['/features/virtual-try-on/', 'Virtual try-on in Style BFF']]
  },
  'garment transfer': {
    definition: 'Garment transfer is the computer-vision technique behind generative virtual try-on: it takes a clothing item from one image, such as a product photo or someone else’s outfit, and re-renders it onto a different person’s photo while adapting to their pose and body.',
    use: 'It powers try-on from store links and social posts, where no 3D model of the garment exists.',
    example: 'Sharing a Pinterest look to a try-on app triggers garment transfer from the Pin onto your selfie.',
    related: [['/glossary/virtual-try-on/', 'Virtual try-on']]
  },
  'digital closet': {
    definition: 'A digital closet, or digital wardrobe, is a catalog of the clothes you own stored in an app as photos, usually with backgrounds removed and items tagged by category, color and season.',
    use: 'It lets you plan outfits, pack and spot gaps without opening your wardrobe, and track how often you wear each item.',
    example: 'You can build a week of outfits on your phone on Sunday night from your digital closet.',
    related: [['/answers/what-is-a-digital-closet-app/', 'What is a digital closet app?'], ['/features/digital-closet/', 'Style BFF digital closet']]
  },
  'outfit formula': {
    definition: 'An outfit formula is a repeatable template for getting dressed, such as “straight jeans + tucked knit + loafers + one gold accessory.” You swap individual pieces while keeping the structure that works for you.',
    use: 'Formulas cut decision time and keep outfits consistent with your style and body proportions.',
    example: 'Tonal column (one color head to toe) + contrasting coat + simple shoe is a formula that works across seasons.',
    related: [['/answers/what-should-i-wear-today/', 'What should I wear today?']]
  },
  'ootd': {
    definition: 'OOTD stands for “outfit of the day.” It is a social-media label for a photo of what someone is wearing that day, popularized on Instagram and TikTok.',
    use: 'People post OOTDs to share style ideas, track their own outfits and find inspiration.',
    example: 'Saving OOTD posts you like and trying them on yourself is a quick way to test new looks.',
    related: [['/answers/can-i-try-on-an-outfit-from-pinterest-or-instagram/', 'Try on an Instagram outfit']]
  },
  'dupe': {
    definition: 'A dupe, short for duplicate, is a lower-priced item that closely resembles a more expensive designer or trending product in look, but is sold under a different brand.',
    use: 'Shoppers search for dupes to get a trending style for less. Check fabric and construction, because the look can match while quality does not.',
    example: 'A high-street knit that copies a luxury brand’s cable sweater is a dupe.',
    related: [['/glossary/cost-per-wear/', 'Cost per wear']]
  },
  'shop the look': {
    definition: '“Shop the look” is a retail feature or editorial format that links every item in a styled outfit so you can buy the full look or individual pieces.',
    use: 'It speeds up recreating an outfit; before buying, check whether the colors and proportions suit you, not just the model.',
    example: 'Sharing a shop-the-look page to a try-on app lets you preview the whole outfit on yourself first.',
    related: [['/blog/can-i-try-on-clothes-from-any-store-link-with-ai/', 'Try on clothes from a store link']]
  }
};
