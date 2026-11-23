import { INK, FILL, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, mirror, both, top, sleeve, buttons, placket, shirt, dress } from './base.mjs';
export const tee = (sl = 'short', neck = 'crew', hem = 106) => sleeve(sl, false) + body('M48 26 L30 33 L32 52 L34 ' + hem + ' L86 ' + hem + ' L88 52 L90 33 L72 26 ' + ({ crew: 'C68 34 52 34 48 26', v: 'L60 46 L48 26', scoop: 'C70 42 50 42 48 26', high: 'L72 14 C66 12 54 12 48 14 L48 26' }[neck]) + 'Z');
export const rib = (y, x0 = 34, x1 = 86) => accFill('M' + x0 + ' ' + (y - 6) + ' L' + x1 + ' ' + (y - 6) + ' L' + x1 + ' ' + y + ' L' + x0 + ' ' + y + ' Z');
const cuffs = both(accFill('M7 90 L6 96 L15 98 L16 92 Z'));
export const topArt = {
  'Blouse': top({ neck: 'v', sleeves: 'bishop', accentNeck: false }) + accFill('M60 46 L48 26 L44 34 Z M60 46 L72 26 L76 34 Z'),
  'Bodysuit': both(body('M32 33 L12 90 L20 92 L36 52')) + body('M48 26 L32 33 L36 52 L38 92 L52 104 L68 104 L82 92 L84 52 L88 33 L72 26 C68 34 52 34 48 26 Z') + accFill('M52 98 L68 98 L68 106 L52 106 Z'),
  'Bralette': both(ln('M44 40 L46 22', 1.6)) + accFill('M36 56 L40 40 Q50 36 60 50 Q70 36 80 40 L84 56 Z') + acc('M36 56 L84 56 M36 62 L84 62', 1.6),
  'Bustier': body('M34 44 C40 36 56 36 60 44 C64 36 80 36 86 44 L82 78 L38 78 Z') + acc('M46 46 L44 78 M60 48 L60 78 M74 46 L76 78', 1.6),
  'Button-down shirt': shirt() + accFill('M60 31 L46 24 L49 46 Z M60 31 L74 24 L71 46 Z') + dot(49, 42, 1.8) + dot(71, 42, 1.8),
  'Camisole': both(acc('M44 40 L46 18', 1.6)) + body('M36 44 Q48 38 60 46 Q72 38 84 44 L86 96 L34 96 Z') + acc('M36 44 Q48 38 60 46 Q72 38 84 44', 2),
  'Cardigan': top({ neck: 'v', sleeves: 'full', accentNeck: false }) + acc('M60 48 L60 106', 2) + buttons(63, [56, 68, 80, 92], ACC) + rib(106) + cuffs,
  'Corset top': body('M36 40 Q48 34 60 42 Q72 34 84 40 L80 64 L86 82 L34 82 L40 64 Z') + acc('M58 44 L62 48 M62 44 L58 48 M58 52 L62 56 M62 52 L58 56 M58 60 L62 64 M62 60 L58 64 M58 68 L62 72 M62 68 L58 72', 1.2) + acc('M46 42 L46 80 M74 42 L74 80', 1.2),
  'Crop top': tee('short', 'crew', 66) + acc('M34 66 L86 66') + dash('M34 80 L86 80'),
  'Halter top': body('M52 12 L44 28 L38 52 L38 90 L82 90 L82 52 L76 28 L68 12 Q60 8 52 12 Z') + acc('M52 12 Q60 8 68 12', 2.5) + both(acc('M38 52 Q40 36 44 28', 2)),
  'Henley': top({ neck: 'crew', sleeves: 'full', accentNeck: false }) + acc('M60 32 L60 50', 2) + buttons(62, [37, 43, 49]),
  'Hoodie': tee('full') + accFill('M46 28 C40 8 80 8 74 28 C68 22 52 22 46 28 Z') + acc('M56 30 L55 44 M64 30 L65 44', 1.4) + accFill('M44 70 L76 70 L82 92 L38 92 Z') + rib(106),
  'Jumper': tee('full') + rib(106) + cuffs + ln('M44 40 L44 98 M52 40 L52 98 M60 40 L60 98 M68 40 L68 98 M76 40 L76 98', .8, '#c9b8a5'),
  'Kurti': tee('three', 'v', 104) + acc('M60 28 L60 46', 2) + acc('M34 88 L34 104 M86 88 L86 104', 2.4) + ln('M36 98 L84 98', 1, ACC, 'none', ' stroke-dasharray="2 3"'),
  'Off-shoulder top': both(body('M22 44 L12 62 L21 66 L32 56')) + body('M22 44 L32 56 L34 90 L86 90 L88 56 L98 44 Q60 50 22 44 Z') + acc('M22 44 Q60 50 98 44'),
  'Oxford shirt': shirt() + accFill('M60 31 L46 24 L49 46 Z M60 31 L74 24 L71 46 Z') + dot(49, 42, 1.8) + dot(71, 42, 1.8) + accFill('M36 46 L46 46 L46 56 L36 56 Z'),
  'Peasant top': top({ neck: 'drawstring', sleeves: 'puff', accentNeck: false }) + acc('M50 30 Q60 38 70 30', 1.4) + acc('M51 34 L52 38 M56 36 L56 40 M64 36 L64 40 M69 34 L68 38', 1.2),
  'Peplum top': body('M48 26 L30 33 L36 52 L44 64 L76 64 L84 52 L90 33 L72 26 C68 34 52 34 48 26 Z') + accFill('M44 64 L28 84 Q60 90 92 84 L76 64 Z'),
  'Polo shirt': top({ neck: 'crew', accentNeck: false, sleeves: 'short' }) + ln('M60 32 L60 52', 1.4) + buttons(62, [40, 48]) + accFill('M58 32 L46 24 L44 42 Z M62 32 L74 24 L76 42 Z'),
  'Shirt': shirt() + accFill('M60 31 L46 24 L51 48 Z M60 31 L74 24 L69 48 Z'),
  'Sweater': tee('full') + rib(106) + acc('M48 26 C52 32 68 32 72 26', 2) + cuffs + ln('M46 50 Q50 54 46 58 Q50 62 46 66 M60 50 Q64 54 60 58 Q64 62 60 66 M74 50 Q78 54 74 58 Q78 62 74 66', 1, '#c9b8a5'),
  'Sweater vest': top({ neck: 'v', sleeves: 'none', accentNeck: false }) + acc('M72 26 L60 48 L48 26', 2.4) + rib(106) + both(acc('M30 33 Q30 46 32 52', 2.4)) + ln('M44 60 L52 68 L44 76 L52 84 L44 92 M68 60 L76 68 L68 76 L76 84 L68 92', 1, SOFT),
  'Sweatshirt': tee('full') + rib(106) + acc('M48 26 C52 34 68 34 72 26', 2.4) + cuffs,
  'T-shirt': tee() + acc('M48 26 C52 34 68 34 72 26', 2),
  'Tank top': body('M46 30 L40 30 Q38 46 34 52 L34 104 L86 104 L86 52 Q82 46 80 30 L74 30 C70 46 50 46 46 30 Z') + acc('M46 30 L40 30 Q38 46 34 52 M74 30 L80 30 Q82 46 86 52', 2.4),
  'Tube top': body('M34 44 Q60 38 86 44 L86 80 Q60 84 34 80 Z') + acc('M34 44 Q60 38 86 44 M34 80 Q60 84 86 80', 2),
  'Tunic': dress({ w: 56, ww: 20, hw: 24, h: 96, sleeves: 'three', neck: 'L60 34 L50 20' }) + acc('M50 20 L60 34 L70 20', 2) + dash('M50 100 L51 116 M70 100 L69 116'),
  'Turtleneck sweater': tee('full', 'high') + accFill('M48 14 C54 12 66 12 72 14 L72 26 C66 28 54 28 48 26 Z') + rib(106),
  'Twinset': sleeve('full', false) + body('M48 22 L30 33 L32 52 L32 100 L88 100 L88 52 L90 33 L72 22 Z') + body('M50 26 L40 30 L42 46 L44 76 L76 76 L78 46 L80 30 L70 26 C66 34 54 34 50 26 Z') + acc('M38 30 L38 100 M82 30 L82 100', 1.6),
  'Wrap top': top({ neck: 'surplice', sleeves: 'three', accentNeck: false }) + acc('M72 26 L40 76 M48 26 L68 60', 2.4) + accFill('M40 76 L28 86 L32 90 Z'),
  'Yoke top': top({ neck: 'crew', sleeves: 'short', accentNeck: false }) + accFill('M72 26 L88 44 L32 44 L48 26 C52 34 68 34 72 26 Z') + ln('M40 50 L38 70 M48 48 L47 70 M56 48 L56 70 M64 48 L64 70 M72 48 L73 70 M80 50 L82 70', 1.1)
};
