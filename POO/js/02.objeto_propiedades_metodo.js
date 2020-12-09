/*=============================================>>>>>
OBJETOS: es una coleccion de metodos y propiedades
===============================================>>>>>*/

var object={
  // una propiedad es una asociación entre un nombre y un valor

  nombre:"juan",
  edad:31,
  // el metodo es una funcion dentro de un objetos
  descripcion:function(){
    console.log("nombre es" + object.nombre + " y tiene "+object.edad +"años.")
  },
  saludar: function(saludo){
    console.log(saludo+" "+object.nombre);
  }
}

console.log("Nombre",object.nombre);
console.log("Edad",object.edad);
object.descripcion();
object.saludar("Hola");
