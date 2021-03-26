function saludar(nombre){
    console.log(arguments);
    console.log('Hola'+ nombre);

}
// ejecutar la funcion saludo()
saludar('edder');

// FUNCION ANONIMA

const saludar2= function(nombre){
    console.log('Hola '+nombre);
}
saludar2('edder2');

const saludarFlecha=()=>{
    console.log('Hola Flecha');
}
const saludarFlecha2=(nombre)=>{
    console.log('Hola Flecha'+nombre);
}
saludarFlecha();
saludarFlecha2('edder');