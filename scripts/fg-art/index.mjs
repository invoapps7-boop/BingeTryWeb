import { svgWrap } from './base.mjs';
import { necklineArt, collarArt, sleeveArt } from './tops.mjs';
import { fitArt, lengthArt, dressArt } from './shapes.mjs';
import { skirtArt, bottomArt } from './bottoms.mjs';
import { topArt } from './upper.mjs';
import { onepieceArt, outerArt } from './outer.mjs';
import { detailArt } from './details.mjs';
import { printArt, shapeArt, colorArt, fallbackArt } from './misc.mjs';
import { extraArt } from './extras.mjs';
export const drawings = { ...necklineArt, ...collarArt, ...sleeveArt, ...fitArt, ...lengthArt, ...dressArt, ...skirtArt, ...bottomArt, ...topArt, ...onepieceArt, ...outerArt, ...detailArt, ...printArt, ...shapeArt, ...colorArt, ...extraArt };
export const drawingFor = (term, cat) => {
  const inner = drawings[term] || fallbackArt[cat] || fallbackArt[cat === 'textile' ? 'fabric' : 'style'];
  return inner ? svgWrap(inner, term) : '';
};
export const hasDrawing = term => term in drawings;
