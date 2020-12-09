/*=============================================>>>>>
              VARIABLES
===============================================>>>>>*/
// VARIABLES NUMERICAS

var numero=5;
console.log(numero);

// VARIABLES DE TEXTO

var palabra="palabras";
console.log(palabra);

// VARIABLE BOOLEANAS

  var boleana =true;
  console.log(boleana);

// VARIABLES DE TIPO ARREGLO (Array)

var colores =Array("Rojo","Amarillo");
console.log("Colores", colores[0]);
// VARIABLES TIPO OBJETOS (objet: propiedad y valor)

var jugo= {ingrediente:"fresa",
            ingrediente1:"mandarina",
          ingrediente2:"banana"};
console.log("jugo",jugo);
console.log("jugo 2",jugo.ingrediente);

// Variables DOM ('Modelo de Objetos del Documento')
/*El DOM es la estructura de objetos que genera el navegador cuando
 se carga un documento y se puede alterar mediante javascript para
 cambiar dinámicamente los contenidos y aspecto de la página.*/

 var caja=document.querySelector("#caja");
 console.log(caja);
 caja.style.width="200px";
 caja.style.height="200px";
 caja.style.background= "red";

 var cajas=document.querySelectorAll(".cajas");
 console.log(cajas);


/*=============================================<<<<<*/
