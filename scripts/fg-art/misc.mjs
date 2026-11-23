import { INK, FILL, ACC, SOFT, ln, body, acc, accFill, dash, dot, txt, both } from './base.mjs';
// Print swatches: a rounded square filled with an SVG pattern (ids are unique per term).
const sw = (id, w, h, cells, bg = '#FFF2DC') => '<defs><pattern id="' + id + '" width="' + w + '" height="' + h + '" patternUnits="userSpaceOnUse"><rect width="' + w + '" height="' + h + '" fill="' + bg + '"/>' + cells + '</pattern></defs><rect x="14" y="14" width="92" height="92" rx="10" fill="url(#' + id + ')" stroke="' + INK + '" stroke-width="2"/>';
const R = (x, y, w, h, f, o = 1) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '" opacity="' + o + '"/>';
const C = (x, y, r, f) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"/>';
const P = (d, f, s = 'none', w = 0) => '<path d="' + d + '" fill="' + f + '" stroke="' + s + '" stroke-width="' + w + '"/>';
const NAVY = '#2b3a55', RED = '#c8463d', GREEN = '#4f6b3a', BLUE = '#3f6fb5', BROWN = '#7a5434';
export const printArt = {
  'Argyle': sw('pa-arg', 24, 32, P('M12 0 L24 16 L12 32 L0 16 Z', ACC) + P('M0 0 L24 32 M24 0 L0 32', 'none', INK, .8), SOFT),
  'Breton stripe': sw('pa-bre', 10, 10, R(0, 0, 10, 4, NAVY), '#ffffff'),
  'Camouflage': sw('pa-cam', 40, 40, P('M0 6 Q10 0 18 8 Q22 18 10 18 Q0 16 0 6Z', '#5d6b3c') + P('M22 22 Q34 16 40 26 Q38 38 28 36 Q20 32 22 22Z', '#3d4a2a') + P('M4 26 Q12 22 16 30 Q12 40 4 36Z', '#8a7a52') + P('M26 2 Q36 0 36 10 Q30 14 26 8Z', '#8a7a52'), '#a3a177'),
  'Chevron': sw('pa-che', 20, 14, P('M0 10 L10 2 L20 10 L20 14 L10 6 L0 14 Z', ACC)),
  'Color block': '<defs><clipPath id="cb-clip"><rect x="14" y="14" width="92" height="92" rx="10"/></clipPath></defs><g clip-path="url(#cb-clip)">' + R(14, 14, 46, 46, ACC) + R(60, 14, 46, 46, NAVY) + R(14, 60, 46, 46, '#f3c13a') + R(60, 60, 46, 46, '#e7d9c4') + '</g><rect x="14" y="14" width="92" height="92" rx="10" fill="none" stroke="' + INK + '" stroke-width="2"/>',
  'Ditsy print': sw('pa-dit', 18, 18, C(4, 4, 1.6, ACC) + C(13, 11, 1.6, RED) + C(6, 14, 1.2, GREEN) + C(15, 3, 1.2, GREEN), '#fff9f0'),
  'Floral print': sw('pa-flo', 36, 36, [0, 72, 144, 216, 288].map(a => '<ellipse cx="18" cy="11" rx="4" ry="7" fill="' + ACC + '" transform="rotate(' + a + ' 18 18)"/>').join('') + C(18, 18, 3.5, '#f3c13a') + P('M30 30 Q34 26 36 32 Q32 34 30 30Z', GREEN), '#fff9f0'),
  'Gingham': sw('pa-gin', 16, 16, R(0, 0, 8, 16, RED, .45) + R(0, 0, 16, 8, RED, .45), '#ffffff'),
  'Herringbone': sw('pa-her', 16, 16, P('M0 0 L8 8 M8 8 L0 16 M8 0 L16 8 M16 8 L8 16', 'none', BROWN, 2), '#d9c7ad'),
  'Houndstooth': sw('pa-hou', 16, 16, P('M0 0 L8 0 L8 4 L12 0 L16 0 L8 8 L8 12 L4 16 L0 16 L0 12 L4 8 L0 8 Z', INK), '#ffffff'),
  'Madras check': sw('pa-mad', 30, 30, R(0, 0, 10, 30, '#e04f5f', .55) + R(0, 0, 30, 10, '#3f8fd2', .55) + R(18, 0, 4, 30, '#f3c13a', .7) + R(0, 18, 30, 4, '#3aa36b', .6), '#fff6e5'),
  'Paisley': sw('pa-pai', 40, 40, P('M14 30 C2 26 4 8 18 8 C30 8 30 22 22 24 C30 30 26 38 14 30 Z', ACC, INK, 1) + C(16, 17, 3, '#ffffff') + P('M30 12 C26 14 28 20 32 18', 'none', GREEN, 1.4), '#fff2dc'),
  'Pinstripe': sw('pa-pin', 10, 10, R(4, 0, .8, 10, '#e8e2d8'), '#2b3140'),
  'Plaid': sw('pa-pla', 28, 28, R(0, 0, 12, 28, GREEN, .5) + R(0, 0, 28, 12, GREEN, .5) + R(18, 0, 2, 28, '#f3c13a') + R(0, 18, 28, 2, '#f3c13a'), RED),
  'Polka dot': sw('pa-pol', 18, 18, C(4.5, 4.5, 3, '#ffffff') + C(13.5, 13.5, 3, '#ffffff'), NAVY),
  'Tie-dye': '<defs><radialGradient id="pa-tie"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="#f3c13a"/><stop offset=".55" stop-color="' + ACC + '"/><stop offset=".8" stop-color="#b44a8c"/><stop offset="1" stop-color="#3f4fb5"/></radialGradient></defs><rect x="14" y="14" width="92" height="92" rx="10" fill="url(#pa-tie)" stroke="' + INK + '" stroke-width="2"/>' + ln('M60 60 Q70 40 92 30 M60 60 Q40 50 26 26 M60 60 Q56 82 40 100 M60 60 Q80 74 100 96', 1.2, '#ffffff', 'none', ' opacity=".6"'),
  'Leheriya': sw('pa-leh', 20, 20, P('M-5 5 Q0 0 5 5 T15 5 T25 5 M-5 15 Q0 10 5 15 T15 15 T25 15', 'none', '#e04f5f', 3) + P('M-5 10 Q0 5 5 10 T15 10 T25 10', 'none', '#f3c13a', 2), '#3aa36b').replace('<pattern ', '<pattern patternTransform="rotate(-35)" '),
  'Abstract print': '<rect x="14" y="14" width="92" height="92" rx="10" fill="#fff9f0" stroke="' + INK + '" stroke-width="2"/>' + P('M20 80 Q40 30 70 50 T104 30', 'none', ACC, 8) + C(40, 40, 10, NAVY) + P('M60 90 L90 70 L96 100 Z', '#f3c13a') + P('M24 24 Q34 30 30 44', 'none', RED, 4),
  'Animal print': sw('pa-ani', 30, 30, P('M6 6 Q12 2 14 8 Q12 14 6 12 Q2 10 6 6Z M20 18 Q26 14 28 20 Q26 26 20 24 Q16 22 20 18Z', 'none', '#3a2a1a', 2.4) + C(10, 9, 2, '#8a5a2a') + C(23, 21, 2, '#8a5a2a'), '#d9a65a'),
  'Tropical print': sw('pa-tro', 44, 44, P('M8 40 Q10 16 30 6 Q22 22 8 40Z', GREEN) + P('M14 34 L26 12 M14 34 L28 22 M14 34 L20 14', 'none', '#2f4a22', 1) + P('M34 30 Q40 26 42 34 Q38 40 34 36 Q30 34 34 30Z', '#e04f5f'), '#fff6e5')
};
// Body shapes: torso outlines with shoulder / waist / hip markers.
const torso = (sh, wa, hi) => body('M' + (60 - sh) + ' 24 Q' + (60 - (sh + wa) / 2 - 2) + ' 46 ' + (60 - wa) + ' 60 Q' + (60 - hi - 4) + ' 80 ' + (60 - hi) + ' 92 L' + (60 + hi) + ' 92 Q' + (60 + hi + 4) + ' 80 ' + (60 + wa) + ' 60 Q' + (60 + (sh + wa) / 2 + 2) + ' 46 ' + (60 + sh) + ' 24 Q60 18 ' + (60 - sh) + ' 24 Z') + '<circle cx="60" cy="12" r="7" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' + acc('M' + (60 - sh) + ' 26 L' + (60 + sh) + ' 26 M' + (60 - wa) + ' 60 L' + (60 + wa) + ' 60 M' + (60 - hi) + ' 88 L' + (60 + hi) + ' 88', 2) + dash('M' + (60 - hi + 4) + ' 92 L' + (60 - hi + 8) + ' 114 M' + (60 + hi - 4) + ' 92 L' + (60 + hi - 8) + ' 114');
export const shapeArt = {
  'Hourglass body shape': torso(24, 13, 25), 'Pear body shape': torso(17, 14, 28), 'Apple body shape': torso(21, 25, 21),
  'Rectangle body shape': torso(22, 20, 22), 'Inverted triangle body shape': torso(30, 18, 18)
};
// Color concepts
const wheel = hi => { const cols = ['#e04f5f', '#f07a3a', '#f3c13a', '#9cc65a', '#3aa36b', '#2fa3a0', '#3f6fb5', '#6a4fb5', '#b44a8c']; let s = ''; cols.forEach((c, i) => { const a = i / 9 * 2 * Math.PI, x = 60 + Math.cos(a) * 34, y = 60 + Math.sin(a) * 34; s += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="10" fill="' + c + '" stroke="' + (hi.includes(i) ? INK : '#fff') + '" stroke-width="' + (hi.includes(i) ? 3 : 1) + '" opacity="' + (hi.includes(i) || !hi.length ? 1 : .3) + '"/>'; }); return s; };
const chips = cs => cs.map((c, i) => '<rect x="' + (18 + i * (84 / cs.length)) + '" y="38" width="' + (84 / cs.length - 4) + '" height="44" rx="6" fill="' + c + '" stroke="' + INK + '" stroke-width="1.4"/>').join('');
export const colorArt = {
  'Accent color': chips(['#e7d9c4', '#b8a99a', '#2a221c', '#e7d9c4']) + '<rect x="64" y="46" width="16" height="28" rx="4" fill="#d6312f" stroke="' + INK + '" stroke-width="2"/>',
  'Analogous colors': wheel([5, 6, 7]), 'Complementary colors': wheel([1, 6]),
  'Color blocking': chips(['#FD8817', '#2b3a55', '#f3c13a', '#3aa36b']),
  'Color palette': chips(['#6a3d3a', '#b5654a', '#d9a65a', '#7f8b5a', '#3f5a6b']),
  'Monochrome': chips(['#1f3a5a', '#2f5a85', '#4f7fae', '#86a9cc', '#c4d6e8']),
  'Neutrals': chips(['#1d1b19', '#8f8a84', '#ffffff', '#1f2a44', '#d8c3a5', '#b08a5b', '#6b6b3f'])
};
// Category fallbacks (used only when no photo or specific drawing exists).
export const fallbackArt = {
  fabric: '<rect x="18" y="20" width="84" height="80" rx="6" fill="#FFF2DC" stroke="' + INK + '" stroke-width="2"/>' + ln('M18 32 L102 32 M18 44 L102 44 M18 56 L102 56 M18 68 L102 68 M18 80 L102 80 M18 92 L102 92', .8, '#c9b8a5') + ln('M30 20 L30 100 M42 20 L42 100 M54 20 L54 100 M66 20 L66 100 M78 20 L78 100 M90 20 L90 100', .8, '#c9b8a5') + acc('M86 100 Q96 94 102 84 L102 100 Z', 2),
  shoe: body('M14 78 Q14 62 28 60 L56 58 Q70 48 82 60 L104 72 Q110 82 100 86 L20 86 Q14 86 14 78 Z') + acc('M14 86 L104 86', 3),
  bag: body('M26 46 L94 46 L100 100 L20 100 Z') + acc('M42 46 Q42 20 60 20 Q78 20 78 46', 3),
  acc: acc('M60 30 m-22 0 a22 22 0 1 0 44 0', 2) + accFill('M60 70 m-10 0 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0'),
  style: dash('M60 10 L60 14') + '<circle cx="60" cy="16" r="7" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' + body('M48 26 L72 26 L80 64 L74 64 L70 46 L72 104 L62 104 L60 74 L58 104 L48 104 L50 46 L46 64 L40 64 Z') + acc('M48 26 L72 26', 2),
  styling: ln('M60 16 L60 24', 2) + body('M60 24 L20 54 L100 54 Z') + acc('M20 54 L100 54', 3) + ln('M56 16 Q60 8 64 16', 2),
  indian: body('M60 20 L40 40 L30 108 L90 108 L80 40 Z') + accFill('M30 98 L90 98 L90 108 L30 108 Z')
};
