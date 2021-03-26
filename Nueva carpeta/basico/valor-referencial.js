// Arreglos

const frutas =["Manzanas","Pera","Piña"];

console.time('slice');
const otrasFrutas =frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2=[...frutas];//es un espret
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});
