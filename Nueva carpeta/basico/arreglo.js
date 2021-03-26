
// opcion 1

const arr = new Array(10);
console.log(arr);

// opcion 2

let videojuego =['Mario 3','Megaman','Chromo Trigger']

console.log(videojuego);

let arrglos =[true,123,'Fernando',1+2,function(){},()=>{}, ['X','Megamente','Zero','Dr.Light']]
console.log(arrglos[6][3]);

//SESION 2
let juegos =['Zelda','Mario','Metroid','Chromo'];
console.log('Largo:',juegos.length);

let primero =juegos[2-2];
let ultimo =juegos[juegos.length-1];

console.log(primero,ultimo);

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
})

let nuevaLongitud =juegos.push('F-Zero');

console.log({nuevaLongitud});

nuevaLongitud=juegos.unshift('Fire Emblem');

console.log({nuevaLongitud, juegos});

let juegoBorrado =juegos.pop();
console.log({juegoBorrado, juegos});

// splice 
pos=1;
console.log(juegos);

let juegosBorrados=juegos.splice(pos,2);

console.log({juegosBorrados,juegos});

// indexOf

let metroidIndex =juegos.indexOf('Metroid');//CaseSEnsitive
console.log({metroidIndex});