import { INK, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, both, top, sleeve, buttons, shirt, dress } from './base.mjs';
const coat = (h = 108, sl = 'full', extra = '') => sleeve(sl, false) + body('M48 22 L30 31 L32 52 L32 ' + h + ' L88 ' + h + ' L88 52 L90 31 L72 22 Z') + extra;
const notch = body('M60 60 L48 22 L40 28 L44 40 L38 42 Z M60 60 L72 22 L80 28 L76 40 L82 42 Z');
const hood = accFill('M44 24 C36 4 84 4 76 24 C68 18 52 18 44 24 Z');
const cuffs = both(accFill('M7 90 L6 96 L15 98 L16 92 Z'));
export const onepieceArt = {
  'Boilersuit': both(body('M30 30 L8 92 L17 94 L34 50')) + body('M46 22 L30 30 L34 50 L34 66 L38 112 L56 112 L60 74 L64 112 L82 112 L86 66 L86 50 L90 30 L74 22 L60 34 Z') + acc('M60 34 L60 74', 2) + acc('M34 56 L86 56', 2) + accFill('M40 36 L50 36 L50 44 L40 44 Z'),
  'Catsuit': both(body('M38 28 L20 82 L27 84 L40 46')) + body('M50 20 L38 28 L40 46 L42 58 L44 112 L56 112 L60 70 L64 112 L76 112 L78 58 L80 46 L82 28 L70 20 C66 26 54 26 50 20 Z') + acc('M42 58 L44 112 M78 58 L76 112', 2),
  'Dungarees': top({ neck: 'crew', sleeves: 'short', accentNeck: false }) + accFill('M46 22 L74 22 L74 42 L82 42 L86 112 L64 112 L60 76 L56 112 L34 112 L38 42 L46 42 Z') + acc('M46 22 L42 8 M74 22 L78 8', 2.5) + dot(48, 25, 2) + dot(72, 25, 2) + accFill('M52 28 L68 28 L68 38 L52 38 Z'),
  'Jumpsuit': dress({ w: 52, ww: 14, sleeves: 'short', skirt: ' L40 112 L56 112 L60 74 L64 112 L80 112 L74 52' }) + acc('M46 52 L74 52', 2) + acc('M40 112 L56 112 M64 112 L80 112', 2.5),
  'Pinafore jumpsuit': top({ neck: 'crew', sleeves: 'full', accentNeck: false }) + accFill('M48 22 L48 42 L40 44 L36 112 L56 112 L60 76 L64 112 L84 112 L80 44 L72 42 L72 22 L66 22 L66 38 L54 38 L54 22 Z'),
  'Playsuit': dress({ w: 50, ww: 14, sleeves: 'puff', skirt: ' L38 74 L56 74 L60 64 L64 74 L82 74 L74 50' }) + acc('M38 74 L56 74 M64 74 L82 74', 2.5),
  'Romper': dress({ w: 52, ww: 16, sleeves: 'short', skirt: ' L36 76 L56 76 L60 66 L64 76 L84 76 L76 52' }) + acc('M44 52 L76 52', 2) + acc('M36 76 L56 76 M64 76 L84 76', 2.5),
  'Unitard': body('M50 20 L42 28 L42 58 L44 112 L56 112 L60 70 L64 112 L76 112 L78 58 L78 28 L70 20 C66 30 54 30 50 20 Z') + acc('M42 28 L42 58 L44 112 M78 28 L78 58 L76 112', 2)
};
export const outerArt = {
  'Anorak': sleeve('full', false) + body('M48 26 L30 33 L32 52 L34 100 L86 100 L88 52 L90 33 L72 26 Z') + hood + acc('M60 26 L60 52', 2.4) + accFill('M44 62 L76 62 L78 82 L42 82 Z'),
  'Biker jacket': coat(84, 'full', accFill('M60 52 L46 22 L38 30 L44 42 Z M60 52 L74 22 L82 30 L76 42 Z') + acc('M66 30 L54 84', 2.4) + acc('M38 60 L48 56 M72 60 L82 56', 1.6)),
  'Blazer': coat(104, 'full', notch + ln('M60 60 L60 104', 1.4) + buttons(63, [70, 82], ACC) + acc('M38 76 L50 76 M70 76 L82 76 M72 46 L80 46', 1.6)),
  'Blouson': coat(76, 'full', accFill('M32 70 L88 70 L88 78 L32 78 Z') + acc('M60 26 L60 70', 2)),
  'Bolero': top({ neck: 'crew', sleeves: 'full', accentNeck: false }) + accFill('M48 26 L30 33 L32 52 L36 62 Q48 60 52 40 L48 26 Z M72 26 L90 33 L88 52 L84 62 Q72 60 68 40 L72 26 Z'),
  'Bomber jacket': coat(88, 'full', accFill('M48 22 L72 22 L72 28 L48 28 Z M32 88 L88 88 L88 94 L32 94 Z') + acc('M60 28 L60 88', 2) + cuffs + ln('M40 50 L48 46', 1.6, ACC)),
  'Cape': body('M50 20 L30 40 L14 104 Q60 112 106 104 L90 40 L70 20 C66 26 54 26 50 20 Z') + acc('M14 104 Q60 112 106 104', 2.4) + acc('M60 26 L60 108', 1.4) + accFill('M50 20 L60 30 L70 20 Z'),
  'Car coat': dash('M44 92 L44 114 M76 92 L76 114') + coat(92, 'full', notch + ln('M60 60 L60 92', 1.4) + buttons(63, [68, 80]) + acc('M32 92 L88 92', 2.5)),
  'Chore jacket': coat(96, 'full', accFill('M40 40 L52 40 L52 52 L40 52 Z M38 64 L52 64 L52 78 L38 78 Z M68 64 L82 64 L82 78 L68 78 Z') + ln('M60 28 L60 96', 1.4) + buttons(63, [40, 54, 68, 82]) + accFill('M60 30 L48 20 L44 32 Z M60 30 L72 20 L76 32 Z')),
  'Coat': coat(108, 'full', notch + ln('M60 60 L60 108', 1.4) + buttons(63, [70, 84, 98])) + acc('M32 108 L88 108', 2.5),
  'Denim jacket': coat(84, 'full', accFill('M60 30 L48 20 L44 32 Z M60 30 L72 20 L76 32 Z') + ln('M60 30 L60 84', 1.4) + buttons(63, [40, 52, 64, 76], ACC) + accFill('M40 42 L52 42 L52 52 L40 52 Z M68 42 L80 42 L80 52 L68 52 Z') + acc('M32 78 L88 78', 1.2)),
  'Double-breasted': coat(100, 'full', body('M64 60 L48 22 L40 28 L44 40 L38 42 Z M64 60 L72 22 L80 28 L76 40 L82 42 Z') + ln('M64 60 L64 100', 1.4) + buttons(52, [70, 84], ACC) + buttons(74, [70, 84], ACC)),
  'Duffle coat': coat(104, 'full', hood + ln('M60 26 L60 104', 1.4) + acc('M53 44 L67 44 M53 60 L67 60 M53 76 L67 76', 3.4)),
  'Gilet': top({ neck: 'crew', sleeves: 'full', accentNeck: false }) + accFill('M48 22 L34 30 Q36 44 32 52 L32 96 L88 96 L88 52 Q84 44 86 30 L72 22 L60 30 Z') + acc('M60 30 L60 96', 1.6) + ln('M32 50 L88 50 M32 66 L88 66 M32 82 L88 82', 1, ACC),
  'Jacket': coat(88, 'full', notch + ln('M60 60 L60 88', 1.4) + buttons(63, [70, 80])) + acc('M32 88 L88 88', 2.4),
  'Overcoat': coat(112, 'full', notch + ln('M60 60 L60 112', 1.4) + buttons(63, [70, 84, 98])) + acc('M32 112 L88 112', 2.5) + acc('M32 52 L32 112 M88 52 L88 112', 1.6),
  'Overlay': top({ neck: 'v', sleeves: 'none', accentNeck: false }) + both(accFill('M48 24 L28 32 L8 70 L18 74 L32 52 L30 112 L54 112 L52 40 Z')),
  'Overshirt': shirt('full') + accFill('M60 32 L48 20 L44 34 Z M60 32 L72 20 L76 34 Z') + accFill('M38 44 L50 44 L50 56 L38 56 Z M70 44 L82 44 L82 56 L70 56 Z'),
  'Parka': coat(110, 'full', hood + acc('M44 24 C40 12 46 6 60 6 C74 6 80 12 76 24', 3.4) + ln('M60 26 L60 110', 1.4) + accFill('M38 70 L52 70 L52 84 L38 84 Z M68 70 L82 70 L82 84 L68 84 Z') + acc('M36 56 Q60 62 84 56', 1.4)),
  'Pea coat': coat(90, 'full', accFill('M64 56 L48 22 L36 26 L42 44 Z M64 56 L72 22 L84 26 L78 44 Z') + buttons(52, [64, 76]) + buttons(74, [64, 76]) + acc('M32 90 L88 90', 2.4)),
  'Poncho': body('M50 20 L8 70 L60 104 L112 70 L70 20 C66 26 54 26 50 20 Z') + acc('M8 70 L60 104 L112 70', 2.4) + acc('M12 72 L10 78 M18 76 L16 82 M24 80 L22 86 M96 80 L98 86 M102 76 L104 82 M108 72 L110 78', 1.4),
  'Puffer jacket': coat(92, 'full', ln('M60 24 L60 92', 1.4)) + acc('M32 40 Q46 44 60 40 Q74 44 88 40 M32 56 Q46 60 60 56 Q74 60 88 56 M32 72 Q46 76 60 72 Q74 76 88 72', 2) + both(acc('M10 60 L30 62 M8 76 L31 78', 1.6)) + accFill('M48 22 L72 22 L72 14 Q60 10 48 14 Z'),
  'Quilted jacket': coat(90, 'full', ln('M60 24 L60 90', 1.4)) + acc('M34 34 L86 86 M34 54 L70 90 M34 74 L50 90 M50 30 L86 66 M70 28 L86 44 M86 34 L34 86 M86 54 L50 90 M86 74 L70 90 M70 30 L34 66 M50 28 L34 44', 1),
  'Shrug': top({ neck: 'crew', sleeves: 'none', accentNeck: false }) + accFill('M48 24 L30 33 L8 92 L17 94 L32 52 Q40 48 46 38 Q54 32 60 34 Q66 32 74 38 Q80 48 88 52 L103 94 L112 92 L90 33 L72 24 Q60 30 48 24 Z'),
  'Single-breasted': coat(100, 'full', notch + ln('M60 60 L60 100', 1.4) + buttons(63, [72, 86], ACC)),
  'Trench coat': coat(110, 'full', accFill('M64 56 L48 22 L36 26 L42 44 Z M64 56 L72 22 L84 26 L78 44 Z') + buttons(52, [64, 78]) + buttons(74, [64, 78]) + accFill('M32 56 L88 56 L88 62 L32 62 Z') + acc('M60 62 L54 74 M60 62 L66 72', 1.6)),
  'Varsity jacket': both(accFill('M30 31 L8 90 L17 92 L32 52')) + body('M48 22 L30 31 L32 52 L32 88 L88 88 L88 52 L90 31 L72 22 Z') + accFill('M48 22 L72 22 L60 36 Z M32 82 L88 82 L88 88 L32 88 Z') + ln('M60 36 L60 82', 1.4) + buttons(63, [44, 56, 68]) + txt(46, 58, 'S', 12),
  'Waistcoat': shirt('full') + accFill('M48 26 L38 32 Q40 46 36 52 L36 92 L56 100 L60 92 L64 100 L84 92 L84 52 Q80 46 82 32 L72 26 L60 60 Z') + buttons(60, [66, 74, 82]),
  'Windbreaker': coat(92, 'full', accFill('M32 52 L88 52 L88 66 L32 66 Z') + acc('M60 22 L60 92', 2) + accFill('M48 22 L72 22 L72 14 Q60 10 48 14 Z'))
};
