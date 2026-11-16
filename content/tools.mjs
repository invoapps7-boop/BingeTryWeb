// Free style tools (2026-11-09): one connected journey that ends in a shareable Style Blueprint.
// Guidance is editorial and rule-based: practical starting points, not a professional fitting or diagnosis.

export const shapes = {
  hourglass: {
    name: 'Hourglass', guide: '/blog/how-to-dress-an-hourglass-body-shape/',
    summary: 'Bust and hips are balanced and your waist is clearly smaller.',
    goal: 'Follow your waist.',
    tips: ['Wrap tops and dresses', 'High-waisted trousers and skirts', 'Belt anything boxy'],
    rule: 'Always show your waist: tuck, belt or choose pieces cut in at the middle.'
  },
  pear: {
    name: 'Pear (triangle)', guide: '/blog/how-to-dress-a-pear-body-shape/',
    summary: 'Your hips are wider than your bust or shoulders.',
    goal: 'Add interest above the waist, keep the lower half clean.',
    tips: ['Boat, square and wide V necklines', 'Structured or puff sleeves', 'A-line skirts and straight or wide-leg trousers'],
    rule: 'Put color, print and detail on top; keep bottoms plain and darker.'
  },
  apple: {
    name: 'Apple (round)', guide: '/blog/how-to-dress-an-apple-body-shape/',
    summary: 'You carry more volume through the middle, often with slimmer legs.',
    goal: 'Lengthen the torso and show your legs.',
    tips: ['V necklines and open collars', 'Fluid fabrics that skim, not cling', 'Open long layers and straight or slim trousers'],
    rule: 'Create one long vertical line: a V-neck, an open layer or a long necklace.'
  },
  rectangle: {
    name: 'Rectangle (straight)', guide: '/blog/how-to-dress-a-rectangle-body-shape/',
    summary: 'Shoulders, waist and hips are similar in width.',
    goal: 'Create curves, or lean into clean lines.',
    tips: ['Peplum and wrap tops, or clean tailoring', 'Belts over dresses and coats', 'Column dresses and one-color outfits'],
    rule: 'Choose one approach per outfit: add a waist, or go fully straight and sharp.'
  },
  'inverted-triangle': {
    name: 'Inverted triangle', guide: '/blog/how-to-dress-an-inverted-triangle-body-shape/',
    summary: 'Your shoulders or bust are wider than your hips.',
    goal: 'Add volume and color below the waist.',
    tips: ['Deep V and halter necklines', 'Soft, unstructured sleeves', 'Wide-leg trousers and full or pleated skirts'],
    rule: 'Keep the top simple and darker; let trousers and skirts carry color and volume.'
  }
};

export const occasions = [
  ['work', 'Work'], ['casual', 'Casual day'], ['date', 'Date night'], ['wedding', 'Wedding guest'],
  ['interview', 'Interview'], ['travel', 'Travel'], ['festive', 'Festive or party']
];

export const weather = {
  hot: 'Hot: choose cotton or linen and skip the extra layer.',
  mild: 'Mild: add a light layer such as a cardigan, denim jacket or overshirt.',
  cold: 'Cold: add a coat or chunky knit, and closed shoes.',
  rainy: 'Rainy: add a trench or water-resistant jacket, and shoes that can handle puddles.'
};

export const archetypes = {
  classic: {
    name: 'The Classic', words: 'polished, timeless, reliable',
    summary: 'You like clothes that look right everywhere and still work in ten years. Clean tailoring, good fabric and quiet details matter more to you than trends.',
    pieces: ['Navy or camel blazer', 'Crisp white shirt', 'Straight-leg trousers', 'Trench coat', 'Leather loafers', 'Simple gold or pearl studs'],
    colors: 'Your palette’s neutrals with one deeper accent.',
    rule: 'Buy fewer, better basics in your best neutrals, and repeat them often.',
    formulas: {
      work: 'Blazer + fine knit + straight trousers + loafers',
      casual: 'Striped tee + straight jeans + ballet flats + trench',
      date: 'Silk shirt tucked into a midi skirt + slingbacks',
      wedding: 'Solid-color sheath or wrap dress + structured clutch',
      interview: 'Matching suit or blazer set + shell top + loafers or pumps',
      travel: 'Knit polo + pull-on trousers + trench + loafers',
      festive: 'Solid jewel-tone silk saree or straight kurta set + gold studs'
    }
  },
  minimalist: {
    name: 'The Minimalist', words: 'clean, calm, considered',
    summary: 'You prefer a few great pieces over a full closet. Clean lines, neutral colors and no fuss make getting dressed fast and calm.',
    pieces: ['Boxy white tee', 'Tailored wide-leg trousers', 'Black slip dress', 'Long wool coat', 'White leather sneakers', 'One good watch'],
    colors: 'Monochrome outfits built from your palette’s neutrals.',
    rule: 'Every new piece must work with at least three things you already own.',
    formulas: {
      work: 'Fine knit + tailored wide-leg trousers + minimal loafers, all one color family',
      casual: 'Boxy white tee + straight jeans + white sneakers + long coat',
      date: 'Slip dress + fine knit over the shoulders + simple sandals',
      wedding: 'Column dress in one solid color + one statement earring',
      interview: 'Collarless blazer + matching trousers + plain shell top',
      travel: 'Knit set + long coat + white sneakers',
      festive: 'Plain silk kurta set or single-color saree + one bold earring'
    }
  },
  romantic: {
    name: 'The Romantic', words: 'soft, feminine, graceful',
    summary: 'You are drawn to soft fabrics, gentle shapes and pretty details: florals, ruffles, flowing skirts and delicate jewelry.',
    pieces: ['Wrap blouse', 'Floral midi dress', 'Pleated midi skirt', 'Soft cardigan', 'Ballet flats', 'Delicate layered necklaces'],
    colors: 'The softer, lighter colors in your palette, plus one pastel.',
    rule: 'Add one soft detail (a ruffle, bow, lace or print) per outfit, not five.',
    formulas: {
      work: 'Bow blouse + pleated midi skirt + block heels',
      casual: 'Floral midi dress + cardigan + ballet flats',
      date: 'Ruffled top + satin skirt + strappy sandals',
      wedding: 'Floral or chiffon midi dress + pearl earrings',
      interview: 'Soft-shoulder blazer + silk blouse + tailored skirt',
      travel: 'Smocked dress + denim jacket + sandals',
      festive: 'Pastel anarkali or chiffon saree + delicate jhumkas'
    }
  },
  relaxed: {
    name: 'The Relaxed', words: 'easy, comfortable, natural',
    summary: 'Comfort comes first, but you still want to look put together. Soft knits, easy shapes and natural fabrics are your home base.',
    pieces: ['Chunky knit', 'Wide or straight jeans', 'Linen shirt', 'Overshirt', 'Clean sneakers', 'Canvas or leather tote'],
    colors: 'Earthy or soft neutrals from your palette, and washed denim.',
    rule: 'Add one structured piece (a sharp shoe, a crisp collar) to anchor every easy outfit.',
    formulas: {
      work: 'Linen shirt + wide trousers + clean sneakers or loafers',
      casual: 'Chunky knit + wide jeans + sneakers + tote',
      date: 'Soft knit tucked into a satin skirt + ankle boots',
      wedding: 'Linen-blend jumpsuit + flat sandals + statement earrings',
      interview: 'Unstructured blazer + knit + straight trousers',
      travel: 'Overshirt + tee + relaxed jeans + sneakers',
      festive: 'Cotton kurta set or handloom saree + kolhapuri sandals'
    }
  },
  bold: {
    name: 'The Bold', words: 'confident, striking, expressive',
    summary: 'You like to be noticed. Saturated color, strong shapes, statement prints and big accessories make you feel most like yourself.',
    pieces: ['Statement-color blazer', 'Bold print dress', 'Strong-shoulder top', 'Wide-leg trousers', 'Sculptural heels', 'Statement earrings'],
    colors: 'The brightest, clearest colors in your palette, worn in blocks.',
    rule: 'One hero piece per outfit; let everything else support it.',
    formulas: {
      work: 'Color-block blazer + black trousers + pointed shoes',
      casual: 'Bold print shirt + straight jeans + bright sneakers',
      date: 'Strong-shoulder top + leather trousers + statement earrings',
      wedding: 'Saturated one-color dress + metallic heels',
      interview: 'Tailored suit in a deep jewel tone + plain top',
      travel: 'Bright knit + dark jeans + sneakers in a matching color',
      festive: 'Jewel-tone lehenga or saree with a statement blouse'
    }
  },
  sporty: {
    name: 'The Sporty', words: 'active, practical, fresh',
    summary: 'You move a lot and want clothes that move with you. Athleisure, clean sneakers and practical layers feel right.',
    pieces: ['Track or zip jacket', 'Joggers or leggings', 'Polo or rugby shirt', 'Running sneakers', 'Cap', 'Crossbody bag'],
    colors: 'Clean neutrals from your palette with one bright accent.',
    rule: 'Mix one tailored piece with one sporty piece to look sharp, not gym-bound.',
    formulas: {
      work: 'Knit polo + tailored joggers + leather sneakers',
      casual: 'Zip jacket + tee + straight jeans + running sneakers',
      date: 'Fitted tee + track-stripe trousers + clean sneakers + gold chain',
      wedding: 'Simple knit dress or suit + clean leather sneakers (if the dress code allows)',
      interview: 'Blazer over a crew-neck knit + straight trousers + leather sneakers',
      travel: 'Matching sweat set + long coat + sneakers',
      festive: 'Short kurta over straight trousers + clean white sneakers'
    }
  },
  bohemian: {
    name: 'The Bohemian', words: 'free, earthy, layered',
    summary: 'You love texture, movement and things with a story: flowing shapes, embroidery, natural materials and layered jewelry.',
    pieces: ['Flowing maxi dress', 'Peasant blouse', 'Suede or fringe jacket', 'Embroidered kurta', 'Flat sandals', 'Layered jewelry'],
    colors: 'The warm, earthy shades in your palette, plus prints.',
    rule: 'Balance one flowing piece with one fitted piece so the outfit keeps a shape.',
    formulas: {
      work: 'Embroidered blouse + straight trousers + mules',
      casual: 'Maxi dress + denim jacket + flat sandals',
      date: 'Peasant blouse + flared jeans + layered necklaces',
      wedding: 'Printed maxi dress + block heels + statement earrings',
      interview: 'Soft blazer + printed blouse + plain trousers',
      travel: 'Tiered skirt + tee + sandals + crossbody',
      festive: 'Block-print anarkali or mirror-work skirt + oxidised jewelry'
    }
  },
  edgy: {
    name: 'The Edgy', words: 'sharp, cool, rebellious',
    summary: 'You like contrast and attitude: black, leather, hardware, boots and a slightly undone finish.',
    pieces: ['Leather jacket', 'Black straight jeans', 'Graphic or band tee', 'Combat or Chelsea boots', 'Slip skirt', 'Silver hardware'],
    colors: 'Black or your darkest neutral, plus one sharp accent from your palette.',
    rule: 'Pair one tough piece with one soft piece so the outfit looks intentional.',
    formulas: {
      work: 'Black blazer + tee + straight trousers + Chelsea boots',
      casual: 'Leather jacket + graphic tee + black jeans + boots',
      date: 'Slip skirt + fitted tee + leather jacket + boots',
      wedding: 'Deep-color satin dress + statement silver jewelry (check the dress code)',
      interview: 'Sharp dark suit + plain tee or shell + polished boots',
      travel: 'Hoodie + leather jacket + black jeans + boots',
      festive: 'Black or deep-jewel kurta set + silver oxidised jewelry'
    }
  }
};

// Archetype quiz: each option adds a point to one or two archetypes.
export const archetypeQuiz = [
  ['weekend', 'Your ideal weekend outfit?', [
    ['Straight jeans, crisp shirt, loafers', ['classic']],
    ['Plain tee, tailored trousers, white sneakers', ['minimalist']],
    ['Floral midi dress and a cardigan', ['romantic']],
    ['Big knit, wide jeans, comfy sneakers', ['relaxed']],
    ['Leggings, zip jacket, running shoes', ['sporty']],
    ['Flowing maxi and layered necklaces', ['bohemian']],
    ['Leather jacket, black jeans, boots', ['edgy']],
    ['Something bright that people comment on', ['bold']]]],
  ['compliment', 'Which compliment would you love most?', [
    ['You always look so put together', ['classic', 'minimalist']],
    ['That is so pretty on you', ['romantic']],
    ['You look so comfortable and cool', ['relaxed', 'sporty']],
    ['Nobody else could pull that off', ['bold', 'edgy']],
    ['Where did you find that? It has so much character', ['bohemian']]]],
  ['color', 'Open your closet. What do you see most?', [
    ['Navy, camel, white, black', ['classic']],
    ['Mostly neutrals, very few prints', ['minimalist']],
    ['Soft pastels and florals', ['romantic']],
    ['Earth tones, denim, washed colors', ['relaxed', 'bohemian']],
    ['Lots of bright color and print', ['bold']],
    ['Black, grey and some leather', ['edgy']],
    ['Athletic brands and practical layers', ['sporty']]]],
  ['shoes', 'Pick the shoes you would wear all week.', [
    ['Leather loafers', ['classic']],
    ['Plain white sneakers', ['minimalist', 'sporty']],
    ['Ballet flats or block heels', ['romantic']],
    ['Comfy slip-ons or kolhapuris', ['relaxed', 'bohemian']],
    ['Statement heels', ['bold']],
    ['Combat or Chelsea boots', ['edgy']],
    ['Running shoes', ['sporty']]]],
  ['fabric', 'Which fabric do you reach for?', [
    ['Crisp cotton and fine wool', ['classic']],
    ['Smooth, plain, structured', ['minimalist']],
    ['Silk, chiffon, lace', ['romantic']],
    ['Soft knits and linen', ['relaxed']],
    ['Suede, embroidery, block print', ['bohemian']],
    ['Leather and denim', ['edgy']],
    ['Stretch and technical fabrics', ['sporty']],
    ['Sequins, satin, anything that shines', ['bold']]]],
  ['shopping', 'When you shop, what usually wins?', [
    ['Quality that will last years', ['classic', 'minimalist']],
    ['It made me feel pretty', ['romantic']],
    ['It is comfortable', ['relaxed', 'sporty']],
    ['It is unusual or one of a kind', ['bohemian', 'edgy']],
    ['It is a statement', ['bold']]]],
  ['accessory', 'Your signature accessory?', [
    ['A classic watch or pearl studs', ['classic']],
    ['None, or one simple piece', ['minimalist']],
    ['Delicate necklaces and hair bows', ['romantic']],
    ['A big tote', ['relaxed']],
    ['A cap and a crossbody bag', ['sporty']],
    ['Stacks of bangles and rings', ['bohemian']],
    ['Silver chains and hardware', ['edgy']],
    ['Huge statement earrings', ['bold']]]],
  ['event', 'You are invited to a party tonight. You wear…', [
    ['A tailored dress or sharp blazer', ['classic']],
    ['A clean black outfit', ['minimalist', 'edgy']],
    ['Something soft, floaty and pretty', ['romantic']],
    ['Nice jeans and my favorite knit', ['relaxed']],
    ['The brightest thing I own', ['bold']],
    ['A printed maxi and lots of jewelry', ['bohemian']],
    ['Fresh sneakers and a matching set', ['sporty']]]]
];

export const toolPages = {
  hub: {
    path: '/tools/', title: 'Free Style Tools: Build Your Style Blueprint',
    h1: 'Free style tools: build your Style Blueprint',
    keyword: 'free style tools',
    answer: 'Style BFF’s free style tools work as one journey. Find your body shape, your color season and your style archetype, then generate outfits that use all three. Your answers combine into a Style Blueprint you can share or print. Each step takes one to three minutes, and nothing is uploaded.'
  },
  shape: {
    path: '/tools/body-shape-calculator/', title: 'Body Shape Calculator: Find Your Shape',
    h1: 'Body shape calculator',
    keyword: 'body shape calculator',
    answer: 'Enter your bust, waist and hip measurements to find your body shape: hourglass, pear, apple, rectangle or inverted triangle. The calculator compares the three numbers, explains your result and links to outfit advice for your shape. It runs in your browser; nothing is stored on our servers or sent anywhere.'
  },
  archetype: {
    path: '/tools/style-archetype-quiz/', title: 'Style Archetype Quiz: What’s My Style?',
    h1: 'Style archetype quiz: what’s my style?',
    keyword: 'style archetype quiz',
    answer: 'Answer eight quick questions about the clothes, shoes and moments you love to find your style archetype: Classic, Minimalist, Romantic, Relaxed, Bold, Sporty, Bohemian or Edgy. You get your main and second archetype, signature pieces and outfit formulas for real occasions.'
  },
  outfit: {
    path: '/tools/outfit-generator/', title: 'What Should I Wear? Free Outfit Generator',
    h1: 'What should I wear? Outfit generator',
    keyword: 'what should i wear outfit generator',
    answer: 'Pick the occasion and the weather, and the outfit generator builds three outfit formulas for you. If you have used the other free tools, it also uses your body shape, color season and style archetype, so the colors and shapes are chosen for you, not for a model.'
  },
  blueprint: {
    path: '/tools/style-blueprint/', title: 'Your Style Blueprint: Free Style Profile',
    h1: 'Your Style Blueprint',
    keyword: 'style profile',
    answer: 'Your Style Blueprint brings together your body shape, color season and style archetype as three personal style rules, a color palette and outfit formulas for work, everyday and special occasions. Share the link with a friend or print it to take shopping.'
  }
};
