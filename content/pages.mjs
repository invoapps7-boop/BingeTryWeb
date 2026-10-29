// Reviewed long-form content and comparison evidence (2026-10-29).
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';

// Evidence checked on 2026-10-29 against the linked official source.
export const extraComparisonEvidence = {
  'chatgpt-as-a-stylist': ['OpenAI’s help center describes ChatGPT as a general AI assistant for tasks such as brainstorming, writing, planning and analyzing images or files, with image creation and web search. It works on the web and on iOS and Android, with Free, Plus/Pro and business plans. It does not keep a wardrobe catalog or a fixed color profile unless you re-share them.', 'https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq'],
  'doppl-alternatives': ['Google Labs launched Doppl in the US in June 2025 as an experimental app for visualizing outfits on a digital version of yourself. Google Labs announced in March 2026 that the app would shut down on April 30, 2026, and that its try-on technology continues on product listings and image results across Google.', 'https://x.com/GoogleLabs/status/2036188820128071786']
};

export const seasonalGuide = {
  answer: 'Seasonal color analysis sorts your natural coloring into one of 12 seasons using three dimensions: undertone (warm or cool), value (light or deep) and chroma (bright or soft). Your season gives you a palette of colors that make your skin look clearer and your eyes brighter, so you can shop and dress with fewer mistakes.',
  sections: [
    ['What are hue, value and chroma?', ['<b>Hue / undertone:</b> whether your skin has a warm golden or cool pink-blue cast. Gold versus silver jewelry is a quick first test.', '<b>Value:</b> how light or deep your hair, skin and eyes are overall.', '<b>Chroma:</b> how clear and vivid versus soft and muted your coloring is. High-contrast, bright-eyed people are usually high chroma.']],
    ['Where the system comes from', 'Carole Jackson’s 1980 book Color Me Beautiful popularized four seasons. Later analysts split each into three to capture people who sit between seasons, creating the 12-season system most apps and analysts now use.'],
    ['The 12 seasons', ['<b>Spring</b> (warm, clear): ' + a('/quiz/result/bright-spring/', 'Bright') + ', ' + a('/quiz/result/true-spring/', 'True') + ', ' + a('/quiz/result/light-spring/', 'Light') + '.', '<b>Summer</b> (cool, soft): ' + a('/quiz/result/light-summer/', 'Light') + ', ' + a('/quiz/result/true-summer/', 'True') + ', ' + a('/quiz/result/soft-summer/', 'Soft') + '.', '<b>Autumn</b> (warm, muted): ' + a('/quiz/result/soft-autumn/', 'Soft') + ', ' + a('/quiz/result/true-autumn/', 'True') + ', ' + a('/quiz/result/deep-autumn/', 'Deep') + '.', '<b>Winter</b> (cool, clear): ' + a('/quiz/result/deep-winter/', 'Deep') + ', ' + a('/quiz/result/true-winter/', 'True') + ', ' + a('/quiz/result/bright-winter/', 'Bright') + '.']],
    ['How to find your season', ['<b>Professional draping:</b> an analyst holds fabric under your face in neutral light. Most reliable.', '<b>At-home test:</b> compare warm versus cool and bright versus muted fabrics near your face in daylight, with no makeup.', '<b>Selfie analysis:</b> apps such as Style BFF estimate your season from a photo. Fast and free, but sensitive to lighting.']],
    ['Mistakes that skew results', ['Warm indoor lighting or beauty filters.', 'Judging dyed hair or a tan instead of natural coloring.', 'Treating your season as a strict rule. Use it for colors near your face; anything works on shoes and trousers.']],
    ['What to do with your palette', ['Wear your best colors near your face: tops, scarves, collars, earrings.', 'Use your season’s neutrals for big, expensive pieces like coats and suits.', 'Repeat one accent color in an outfit so it looks intentional.', 'Bring your palette shopping, or let Style BFF filter outfit ideas by it.']]
  ],
  faq: [
    ['Can my color season change?', 'Your underlying coloring rarely changes, but hair color, tans and aging can shift which neighboring season looks best.'],
    ['Is AI color analysis accurate?', 'It is a good starting point. Lighting and camera processing affect results, so confirm by testing colors in daylight. ' + a('/answers/is-ai-color-analysis-accurate/', 'More on accuracy') + '.'],
    ['What is the rarest color season?', 'There is no reliable data on how common each season is, and analysts disagree. Focus on what works on you rather than rarity.']
  ]
};
