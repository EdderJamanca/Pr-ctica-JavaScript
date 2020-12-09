/*=============================================>>>>>
              FUNCIONES
===============================================>>>>>*/

// FUNCIONES SIN VARIABLES

function saludo(){
   console.log("saludo", "hola");
}

saludo();

// FUNCIONES CON Variables

function operacion(digito1, digito2){
   var resultado= digito1 + digito2;
   console.log("resultado",resultado);
}
operacion(5,10);

// FUNCION CON RETORNO SIN PARAMETRO

function retorno1(){
  return true;
}

console.log("retorno 1", retorno1);

// FUNCTION CON retorno CON PARAMETO
function retorno2(numero){
  return numero;
}
console.log("Retorno 2", retorno2(10));

/*= End of Section comment block =*/
/*=============================================<<<<<*/
