import { INK, FILL, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, mirror, both, top, sleeve, buttons, placket, strapless, shirt, jacket, dress, waistMark } from './base.mjs';

export const fitArt = {
  'A-line': dress({ w: 52, ww: 13, hw: 34 }) + acc('M47 52 L26 104 M73 52 L94 104', 2),
  'Anti-fit': dress({ w: 60, ww: 26, hw: 34, bw: 24, sleeves: 'short' }) + dash('M44 30 Q38 60 44 104 M76 30 Q82 60 76 104'),
  'Asymmetric': dress({ w: 50, ww: 14, hw: 28, skirt: ' L32 112 L88 86 L74 50' }) + acc('M32 112 L88 86'),
  'Bodycon': dress({ w: 54, ww: 11, hw: 16, h: 96, bw: 15 }) + acc('M49 54 Q44 76 44 96 M71 54 Q76 76 76 96', 2),
  'Boxy': both(body('M28 34 L12 58 L22 64 L28 54')) + body('M48 26 L28 34 L28 86 L92 86 L92 34 L72 26 C68 34 52 34 48 26 Z') + acc('M28 86 L92 86 M28 34 L28 86 M92 34 L92 86', 2),
  'Column': dress({ w: 60, ww: 16, hw: 17, h: 112 }) + acc('M44 30 L43 112 M76 30 L77 112', 2),
  'Drop waist': dress({ w: 70, ww: 18, hw: 30 }) + waistMark(70, 18) + dash('M44 52 L76 52'),
  'Empire waist': dress({ w: 40, ww: 17, hw: 30, h: 110 }) + waistMark(40, 17),
  'Fit and flare': dress({ w: 52, ww: 12, skirt: ' C40 70 22 92 22 100 Q60 108 98 100 C98 92 80 70 72 52' }) + waistMark(52, 12),
  'Hourglass silhouette': dress({ w: 54, ww: 10, bw: 20, skirt: ' C38 66 36 84 40 100 Q60 104 80 100 C84 84 82 66 70 54' }) + waistMark(54, 10),
  'Mermaid silhouette': dress({ w: 52, ww: 12, skirt: ' C44 70 48 80 46 88 L28 112 Q60 118 92 112 L74 88 C72 80 76 70 72 52' }) + acc('M46 88 L28 112 M74 88 L92 112', 2.5),
  'Oversized': both(body('M22 36 L6 80 L16 84 L24 58')) + body('M46 24 L22 36 L22 108 L98 108 L98 36 L74 24 C70 32 50 32 46 24 Z') + dash('M40 32 L39 104 M80 32 L81 104'),
  'Peplum': body('M48 26 L30 33 L36 52 L44 64 L76 64 L84 52 L90 33 L72 26 C68 34 52 34 48 26 Z') + accFill('M44 64 L28 84 Q60 90 92 84 L76 64 Z'),
  'Princess seam': dress({ w: 54, ww: 13, hw: 26 }) + acc('M48 26 C52 40 48 46 50 54 L42 104 M72 26 C68 40 72 46 70 54 L78 104', 2),
  'Regular fit': top({ neck: 'crew', accentNeck: false }) + dash('M38 34 L39 104 M82 34 L81 104'),
  'Relaxed fit': both(body('M28 34 L12 66 L22 70 L28 54')) + body('M48 26 L28 34 L28 106 L92 106 L92 34 L72 26 C68 34 52 34 48 26 Z') + dash('M38 34 L39 104 M82 34 L81 104'),
  'Shift silhouette': dress({ w: 60, ww: 22, hw: 26, h: 100 }) + acc('M38 40 L34 100 M82 40 L86 100', 2),
  'Slim fit': both(body('M30 33 L9 92 L17 94 L34 52')) + body('M48 26 L30 33 L34 52 Q40 70 38 106 L82 106 Q80 70 86 52 L90 33 L72 26 C68 34 52 34 48 26 Z') + acc('M34 52 Q40 70 38 106 M86 52 Q80 70 82 106', 2),
  'Straight fit': dress({ w: 60, ww: 20, hw: 20, h: 106 }) + acc('M40 60 L40 106 M80 60 L80 106', 2),
  'Tailored': jacket(body('M60 70 L48 24 L40 30 L44 44 L38 46 Z M60 70 L72 24 L80 30 L76 44 L82 46 Z')) + acc('M44 50 Q42 70 46 104 M76 50 Q78 70 74 104', 2),
  'Trapeze silhouette': dress({ w: 40, ww: 18, hw: 40, h: 104 }) + acc('M42 40 L20 104 M78 40 L100 104', 2),
  'Wrap': dress({ w: 54, ww: 13, hw: 30, neck: 'L60 40 L50 20' }) + acc('M70 20 L44 56 L36 104 M50 20 L66 44', 2.2) + accFill('M44 56 L32 62 L34 66 Z')
};
const legs = dash('M50 60 L51 116 M70 60 L69 116') + ln('M46 84 L54 84 M66 84 L74 84', 1, '#b8a99a');
const lenDress = (h, hw) => legs + dress({ w: 40, ww: 14, hw, h }) + acc('M' + (60 - hw - 6) + ' ' + h + ' L' + (60 + hw + 6) + ' ' + h, 2.5);
const cropTop = (hem, sl = 'short') => sleeve(sl, false) + body('M48 26 L30 33 L32 52 L34 ' + hem + ' L86 ' + hem + ' L88 52 L90 33 L72 26 C68 34 52 34 48 26 Z');
export const lengthArt = {
  'Ankle length': lenDress(108, 28), 'Calf length': lenDress(96, 26), 'Floor length': lenDress(114, 32), 'Knee length': lenDress(84, 22),
  'Maxi': lenDress(112, 30), 'Midi': lenDress(96, 26), 'Mini': lenDress(66, 20), 'Tea length': lenDress(102, 27),
  'Asymmetric hem': legs + dress({ w: 40, ww: 14, skirt: ' L34 70 L86 104 L74 40' }) + acc('M34 70 L86 104'),
  'Handkerchief hem': legs + dress({ w: 40, ww: 14, skirt: ' L32 74 L42 96 L52 80 L62 104 L72 82 L80 98 L88 74 L74 40' }) + acc('M32 74 L42 96 L52 80 L62 104 L72 82 L80 98 L88 74'),
  'High-low hem': legs + dress({ w: 40, ww: 14, skirt: ' L30 110 Q34 76 60 72 Q86 76 90 110 L74 40' }) + acc('M30 110 Q34 76 60 72 Q86 76 90 110'),
  'Raw hem': legs + dress({ w: 40, ww: 14, hw: 22, h: 84 }) + acc('M40 86 L41 90 M44 86 L44 91 M48 87 L49 90 M52 87 L52 92 M56 87 L57 90 M60 87 L60 91 M64 87 L63 90 M68 87 L68 92 M72 86 L71 90 M76 86 L76 91 M80 86 L79 90', 1.2),
  'Cropped': cropTop(64) + dash('M34 80 L86 80') + txt(60, 92, 'natural waist', 6) + acc('M34 64 L86 64'),
  'Hip length': cropTop(90, 'full') + acc('M28 90 L92 90'),
  'Tunic length': legs + cropTop(100, 'three') + acc('M28 100 L92 100')
};
export const dressArt = {
  'Babydoll dress': dress({ w: 40, ww: 16, hw: 34, h: 84, sleeves: 'puff' }) + waistMark(40, 16),
  'Blouson dress': dress({ w: 56, ww: 13, hw: 24, bw: 22, sleeves: 'elbow' }) + acc('M38 54 Q48 60 60 58 Q72 60 82 54', 2.5),
  'Bodycon dress': fitArt['Bodycon'],
  'Button-down dress': dress({ w: 52, ww: 14, hw: 28, sleeves: 'short' }) + ln('M60 26 L60 104', 1.4) + buttons(63, [34, 46, 58, 70, 82, 94], ACC),
  'Cocktail dress': dress({ w: 50, ww: 12, hw: 26, h: 86, neck: 'C68 34 52 34 50 20' }) + acc('M40 72 Q60 78 80 72', 1.4),
  'Corset dress': dress({ w: 56, ww: 11, hw: 26, neck: 'C66 26 54 26 50 20' }) + acc('M50 30 L50 56 M70 30 L70 56', 1.4) + acc('M58 32 L62 36 M62 32 L58 36 M58 40 L62 44 M62 40 L58 44 M58 48 L62 52 M62 48 L58 52', 1.2),
  'Empire dress': fitArt['Empire waist'], 'Fit-and-flare dress': fitArt['Fit and flare'],
  'Godet dress': dress({ w: 52, ww: 12, skirt: ' L42 84 L30 106 Q60 110 90 106 L78 84 L72 52' }) + accFill('M42 84 L36 106 L48 106 Z M78 84 L72 106 L84 106 Z M60 86 L54 108 L66 108 Z'),
  'Gown': dress({ w: 50, ww: 12, hw: 40, h: 114 }) + acc('M48 50 L20 114 M72 50 L100 114', 2),
  'Kaftan dress': body('M48 18 L10 40 L16 58 L36 52 L34 112 L86 112 L84 52 L104 58 L110 40 L72 18 L60 34 Z') + acc('M48 18 L60 34 L72 18', 2.5) + acc('M10 40 L16 58 M110 40 L104 58', 2),
  'Little black dress': dress({ w: 52, ww: 13, hw: 24, h: 88, dark: true }) + acc('M36 88 L84 88', 2),
  'Maxi dress': lengthArt['Maxi'], 'Midi dress': lengthArt['Midi'], 'Mini dress': lengthArt['Mini'],
  'Pinafore dress': top({ neck: 'crew', sleeves: 'full', accentNeck: false }) + accFill('M44 26 L46 40 L42 54 L28 104 L92 104 L78 54 L74 40 L76 26 L70 26 L68 40 L52 40 L50 26 Z'),
  'Pleated dress': dress({ w: 50, ww: 13, hw: 30 }) + acc('M50 52 L40 104 M55 52 L50 104 M60 52 L60 104 M65 52 L70 104 M70 52 L80 104', 1.4),
  'Prairie dress': dress({ w: 50, ww: 13, hw: 32, h: 112, sleeves: 'mutton', neck: 'L70 14 Q60 12 50 14 L50 20' }) + acc('M30 98 Q34 102 38 98 Q42 102 46 98 Q50 102 54 98 Q58 102 62 98 Q66 102 70 98 Q74 102 78 98 Q82 102 86 98', 1.6),
  'Princess-line dress': fitArt['Princess seam'], 'Sheath dress': dress({ w: 54, ww: 12, hw: 18, h: 92 }) + acc('M48 54 Q44 74 42 92 M72 54 Q76 74 78 92', 2),
  'Shift dress': fitArt['Shift silhouette'],
  'Shirt dress': dress({ w: 54, ww: 15, hw: 26, sleeves: 'elbow' }) + accFill('M60 30 L50 20 L46 30 Z M60 30 L70 20 L74 30 Z') + ln('M60 30 L60 104', 1.4) + acc('M44 54 L76 54', 3),
  'Skater dress': dress({ w: 50, ww: 12, sleeves: 'short', skirt: ' C40 64 22 74 22 80 Q60 86 98 80 C98 74 80 64 72 50' }) + acc('M22 80 Q60 86 98 80', 2.5),
  'Slip dress': both(acc('M46 30 L50 12', 1.6)) + body('M44 30 Q60 36 76 30 L80 60 L82 100 L38 100 L40 60 Z') + acc('M44 30 Q60 36 76 30', 2),
  'Smock dress': dress({ w: 40, ww: 20, hw: 30, h: 100, sleeves: 'short' }) + acc('M44 30 L46 38 M50 30 L52 38 M56 30 L58 38 M62 30 L64 38 M68 30 L70 38 M74 30 L76 38', 1.2) + acc('M42 34 L78 34', 1),
  'Sundress': both(acc('M46 30 L50 12', 2)) + body('M44 30 Q60 38 76 30 L74 50 L92 94 Q60 100 28 94 L46 50 Z') + dot(52, 72, 2, SOFT) + dot(66, 82, 2, SOFT) + dot(44, 88, 2, SOFT) + dot(74, 66, 2, SOFT),
  'Sweater dress': dress({ w: 60, ww: 18, hw: 22, h: 96, sleeves: 'full', neck: 'L70 12 Q60 10 50 12 L50 20' }) + acc('M38 92 L82 92', 1.4) + ln('M48 44 L48 88 M60 44 L60 88 M72 44 L72 88', .8, '#c9b8a5'),
  'T-shirt dress': dress({ w: 60, ww: 19, hw: 22, h: 96, sleeves: 'short' }),
  'Tent dress': fitArt['Trapeze silhouette'],
  'Tiered dress': dress({ w: 48, ww: 13, hw: 34, h: 106 }) + acc('M42 64 Q60 68 78 64 M36 84 Q60 88 84 84', 2),
  'Wrap dress': fitArt['Wrap']
};
