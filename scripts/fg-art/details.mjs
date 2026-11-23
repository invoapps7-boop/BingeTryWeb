import { INK, FILL, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, both, top, sleeve, buttons, shirt } from './base.mjs';
const panel = (extra = '') => body('M24 16 L96 16 L96 104 L24 104 Z') + extra;
const pantsMini = (extra = '') => body('M38 10 L82 10 L82 16 L38 16 Z') + body('M38 16 L40 110 L56 110 L60 44 L64 110 L80 110 L82 16 Z') + extra;
const skirtMini = (extra = '') => body('M44 16 L76 16 L76 22 L44 22 Z') + body('M44 22 L30 96 Q60 100 90 96 L76 22 Z') + extra;
const zig = (x0, x1, y, a = 3, n = 8) => { let d = 'M' + x0 + ' ' + y; const st = (x1 - x0) / n; for (let i = 1; i <= n; i++) d += ' L' + (x0 + st * i) + ' ' + (y + (i % 2 ? -a : a)); return d; };
const wave = (x0, x1, y, a = 3, n = 8) => { let d = 'M' + x0 + ' ' + y; const st = (x1 - x0) / n; for (let i = 0; i < n; i++) d += ' Q' + (x0 + st * i + st / 2) + ' ' + (y + (i % 2 ? -a : a) * 2) + ' ' + (x0 + st * (i + 1)) + ' ' + y; return d; };
export const detailArt = {
  'Appliqué': panel(accFill('M60 40 C50 28 34 40 46 54 L60 70 L74 54 C86 40 70 28 60 40 Z') + ln('M60 44 C52 34 40 42 48 52 L60 64 L72 52 C80 42 68 34 60 44', 1, ACC, 'none', ' stroke-dasharray="2 2"')),
  'Bias cut': panel(ln('M24 34 L96 34 M24 52 L96 52 M24 70 L96 70 M24 88 L96 88 M42 16 L42 104 M60 16 L60 104 M78 16 L78 104', .8, '#c9b8a5')) + acc('M30 98 L90 22', 3) + accFill('M70 24 L90 22 L88 42 Z') + txt(60, 116, '45° to the grain'),
  'Boning': body('M36 30 Q60 22 84 30 L80 92 L40 92 Z') + acc('M44 30 L44 92 M52 28 L53 92 M68 28 L67 92 M76 30 L76 92', 2.6),
  'Box pleat': skirtMini(accFill('M52 22 L48 96 L72 96 L68 22 Z') + acc('M52 22 L58 96 M68 22 L62 96', 1.4)),
  'Cuff': sleeve('cuffed', true) + body('M48 26 L30 33 L32 52 L34 106 L86 106 L88 52 L90 33 L72 26 C66 30 54 30 48 26 Z') + dot(12, 92, 1.6),
  'Dart': top({ neck: 'crew', sleeves: 'none', accentNeck: false }) + acc('M44 106 L46 74 L48 106 M72 106 L74 74 L76 106 M32 56 L48 60 L33 64', 2),
  'Distressed': pantsMini(acc('M44 60 L54 60 M45 63 L53 63 M44 66 L54 66 M66 80 L76 80 M67 83 L75 83', 1.4) + ln('M42 30 L42 50 M78 30 L78 50', 3, '#e8d9c6')),
  'Embroidery': panel(acc('M60 60 m-12 0 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M60 36 L60 48 M60 72 L60 84 M36 60 L48 60 M72 60 L84 60 M43 43 L51 51 M69 69 L77 77 M77 43 L69 51 M43 77 L51 69', 2) + dot(60, 60, 4, ACC)),
  'Epaulette': top({ neck: 'crew', sleeves: 'short', accentNeck: false }) + both(accFill('M34 30 L48 24 L50 28 L36 34 Z')) + both(dot(47, 27, 1.6)),
  'Facing': top({ neck: 'v', sleeves: 'none', accentNeck: false }) + accFill('M48 26 L60 48 L72 26 L80 30 L60 64 L40 30 Z') + txt(60, 116, 'inside view'),
  'Frill': panel(acc(wave(24, 96, 50, 2, 12), 2.2) + acc(wave(24, 96, 56, 2, 12), 1.2)),
  'Fringe': panel() + acc('M28 104 L28 116 M34 104 L34 116 M40 104 L40 116 M46 104 L46 116 M52 104 L52 116 M58 104 L58 116 M64 104 L64 116 M70 104 L70 116 M76 104 L76 116 M82 104 L82 116 M88 104 L88 116 M94 104 L94 116', 1.6),
  'Gathers': skirtMini(acc('M46 22 L44 34 M50 22 L49 36 M54 22 L54 34 M58 22 L58 36 M62 22 L62 34 M66 22 L66 36 M70 22 L71 34 M74 22 L76 36', 1.6)),
  'Godet': skirtMini(accFill('M52 60 L42 98 L62 98 Z')),
  'Gusset': pantsMini(accFill('M54 40 L60 34 L66 40 L60 50 Z')),
  'Hem': skirtMini(accFill('M30 90 Q60 94 90 90 L90 96 Q60 100 30 96 Z')),
  'Inseam': pantsMini(acc('M60 44 L56 110 M60 44 L64 110', 2.6)) + txt(98, 80, 'inseam', 7),
  'Interfacing': shirt('full') + accFill('M60 34 L48 22 L44 42 Z M60 34 L72 22 L76 42 Z') + ln('M50 26 L47 38 M70 26 L73 38', 1, ACC, 'none', ' stroke-dasharray="2 2"') + txt(60, 116, 'hidden layer inside collar'),
  'Knife pleat': skirtMini(acc('M48 22 L38 96 M53 22 L46 97 M58 22 L54 98 M63 22 L62 98 M68 22 L70 97 M73 22 L78 96', 1.4) + acc('M48 22 L50 30 M53 22 L55 30 M58 22 L60 30 M63 22 L65 30 M68 22 L70 30 M73 22 L75 30', 1.4)),
  'Lining': '<g opacity=".5">' + skirtMini() + '</g>' + accFill('M46 26 L34 90 Q60 94 86 90 L74 26 Z') + txt(60, 112, 'lining inside'),
  'Mirror work': panel(both(accFill('M44 46 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0') + accFill('M44 80 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0')) + accFill('M60 63 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0') + '<circle cx="60" cy="63" r="4.5" fill="#dfe6ea"/><circle cx="44" cy="46" r="3" fill="#dfe6ea"/><circle cx="76" cy="46" r="3" fill="#dfe6ea"/><circle cx="44" cy="80" r="3" fill="#dfe6ea"/><circle cx="76" cy="80" r="3" fill="#dfe6ea"/>'),
  'Patch pocket': shirt('full') + accFill('M38 44 L52 44 L52 60 L45 64 L38 60 Z'),
  'Pintuck': panel(acc('M44 16 L44 104 M50 16 L50 104 M56 16 L56 104 M64 16 L64 104 M70 16 L70 104 M76 16 L76 104', 1.2)),
  'Piping': panel(acc('M24 60 L96 60', 4) + ln('M24 60 L96 60', 1.2, '#ffffff')),
  'Placket': shirt('full') + accFill('M57 32 L63 32 L63 106 L57 106 Z') + buttons(60, [44, 58, 72, 86, 100]),
  'Pleat': skirtMini(accFill('M54 22 L48 96 L60 96 L60 22 Z') + acc('M60 22 L60 96', 2)),
  'Rise': pantsMini(acc('M60 10 L60 44', 2.6) + ln('M56 10 L64 10 M56 44 L64 44', 2, ACC)) + txt(100, 30, 'rise', 7),
  'Ruching': body('M36 24 L84 24 L80 104 L40 104 Z') + acc('M40 34 Q34 40 40 44 Q34 50 40 54 Q34 60 40 64 Q34 70 40 74 Q34 80 40 84 Q34 90 40 94 M80 34 Q86 40 80 44 Q86 50 80 54 Q86 60 80 64 Q86 70 80 74 Q86 80 80 84 Q86 90 80 94', 1.8) + ln('M42 40 Q60 46 78 40 M42 60 Q60 66 78 60 M42 80 Q60 86 78 80', .8, '#c9b8a5'),
  'Ruffle': skirtMini(acc(wave(30, 90, 96, 3, 10), 2.4) + acc(wave(28, 92, 104, 3, 10), 2.4)),
  'Selvedge': panel(ln('M30 16 L30 104', 3, '#2b4c7e') + acc('M28 16 L28 104', 2.2) + ln('M36 20 L90 20 M36 30 L90 30 M36 40 L90 40', .7, '#9fb0c8')) + txt(60, 116, 'finished edge'),
  'Sequins': panel([30, 44, 58, 72, 86].map((y, r) => [32, 44, 56, 68, 80, 92].map((x, c) => '<circle cx="' + (x + (r % 2 ? 6 : 0)) + '" cy="' + (y + 4) + '" r="4.6" fill="' + ((r + c) % 3 ? SOFT : ACC) + '" stroke="' + INK + '" stroke-width=".6"/>').join('')).join('')),
  'Slit': skirtMini(acc('M70 62 L76 96', 2.6) + '<path d="M70 62 L76 96 L80 96 Z" fill="#FFF9F0"/>'),
  'Smocking': panel(acc(zig(28, 92, 34, 3, 16), 1.4) + acc(zig(28, 92, 44, 3, 16), 1.4) + acc(zig(28, 92, 54, 3, 16), 1.4) + ln('M30 60 L28 104 M40 60 L39 104 M50 60 L50 104 M60 60 L60 104 M70 60 L70 104 M80 60 L81 104 M90 60 L92 104', 1, '#c9b8a5')),
  'Topstitching': pantsMini(ln('M42 18 L44 106 M78 18 L76 106 M42 22 Q48 26 50 18 M78 22 Q72 26 70 18', 1.4, ACC, 'none', ' stroke-dasharray="2.5 2"')),
  'Waistband': pantsMini(accFill('M38 8 L82 8 L82 18 L38 18 Z') + dot(60, 13, 1.8)),
  'Welt pocket': body('M48 24 L30 33 L32 52 L32 106 L88 106 L88 52 L90 33 L72 24 Z') + accFill('M38 76 L54 74 L54 78 L38 80 Z M66 74 L82 76 L82 80 L66 78 Z M70 46 L82 44 L82 47 L70 49 Z') + body('M60 60 L48 24 L40 30 L44 42 L38 44 Z M60 60 L72 24 L80 30 L76 42 L82 44 Z'),
  'Yoke': shirt('full') + accFill('M48 26 L30 33 L32 44 L88 44 L90 33 L72 26 C66 30 54 30 48 26 Z'),
  'Zip fly': pantsMini(accFill('M58 16 L66 16 L66 36 Q62 42 58 38 Z') + acc('M60 18 L60 38', 1.2))
};
