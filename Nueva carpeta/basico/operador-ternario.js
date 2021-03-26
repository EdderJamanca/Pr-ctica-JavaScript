const dia =0;
const horaActual=8;
let horaApertura;
let mensaje;

// if(dia==0 || dia===6){
// if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura=9;
// }else {
//     console.log('Dias de semana');
//     horaApertura=11;
// }

horaApertura =([0,6].includes(dia)) ? 9 : 11;

if(horaActual >= horaApertura){
    mensaje='Está abierto';
}else {
    mensaje =`Está cerrado, hoy abrimos a las ${ horaApertura}`;
}
console.log(mensaje);