function crearPersona(nombre,apellido){
    return {nombre,apellido}
}

const crearPersona1=(nombre, apellido)=>({nombre, apellido});

const persona=crearPersona1('Edder','Herrera');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos();

const imprimeArgumentos2=(edad,...args)=>{

    return args;
}
const argumento2=imprimeArgumentos2(10,true,false,"Ferando","Hola");
console.log(argumento2);