// Answer-first guides added in cycle 2026-11-13 (seo-ops backlog B19, B18).
// Style BFF facts were checked against the live Google Play and App Store listings on 2026-11-13.
// Google try-on facts come from Google's own help page (re-checked 2026-11-23). Published 2026-11-23.
const a = (href, label) => '<a href="' + href + '">' + label + '</a>';
const table = (head, rows) => '<div class="table-wrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const APP = ['Style BFF on the App Store', 'https://apps.apple.com/us/app/id6767003047'];
const PLAY = ['Style BFF on Google Play', 'https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon'];

export const guides2026_11_13 = [
  {
    slug: 'recreate-a-pinterest-outfit-with-your-own-clothes',
    published: '2026-11-23',
    questions: ['Q044'],
    title: 'Recreate a Pinterest Outfit With Your Clothes',
    h1: 'How to recreate a Pinterest outfit with your own clothes',
    keyword: 'recreate pinterest outfit with my own clothes',
    answer: 'To recreate a Pinterest outfit from your own wardrobe, break the saved look into its parts: the silhouette, the color story and the one detail that makes it work. Match each part to the closest piece you already own rather than copying it exactly. A styling app such as Style BFF can do this for you: share the pin and it rebuilds the look from your digital closet and shows it on your photo.',
    sections: [
      ['Step 1: break the pin into three parts', ['<b>Silhouette:</b> is it fitted on top and loose below, oversized all over, or tailored? This matters more than the exact garments.', '<b>Color story:</b> note two or three colors and how they are balanced (one base, one accent, one neutral).', '<b>The detail:</b> the one thing that makes the look, such as a tucked shirt, a belt, white sneakers or a long coat.']],
      ['Step 2: match each part to what you own', ['Pick the closest silhouette match first, even if the color is different.', 'Swap colors to your own palette: the mood survives a color change, a wrong silhouette does not.', 'Recreate the key detail with something you have, like a similar belt or shoe.', 'Do not buy anything yet; a 70% match from your closet beats a perfect copy you have to order.']],
      ['Step 3: check it before you commit', 'Lay the pieces out, or try them on, and compare the proportions to the pin side by side. If one piece is off, change that single item rather than starting over.'],
      ['What the pin can and cannot give you', '__TABLE__'],
      ['Let an app do the matching', 'Instead of eyeballing it, share the Pinterest pin with Style BFF. It reads the visible outfit, finds the closest pieces in your digital closet, and shows the rebuilt look on your own photo, guided by your color season and body type. If a piece is genuinely missing, it can suggest one connector to buy rather than a full shopping list. ' + a('/features/try-on-from-pinterest-instagram/', 'How inspiration try-on works') + '.'],
      ['When you cannot recreate it from your closet', 'If the pin needs a piece you do not own and cannot fake, treat it as a wardrobe gap, not an emergency purchase. Note the piece, see how many other saved looks need the same thing, and buy it only if it unlocks several outfits. ' + a('/features/complete-the-closet/', 'How gap-finding works') + '.']
    ],
    tableInSection: table(['Part of the look', 'Easy to recreate from your closet?', 'What to do'], [['Overall silhouette and proportion', 'Usually yes', 'Match the shape first; it carries the look'], ['Color combination', 'Yes, with swaps', 'Keep the balance, change colors to your palette'], ['A specific branded item', 'Often no', 'Find a similar shape or texture you own'], ['Exact fabric or print', 'Sometimes', 'Match the mood (drapey, structured) not the print'], ['The finishing detail', 'Usually yes', 'Recreate with a belt, shoe or layering piece']]),
    faq: [
      ['Can an app put a Pinterest outfit on me?', 'Yes. Share a supported public Pinterest link with a try-on app such as Style BFF to see the look on your own photo before you recreate it.'],
      ['How do I copy a Pinterest outfit without buying new clothes?', 'Break the look into silhouette, color and one key detail, then match each to the closest piece you already own. The shape matters most.'],
      ['Why does my version of a Pinterest outfit look different?', 'Usually the proportions are off, not the colors. Check whether the original is fitted or loose on top and bottom, and match that first.'],
      ['Can I try on a Pinterest outfit for free?', 'Google\'s try-on works on products listed on Google. For a saved pin, a styling app is the usual route; check the app\'s listing for what its free tier includes.']
    ],
    sources: [PLAY, APP, ['How the Google try-on tool works (Google Shopping Help)', 'https://support.google.com/googleshopping/answer/16253678?hl=en']],
    related: ['/features/try-on-from-pinterest-instagram/', '/blog/how-to-try-on-pinterest-outfits-on-yourself/', '/features/complete-the-closet/', '/blog/does-this-outfit-match/', '/features/digital-closet/']
  },
  {
    slug: 'what-to-wear-on-a-first-date',
    published: '2026-11-23',
    questions: ['Q098'],
    title: 'What to Wear on a First Date',
    h1: 'What to wear on a first date',
    keyword: 'what to wear on a first date',
    answer: 'Dress for the activity first, then for comfort: match the venue\'s formality, then wear something you can relax and move in. Choose one piece you feel confident in and build a simple outfit around it in colors that suit you. Avoid brand-new clothes and untested shoes, so nothing distracts you from the conversation.',
    sections: [
      ['Match the plan', '__TABLE__'],
      ['The one-hero rule', 'Pick one piece you already know you look good in, such as a well-fitting top, a jacket or a pair of jeans, and keep the rest simple around it. A single confident piece beats a head-to-toe new outfit you are unsure about.'],
      ['Comfort is attractive', ['Wear shoes you have already walked in; a first date is not the time to break in heels.', 'Choose fabrics you can sit, eat and move in without adjusting.', 'Check the weather and bring one layer; being cold or overheated shows.', 'Avoid anything you have to hold in, hitch up or fuss with.']],
      ['Colors that do the work', 'Wear a color you look good in near your face: it lifts your skin and makes you look well, which reads as confidence. If you are not sure which colors suit you, a quick color analysis helps. ' + a('/blog/what-colors-look-good-on-me/', 'Find your colors') + '.'],
      ['Decide the night before', 'Plan it in advance so the evening is about them, not your wardrobe. Tell Style BFF the plan ("first date, casual dinner") and it builds a look from clothes you already own, in your palette, and shows it on your photo so you can decide calmly. ' + a('/features/daily-outfits-on-you/', 'See occasion outfits') + '.']
    ],
    tableInSection: table(['Date plan', 'What usually works', 'Avoid'], [['Coffee or a casual walk', 'Good jeans or trousers, a nice top, a jacket, clean sneakers', 'Anything stiff or overdressed'], ['Casual dinner or drinks', 'Smart-casual: a dress, or shirt and chinos, with comfortable shoes', 'A full suit or gown'], ['Nicer restaurant', 'A midi dress or tailored separates; shirt, blazer, leather shoes', 'Gym or very casual wear'], ['Activity (mini-golf, museum, hike)', 'Dress for movement: layers, flats or trainers you trust', 'Heels, tight or delicate pieces'], ['Not sure yet', 'Smart-casual you can dress up or down with one layer', 'Guessing at either extreme']]),
    faq: [
      ['What should I wear on a first date to feel confident?', 'Start from one piece you already know flatters you and keep the rest simple. Familiar, well-fitting clothes beat a new outfit you are unsure about.'],
      ['Is it bad to overdress for a first date?', 'Being far above the venue\'s level can feel awkward for both people. Match the plan, then go one small step smarter if you want.'],
      ['What colors are best for a first date?', 'Wear a color that suits your skin near your face. There is no single "best" color; the right one depends on your palette.']
    ],
    sources: [PLAY, APP],
    related: ['/features/daily-outfits-on-you/', '/blog/what-colors-look-good-on-me/', '/blog/what-should-i-wear-today-from-my-closet/', '/tools/outfit-generator/', '/blog/does-this-outfit-match/']
  },
  {
    slug: 'what-to-wear-to-a-concert',
    published: '2026-11-23',
    questions: ['Q096'],
    title: 'What to Wear to a Concert',
    h1: 'What to wear to a concert',
    keyword: 'what to wear to a concert',
    answer: 'Dress for the genre, the venue and the weather, in that order, then make sure you can stand, move and stay comfortable for hours. Wear closed, broken-in shoes, layers you can tie around your waist, and a small bag you can keep on you. Save the standout piece for something that still lets you move.',
    sections: [
      ['Dress for the genre and venue', '__TABLE__'],
      ['Comfort rules for a long night', ['Wear closed-toe shoes you have already walked in; crowds mean stepped-on feet.', 'Bring a layer: venues swing from hot and packed to cold outside afterwards.', 'Carry a small crossbody or belt bag; many venues limit bag size, so check the policy.', 'Pockets or a bag you can close matter more than they look; keep your phone and cash secure.']],
      ['Weather and the walk home', 'Check whether the venue is indoor, outdoor or a festival field, and dress for getting there and back, not just the show. Outdoor and festival sets often get cold and muddy after dark, so plan footwear and a layer accordingly.'],
      ['Make the standout piece practical', 'Concerts are a good place for a bolder piece, as long as it moves: a sequined top, a band tee styled up, a bright jacket. Keep heavy, tight or fragile items for occasions where you will sit down.'],
      ['Plan the look from your closet', 'Tell Style BFF the plan ("concert, indoor arena, standing") and it builds a look from clothes you already own, in your palette, and shows it on your photo, so you can pick something that looks good and lasts the night. ' + a('/features/digital-closet/', 'How the digital closet works') + '.']
    ],
    tableInSection: table(['Show type', 'What usually works', 'Watch out for'], [['Pop or arena show', 'A fun standout piece, jeans or a skirt, comfortable boots or trainers', 'Brand-new shoes'], ['Rock or indie gig', 'Band tee or dark top, jeans, a jacket, sturdy closed shoes', 'Anything delicate in a mosh pit'], ['Festival (outdoor, all day)', 'Layers, shorts or jeans, trainers or boots, a hat, sunscreen', 'Heels, white shoes, no layer'], ['Classical or theatre', 'Smart-casual to dressy: a dress or shirt and trousers', 'Very casual or distracting outfits'], ['Club or electronic night', 'Breathable, dark, easy-to-move clothes you will not overheat in', 'Heavy fabrics, fussy layers']]),
    faq: [
      ['What shoes should I wear to a concert?', 'Closed-toe shoes you have already broken in. You will stand for hours and feet get stepped on, so comfort and protection come first.'],
      ['What should I wear to an outdoor concert or festival?', 'Dress in layers for temperature swings, choose trainers or boots you do not mind getting dirty, and bring sun protection for the day and a warm layer for after dark.'],
      ['Can I dress up for a concert?', 'Yes, concerts suit a bolder piece. Just make sure it lets you move and stand comfortably for the whole night.']
    ],
    sources: [PLAY, APP],
    related: ['/features/digital-closet/', '/features/daily-outfits-on-you/', '/blog/what-should-i-wear-today-from-my-closet/', '/tools/outfit-generator/', '/blog/what-colors-look-good-on-me/']
  }
];
