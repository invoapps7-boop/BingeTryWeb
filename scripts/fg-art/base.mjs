// Line illustrations for the fashion glossary, drawn as inline SVG (technical-flat style).
// Base garment in ink on butter; the feature the term names is drawn in orange.
export const INK = '#2a221c', FILL = '#FFF2DC', ACC = '#FD8817', SOFT = '#FDB476';
export const ln = (d, w = 2, c = INK, f = 'none', extra = '') => '<path d="' + d + '" fill="' + f + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linejoin="round" stroke-linecap="round"' + extra + '/>';
export const body = d => ln(d, 2, INK, FILL);
export const acc = (d, w = 3) => ln(d, w, ACC);
export const accFill = d => ln(d, 2.5, ACC, '#FFE0BE');
export const dash = d => ln(d, 1.4, INK, 'none', ' stroke-dasharray="3 3" opacity=".55"');
export const dot = (x, y, r = 1.8, c = INK) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/>';
export const txt = (x, y, t, s = 7) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + s + '" font-family="Inter,system-ui,sans-serif" fill="' + INK + '">' + t + '</text>';
export const mirror = s => '<g transform="translate(120 0) scale(-1 1)">' + s + '</g>';
export const both = s => s + mirror(s);
export const svgWrap = (inner, label) => '<svg class="fg-art" viewBox="0 0 120 120" role="img" aria-label="Illustration of ' + label.replace(/"/g, '') + '"><rect width="120" height="120" rx="14" fill="#FFF9F0"/>' + inner + '</svg>';

// Tops: neck points (48,26)/(72,26); shoulder tips (30,33)/(90,33); underarm (32,52)/(88,52); hem y=106.
export const NECK = {
  crew: 'C68 34 52 34 48 26', jewel: 'C67 31 53 31 48 26', scoop: 'C71 46 49 46 48 26', u: 'C74 58 46 58 48 26',
  v: 'L60 48 L48 26', plunge: 'L60 76 L48 26', square: 'L72 44 L48 44 L48 26', cowl: 'C70 44 50 44 48 26', surplice: 'L48 26',
  drawstring: 'C69 38 51 38 48 26', yoke: 'C68 36 52 36 48 26', illusion: 'C70 50 50 50 48 26',
  high: 'L72 18 C66 16 54 16 48 18 L48 26', mock: 'L72 20 C66 18 54 18 48 20 L48 26', turtle: 'L72 14 C66 12 54 12 48 14 L48 26',
  funnel: 'L75 14 C67 11 53 11 45 14 L48 26', queen: 'L70 44 C66 40 62 40 60 46 C58 40 54 40 50 44 L48 26', boat: 'C70 30 50 30 40 26'
};
export const bodice = (neck, o = {}) => {
  const nl = o.nl || 48, nr = 120 - nl;
  return body('M' + nl + ' 26 L30 33 L32 52 L34 106 L86 106 L88 52 L90 33 L' + nr + ' 26 ' + neck + 'Z');
};
export const SLV = {
  cap: 'M30 33 Q20 38 23 46 L32 48', short: 'M30 33 L15 53 L25 59 L32 52', elbow: 'M30 33 L12 65 L21 69 L32 52',
  half: 'M30 33 L14 60 L23 64 L32 52', three: 'M30 33 L10 77 L19 80 L32 52', bracelet: 'M30 33 L8 85 L17 87 L32 52',
  full: 'M30 33 L7 94 L16 96 L32 52', bell: 'M30 33 L15 70 L3 96 L22 97 L22 72 L32 52',
  bishop: 'M30 33 L13 66 C3 80 5 90 9 91 L9 96 L18 96 L18 91 C26 84 27 66 32 52', balloon: 'M30 33 C8 40 2 72 12 80 L12 86 L20 86 L20 80 C30 72 28 60 32 52',
  puff: 'M30 33 C14 24 6 50 21 57 L32 52', flutter: 'M30 33 L14 50 Q17 56 20 52 Q23 58 26 53 Q29 57 32 52', butterfly: 'M30 33 L12 48 Q15 53 18 49 Q21 55 24 50 Q28 56 32 52',
  kimono: 'M30 33 L6 52 L16 68 L32 60', batwing: 'M30 33 L6 72 L10 78 L34 80', dolman: 'M30 33 L8 74 L13 79 L34 76', drop: 'M24 42 L8 92 L17 94 L33 60',
  angel: 'M30 33 L10 66 L2 100 L26 98 L32 52', lantern: 'M30 33 L16 60 Q6 72 12 84 L14 94 L21 94 L20 84 Q30 72 32 52',
  mutton: 'M30 33 C10 26 6 56 20 60 L12 94 L20 96 L32 52', juliet: 'M30 33 C16 26 12 46 22 50 L9 94 L17 96 L32 52',
  petal: 'M30 33 Q14 44 20 58 Q26 52 32 52 M30 33 Q20 46 28 56', poet: 'M30 33 C12 46 4 74 8 88 Q4 92 8 94 Q10 98 14 95 Q18 98 20 94 C22 84 26 62 32 52',
  ruffle: 'M30 33 L17 50 Q19 56 23 53 Q25 59 29 55 L32 52', slit: 'M30 33 L7 94 L16 96 L32 52', setin: 'M30 33 L15 53 L25 59 L32 52',
  cuffed: 'M30 33 L9 86 L18 88 L32 52', rollup: 'M30 33 L12 64 L22 68 L32 52', raglan: 'M30 33 L7 94 L16 96 L32 52'
};
const SLV_ACC = {
  cuffed: acc('M9 86 L7 94 L16 96 L18 88 Z', 2.5), rollup: acc('M12 64 L10 72 L20 76 L22 68 Z M16 70 L18 62', 2.5),
  raglan: acc('M50 27 L32 52'), setin: acc('M30 33 L32 52'), slit: acc('M12 70 L10 92'), bracelet: acc('M8 85 L17 87 M6 92 L14 96', 2), drop: acc('M24 42 L33 60')
};
export const sleeve = (k, accent = true) => {
  if (!k || k === 'none') return '';
  const d = SLV[k];
  return both((accent && !SLV_ACC[k] ? accFill(d) : body(d)) + (accent && SLV_ACC[k] ? SLV_ACC[k] : ''));
};
export function top({ neck = 'crew', sleeves = 'short', accentSleeve = false, accentNeck = true, extra = '', nl } = {}) {
  const n = NECK[neck] || NECK.crew;
  const nlx = nl || (neck === 'boat' ? 40 : 48), nrx = 120 - nlx;
  let s = sleeve(sleeves, accentSleeve) + bodice(n, { nl: nlx });
  if (accentNeck) s += acc('M' + nrx + ' 26 ' + n);
  return s + extra;
}
export const buttons = (x, ys, c = INK) => ys.map(y => dot(x, y, 1.6, c)).join('');
export const placket = (y0 = 34) => ln('M60 ' + y0 + ' L60 106', 1.4) + buttons(63, [44, 58, 72, 86, 100]);
export const strapless = (topLine, accent = true) => body('M34 42 L34 106 L86 106 L86 42 ' + topLine + 'Z') + (accent ? acc('M86 42 ' + topLine) : '');
export const shirt = (sl = 'full') => sleeve(sl, false) + bodice('C66 30 54 30 48 26') + placket(32) + body('M46 27 C46 18 74 18 74 27 C68 23 52 23 46 27 Z');
export const jacket = (lapels, sl = 'full') => sleeve(sl, false) + body('M48 24 L30 33 L32 52 L34 106 L86 106 L88 52 L90 33 L72 24 Z') + ln('M60 70 L58 106', 1.6) + buttons(64, [78, 92]) + lapels;

// Dresses: bodice to waist y=w, skirt to hem y=h; ww waist half-width, hw hem half-width, bw bust half-width.
export function dress(o = {}) {
  const w = o.w ?? 52, h = o.h ?? 104, ww = o.ww ?? 14, hw = o.hw ?? 30, bw = o.bw ?? 18;
  const L = 60 - ww, R = 60 + ww, sx = 60 - bw - 4;
  const skirt = o.skirt || (' L' + (60 - hw) + ' ' + h + ' Q60 ' + (h + 4) + ' ' + (60 + hw) + ' ' + h + ' L' + R + ' ' + w);
  const d = 'M50 20 L' + sx + ' 26 L' + (60 - bw) + ' 40 L' + L + ' ' + w + skirt + ' L' + (60 + bw) + ' 40 L' + (120 - sx) + ' 26 L70 20 ' + (o.neck || 'C66 30 54 30 50 20') + 'Z';
  let s = body(d);
  if (o.dark) s = ln(d, 2, INK, INK);
  if (o.sleeves) s = armSleeves(o.sleeves, sx) + s;
  return s;
}
function armSleeves(k, sx) {
  // Reuse sleeve shapes by translating from top-coordinates (30,33)->(sx,26).
  const dx = sx - 30, dy = 26 - 33;
  const g = '<g transform="translate(' + dx + ' ' + dy + ')">' + body(SLV[k]) + '</g>';
  return g + mirror(g);
}
export const waistMark = (y, half) => acc('M' + (60 - half) + ' ' + y + ' L' + (60 + half) + ' ' + y, 2.5);
