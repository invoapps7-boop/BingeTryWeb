import { INK, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, buttons } from './base.mjs';
const sk = (inner, extra = '') => body('M44 16 L76 16 L76 22 L44 22 Z') + inner + extra;
const skA = (h, hw) => body('M44 22 L' + (60 - hw) + ' ' + h + ' Q60 ' + (h + 4) + ' ' + (60 + hw) + ' ' + h + ' L76 22 Z');
export const skirtArt = {
  'A-line skirt': sk(skA(96, 30)) + acc('M44 22 L30 96 M76 22 L90 96', 2),
  'Bubble skirt': sk(body('M44 22 C24 40 20 70 40 80 Q60 86 80 80 C100 70 96 40 76 22 Z')) + acc('M40 80 Q60 86 80 80 M40 80 Q36 76 40 72 M80 80 Q84 76 80 72', 2),
  'Button-front skirt': sk(skA(92, 26)) + ln('M60 22 L60 92', 1.4) + buttons(63, [32, 44, 56, 68, 80], ACC),
  'Circle skirt': sk(body('M44 22 C30 40 10 70 8 84 Q60 98 112 84 C110 70 90 40 76 22 Z')) + acc('M8 84 Q60 98 112 84', 2.5) + ln('M48 26 L30 88 M60 24 L60 92 M72 26 L90 88', 1, '#c9b8a5'),
  'Denim skirt': sk(skA(70, 24)) + ln('M46 30 Q52 34 54 28 M74 30 Q68 34 66 28 M60 22 L60 70', 1.2, ACC) + ln('M38 66 L82 66', 1, ACC, 'none', ' stroke-dasharray="2 2"'),
  'Flared skirt': sk(body('M44 22 C36 40 20 62 18 76 Q60 86 102 76 C100 62 84 40 76 22 Z')) + acc('M18 76 Q60 86 102 76', 2.5),
  'Gathered skirt': sk(skA(92, 30)) + acc('M46 22 L44 30 M50 22 L49 32 M54 22 L54 30 M58 22 L58 32 M62 22 L62 30 M66 22 L66 32 M70 22 L71 30 M74 22 L76 32', 1.4),
  'Godet skirt': sk(body('M44 22 L42 74 L28 100 Q60 106 92 100 L78 74 L76 22 Z')) + accFill('M42 74 L34 101 L50 102 Z M78 74 L86 101 L70 102 Z'),
  'Lehenga': sk(body('M44 22 C30 50 14 90 12 108 Q60 116 108 108 C106 90 90 50 76 22 Z')) + accFill('M13 100 Q60 108 107 100 L108 108 Q60 116 12 108 Z') + dot(40, 60, 2, SOFT) + dot(60, 70, 2, SOFT) + dot(80, 60, 2, SOFT) + dot(50, 88, 2, SOFT) + dot(72, 90, 2, SOFT),
  'Maxi skirt': sk(skA(112, 30)) + acc('M26 112 L94 112', 2.5),
  'Midi skirt': sk(skA(92, 26)) + dash('M30 76 L90 76') + acc('M30 92 L90 92', 2.5) + txt(104, 78, 'knee', 6),
  'Mini skirt': sk(skA(52, 22)) + acc('M34 52 L86 52', 2.5),
  'Paneled skirt': sk(skA(94, 30)) + acc('M52 22 L42 96 M60 22 L60 98 M68 22 L78 96', 1.6),
  'Pencil skirt': sk(body('M44 22 Q40 44 44 92 L76 92 Q80 44 76 22 Z')) + acc('M44 92 L76 92 M60 80 L60 92', 2.2),
  'Pleated skirt': sk(skA(80, 30)) + acc('M48 22 L36 82 M54 22 L48 83 M60 22 L60 84 M66 22 L72 83 M72 22 L84 82', 1.4),
  'Ruffled skirt': sk(skA(90, 28)) + acc('M30 70 Q34 76 38 70 Q42 76 46 70 Q50 76 54 70 Q58 76 62 70 Q66 76 70 70 Q74 76 78 70 Q82 76 86 70 M28 92 Q32 98 36 92 Q40 98 44 92 Q48 98 52 92 Q56 98 60 92 Q64 98 68 92 Q72 98 76 92 Q80 98 84 92 Q88 98 92 92', 1.6),
  'Sarong': body('M40 22 L80 22 L86 100 L34 100 Z') + acc('M40 22 L70 100 M80 22 L74 40', 2) + accFill('M76 22 Q86 30 80 36 Q74 30 76 22 Z'),
  'Skater skirt': sk(body('M44 22 C34 32 18 44 16 54 Q60 64 104 54 C102 44 86 32 76 22 Z')) + acc('M16 54 Q60 64 104 54', 2.5),
  'Skort': sk(skA(56, 22)) + dash('M60 22 L60 50 M46 56 L58 50 M74 56 L62 50') + txt(60, 72, 'shorts inside', 6),
  'Slip skirt': sk(body('M44 22 Q40 50 38 94 Q60 98 82 94 Q80 50 76 22 Z')) + acc('M48 30 Q46 60 44 92 M70 34 Q72 60 74 92', 1.2),
  'Straight skirt': sk(body('M44 22 L42 90 L78 90 L76 22 Z')) + acc('M42 36 L42 90 M78 36 L78 90', 2),
  'Tiered skirt': sk(skA(100, 34)) + acc('M38 52 Q60 56 82 52 M32 76 Q60 80 88 76', 2),
  'Tulip skirt': sk(body('M44 22 C30 40 34 66 46 84 L74 84 C86 66 90 40 76 22 Z')) + acc('M44 22 C46 50 60 70 74 84 M76 22 C74 50 60 70 46 84', 2),
  'Tulle skirt': sk(body('M44 22 C28 46 14 76 14 94 Q60 104 106 94 C106 76 92 46 76 22 Z')) + ln('M22 88 Q60 96 98 88 M30 76 Q60 84 90 76', 1, ACC) + ln('M50 26 L30 92 M60 24 L60 98 M70 26 L90 92', .8, SOFT),
  'Wrap skirt': sk(skA(92, 28)) + acc('M76 22 L50 94', 2.4) + accFill('M74 24 Q82 32 78 38 Q72 32 74 24 Z')
};
const leg = (ko, ki, ho, hi, h, crotch = 44) => { crotch = Math.min(crotch, h - 14); const k = h < 84 ? Math.round((crotch + h) / 2) : 72; return 'M38 16 L' + (60 - ko) + ' ' + k + ' L' + (60 - ho) + ' ' + h + ' L' + (60 - hi) + ' ' + h + ' L' + (60 - ki) + ' ' + k + ' L60 ' + crotch + ' L' + (60 + ki) + ' ' + k + ' L' + (60 + hi) + ' ' + h + ' L' + (60 + ho) + ' ' + h + ' L' + (60 + ko) + ' ' + k + ' L82 16 Z'; };
const pants = (ko, ki, ho, hi, h, extra = '', o = {}) => '<g transform="translate(0 ' + (o.dy || 0) + ')">' + body('M38 10 L82 10 L82 16 L38 16 Z') + body(leg(ko, ki, ho, hi, h, o.crotch)) + (o.fly === false ? '' : ln('M60 16 L60 30', 1.2)) + extra + '</g>';
const hems = (ho, hi, h) => acc('M' + (60 - ho) + ' ' + h + ' L' + (60 - hi) + ' ' + h + ' M' + (60 + hi) + ' ' + h + ' L' + (60 + ho) + ' ' + h, 2.5);
const outline = (ko, ho, h) => acc('M38 16 L' + (60 - ko) + ' 72 L' + (60 - ho) + ' ' + h + ' M82 16 L' + (60 + ko) + ' 72 L' + (60 + ho) + ' ' + h, 2);
const jd = ln('M42 22 Q48 26 50 18 M78 22 Q72 26 70 18', 1.2, ACC);
const rise = dy => dash('M14 20 L96 20') + txt(106, 22, 'waist', 6) + pants(21, 3, 20, 4, 110 - dy, acc('M38 10 L82 10', 2.5), { dy });
const cuff = (y, ho, hi) => accFill('M' + (60 - ho) + ' ' + y + ' L' + (60 - ho) + ' ' + (y + 6) + ' L' + (60 - hi) + ' ' + (y + 6) + ' L' + (60 - hi) + ' ' + y + ' Z M' + (60 + hi) + ' ' + y + ' L' + (60 + hi) + ' ' + (y + 6) + ' L' + (60 + ho) + ' ' + (y + 6) + ' L' + (60 + ho) + ' ' + y + ' Z');
export const bottomArt = {
  'Baggy jeans': pants(25, 1, 25, 1, 112, jd + outline(25, 25, 112)),
  'Barrel-leg jeans': body('M38 10 L82 10 L82 16 L38 16 Z') + body('M38 16 Q24 64 44 110 L56 110 Q60 70 60 44 Q60 70 64 110 L76 110 Q96 64 82 16 Z') + acc('M38 16 Q24 64 44 110 M82 16 Q96 64 76 110', 2) + jd,
  'Bell-bottoms': pants(17, 6, 30, 0, 110, outline(17, 30, 110)),
  'Bermuda shorts': pants(21, 3, 20, 4, 68) + hems(20, 4, 68), 'Bike shorts': pants(17, 6, 16, 6, 56) + hems(16, 6, 56),
  'Bootcut': pants(19, 5, 23, 3, 110, outline(19, 23, 110)),
  'Boyfriend jeans': pants(22, 2, 21, 3, 104, jd) + cuff(98, 21, 3),
  'Capri pants': pants(18, 5, 16, 6, 90) + hems(16, 6, 90),
  'Cargo pants': pants(22, 2, 21, 3, 110, accFill('M34 56 L44 56 L44 72 L34 72 Z M76 56 L86 56 L86 72 L76 72 Z')),
  'Carrot pants': pants(22, 2, 13, 8, 108, acc('M46 16 L46 34 M52 16 L52 30 M74 16 L74 34 M68 16 L68 30', 1.6) + outline(22, 13, 108)),
  'Chinos': pants(20, 4, 17, 6, 108, acc('M40 18 L46 30 M80 18 L74 30', 1.6)),
  'Cigarette pants': pants(18, 6, 17, 7, 100, acc('M51 20 L51 100 M69 20 L69 100', 1.2) + hems(17, 7, 100)),
  'Culottes': pants(26, 0, 30, 0, 84) + hems(30, 0, 84),
  'Denim cutoffs': pants(21, 3, 22, 2, 46, jd + acc('M40 46 L40 50 M44 46 L45 51 M48 46 L48 50 M52 46 L53 51 M56 46 L56 50 M64 46 L64 50 M68 46 L67 51 M72 46 L72 50 M76 46 L75 51 M80 46 L80 50', 1.1)),
  'Dhoti pants': body('M38 10 L82 10 L82 16 L38 16 Z') + body('M38 16 C26 50 34 80 46 108 L56 108 Q58 90 60 76 Q62 90 64 108 L74 108 C86 80 94 50 82 16 Z') + acc('M44 20 Q56 50 58 76 M76 20 Q64 50 62 76 M50 22 Q58 48 60 70', 1.4),
  'Flared jeans': pants(18, 5, 26, 1, 110, jd + outline(18, 26, 110)),
  'Harem pants': body('M38 10 L82 10 L82 16 L38 16 Z') + body('M38 16 C24 50 34 92 46 102 L46 110 L56 110 L56 102 Q60 90 60 84 Q60 90 64 102 L64 110 L74 110 L74 102 C86 92 96 50 82 16 Z') + accFill('M46 102 L46 110 L56 110 L56 102 Z M64 102 L64 110 L74 110 L74 102 Z') + dash('M50 82 Q60 88 70 82'),
  'High-waisted': rise(0), 'Low-rise': rise(24), 'Mid-rise': rise(12),
  'Joggers': pants(21, 3, 15, 7, 104, acc('M56 10 L54 22 M64 10 L66 22', 1.4)) + cuff(104, 15, 7),
  'Leggings': pants(15, 7, 12, 8, 112) + acc('M45 16 L48 112 M75 16 L72 112', 1.6),
  'Mom jeans': pants(22, 2, 17, 6, 106, jd + acc('M38 10 L82 10', 2.5)),
  'Palazzo pants': pants(26, 0, 32, 0, 112, outline(26, 32, 112)),
  'Paperbag waist': pants(21, 3, 18, 5, 110, accFill('M38 3 Q42 9 46 3 Q50 9 54 3 Q58 9 62 3 Q66 9 70 3 Q74 9 78 3 Q82 9 82 10 L38 10 Z') + acc('M36 13 L84 13 M60 13 L54 26 M60 13 L66 26', 2), { fly: false }),
  'Pegged pants': pants(23, 1, 13, 8, 106, outline(23, 13, 106) + acc('M48 16 L48 30 M72 16 L72 30', 1.4)),
  'Pleated trousers': pants(21, 3, 19, 4, 110, acc('M46 16 L46 36 M51 16 L51 30 M74 16 L74 36 M69 16 L69 30', 1.8)),
  'Skinny jeans': pants(16, 6, 13, 8, 110, jd + outline(16, 13, 110)),
  'Straight-leg': pants(20, 4, 20, 4, 110, outline(20, 20, 110)),
  'Sweatpants': pants(22, 2, 18, 5, 104, acc('M56 10 L54 22 M64 10 L66 22', 1.4)) + cuff(104, 18, 5),
  'Tapered': pants(21, 3, 14, 7, 108, outline(21, 14, 108)),
  'Wide-leg': pants(25, 0, 28, 0, 110, outline(25, 28, 110)),
  'Cargo shorts': pants(22, 2, 22, 2, 64, accFill('M33 42 L43 42 L43 56 L33 56 Z M77 42 L87 42 L87 56 L77 56 Z')),
  'Pleated shorts': pants(21, 3, 21, 3, 58, acc('M46 16 L46 34 M74 16 L74 34', 1.8)),
  'Shorts': pants(21, 3, 22, 2, 56) + hems(22, 2, 56),
  'Zouave pants': body('M38 10 L82 10 L82 16 L38 16 Z') + body('M38 16 C14 50 24 90 42 102 L42 110 L54 110 L54 102 C58 90 60 70 60 52 C60 70 62 90 66 102 L66 110 L78 110 L78 102 C96 90 106 50 82 16 Z') + acc('M38 16 C14 50 24 90 42 102 M82 16 C106 50 96 90 78 102', 2)
};
