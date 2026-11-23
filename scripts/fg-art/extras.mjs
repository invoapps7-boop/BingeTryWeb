import { INK, FILL, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, both, top, sleeve } from './base.mjs';
const sole = (y = 84) => acc('M12 ' + y + ' L108 ' + y, 3);
export const extraArt = {
  'Ballet flats': body('M14 78 Q14 64 30 62 L70 60 Q96 60 104 72 Q108 80 98 82 L22 82 Q14 82 14 78 Z') + acc('M30 66 Q50 72 70 64', 2) + accFill('M66 62 L74 58 L76 64 Z') + sole(84),
  'Mary Janes': body('M14 78 Q14 62 30 60 L72 58 Q98 60 104 72 Q108 80 98 82 L22 82 Q14 82 14 78 Z') + accFill('M44 58 L52 58 L56 80 L48 80 Z') + dot(52, 66, 2) + acc('M84 82 L84 92', 4) + sole(84),
  'Oxfords': body('M12 80 Q12 62 30 60 L60 56 Q92 56 106 70 Q110 80 100 82 L20 82 Q12 82 12 80 Z') + acc('M46 58 L70 56 L70 66 L46 68 Z', 2) + ln('M50 60 L66 59 M50 63 L66 62', 1.2, ACC) + txt(60, 104, 'closed lacing'),
  'Derby shoes': body('M12 80 Q12 62 30 60 L60 56 Q92 56 106 70 Q110 80 100 82 L20 82 Q12 82 12 80 Z') + accFill('M44 58 L56 54 L74 58 L70 70 L50 70 Z') + ln('M52 60 L68 60 M52 64 L68 64', 1.2, INK) + txt(60, 104, 'open lacing'),
  'Kolhapuris': body('M20 90 Q14 60 30 40 Q50 24 70 40 Q86 60 80 90 Z') + acc('M32 56 Q50 46 68 56 M30 64 Q50 56 70 64', 3) + ln('M50 40 L50 50', 2, ACC) + '<circle cx="50" cy="38" r="4" fill="none" stroke="' + ACC + '" stroke-width="2"/>',
  'Baguette bag': body('M18 56 Q18 48 28 48 L92 48 Q102 48 102 56 L102 74 Q102 80 92 80 L28 80 Q18 80 18 74 Z') + acc('M30 48 Q60 22 90 48', 3) + accFill('M54 56 L66 56 L66 66 L54 66 Z'),
  'Belt bag': both(acc('M6 58 Q30 54 40 60', 3)) + body('M34 52 Q60 44 86 52 L84 80 Q60 88 36 80 Z') + acc('M40 60 Q60 54 80 60', 1.6),
  'Satchel': body('M22 44 L98 44 L98 102 L22 102 Z') + accFill('M22 44 L98 44 L98 76 Q60 84 22 76 Z') + accFill('M54 70 L66 70 L66 82 L54 82 Z') + acc('M34 44 Q60 14 86 44', 3),
  'Potli': body('M40 40 Q20 70 34 96 Q60 108 86 96 Q100 70 80 40 Z') + acc('M40 40 Q60 48 80 40', 3) + acc('M46 42 L40 26 M74 42 L80 26', 2) + dot(50, 72, 2.4, SOFT) + dot(62, 80, 2.4, SOFT) + dot(70, 66, 2.4, SOFT),
  'Choker': '<circle cx="60" cy="40" r="28" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' + body('M38 64 Q60 78 82 64 L92 112 L28 112 Z') + acc('M36 60 Q60 72 84 60', 5),
  'Layered necklaces': '<circle cx="60" cy="30" r="22" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' + body('M40 48 Q60 58 80 48 L96 114 L24 114 Z') + acc('M42 52 Q60 66 78 52', 1.8) + acc('M40 54 Q60 80 80 54', 1.8) + acc('M38 56 Q60 96 82 56', 1.8) + dot(60, 95, 3, ACC),
  'French tuck': top({ neck: 'crew', sleeves: 'short', accentNeck: false }).replace('L34 106 L86 106', 'L34 76 L86 76') + body('M34 70 L86 70 L86 76 L34 76 Z') + body('M34 76 L32 112 L56 112 L60 90 L64 112 L88 112 L86 76 Z') + accFill('M40 60 Q52 74 64 72 L64 78 L40 78 Z') + acc('M64 72 Q74 76 86 72 L86 90 Q74 94 64 88', 2),
  'Rule of thirds': '<rect x="40" y="10" width="40" height="100" rx="6" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/><rect x="40" y="10" width="40" height="34" fill="' + SOFT + '" stroke="' + INK + '" stroke-width="2"/>' + dash('M28 44 L92 44 M28 77 L92 77') + txt(104, 30, '1/3', 8) + txt(104, 80, '2/3', 8),
  'Proportion': '<rect x="38" y="14" width="44" height="30" rx="5" fill="' + SOFT + '" stroke="' + INK + '" stroke-width="2"/>' + body('M40 44 L80 44 L96 112 L64 112 L60 70 L56 112 L24 112 Z') + acc('M38 44 L82 44', 3),
  'Dress code': txt(60, 30, 'casual', 7) + txt(60, 58, 'smart casual', 7) + txt(60, 86, 'black tie', 7) + acc('M20 36 L100 36', 2) + acc('M20 64 L100 64', 3) + acc('M20 92 L100 92', 4) + txt(60, 112, 'more formal ↓', 6),
  'White tie': top({ neck: 'v', sleeves: 'full', accentNeck: false }).replace(/#FFF2DC/g, '#2a221c') + body('M50 26 L60 50 L70 26 Z') + accFill('M54 28 L60 24 L66 28 L60 32 Z') + ln('M34 70 L28 112 M86 70 L92 112', 2) + txt(60, 118, 'tailcoat + white bow tie', 6),
  'Black tie': top({ neck: 'v', sleeves: 'full', accentNeck: false }).replace(/#FFF2DC/g, '#2a221c') + body('M50 26 L60 54 L70 26 Z') + '<path d="M54 30 L60 34 L66 30 L66 36 L60 34 L54 36 Z" fill="#000" stroke="' + ACC + '" stroke-width="1.5"/>' + txt(60, 118, 'tuxedo + black bow tie', 6)
};
