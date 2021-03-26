let personaje ={
    nombre:'Tony Stark',
    codeName:'Iroman',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    traje:['Mark I','Mark V']

}
console.log('Nombre',personaje.nombre);
console.log('traje',personaje.traje[ personaje.traje.length-1]);

//Eliminar un elemento del objeto
delete personaje.edad;
console.log(personaje);

const entriesPares=Object.entries(personaje);
console.log(entriesPares);

const propiedades =Object.getOwnPropertyNames(personaje);
const valores =Object.values(personaje);
console.log( propiedades );
console.log(valores);