const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();

const attributes = { fill: 'red', stroke: 'black' };
const options = {
  x: 0,
  y: 0,
  fontSize: 12,
  anchor: 'top',
  attributes: attributes,
};

const metrics = textToSVG.getMetrics('hello', options);
console.log(metrics);
const svg = textToSVG.getSVG('hello', options);

console.log(svg);
