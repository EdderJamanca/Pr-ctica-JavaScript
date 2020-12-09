/*=============================================>>>>>
                CLASES PRIMITIVAS
===============================================>>>>>*/
// clase estring
var string =new String("Este es un Estring");
console.log("String",string);
// clases Number

var number =new Number(12);
console.log("Number", number);

// clases boolean

var boolean= new Boolean(false);
console.log("boolean",boolean);
/*=============================================>>>>>
                CLASES COMPUESTAS
===============================================>>>>>*/
// clases Array
var array= new Array("rojo","amarillo","verde");
console.log("array",array);

// clases Object

var object =new Object({nombre:"Pedro",edad:30});

console.log("Object",object);

/*=============================================>>>>>
                CLASES por programador
===============================================>>>>>*/
// creamos el prototipo
function Personas(){
  this.nombre;
  this.edad;
}

var yo= new Personas();
yo.nombre="Juan";
yo.edad="21 años";
console.log("yo",yo);

function Animales(nombre,raza){
  this.nombre=nombre;
  this.raza=raza;
}

var mascota = new Animales("perro","pitbul");
console.log("mascota",mascota);








;
