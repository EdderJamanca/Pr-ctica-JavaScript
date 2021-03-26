
/* ================================
          DECLARAION DE VARIABLE
===================================*/
const email=document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje=document.querySelector("#mensaje");
const formulario = document.querySelector('form');

// acciones de botones
const enviar=document.querySelector("#enviar");
const resetBtn=document.querySelector('#resetBtn');

inicio();

function inicio(){

     // inicio del documento 
     document.addEventListener('DOMContentLoaded',inicioapp);

     // campos del formulario 
     email.addEventListener('blur',validarFormulario);
     // asunto
     asunto.addEventListener('blur',validarFormulario);
     // salir mensaje
     mensaje.addEventListener('blur',validarFormulario);

     // ENVIAR LOS DATOS
     formulario.addEventListener('submit',enviardatos);
     // limpiar los datos
     resetBtn.addEventListener('click',formularioReset);

}

function inicioapp(){
    
     enviar.disabled = false;
     enviar.classList.add('cursor-not-allowed', 'opacity-50')
}

// validar formulario
function validarFormulario(e){

     // e.target.classList.add('border', 'border-red-500');


     if(this.type==='email'){

          validarEmail(this);

     }else{

          validarText(this);

     }

     if(email.value !=='' && asunto.value !=='' && mensaje.value !=="" ){

         const error = document.querySelectorAll('.error');
          if(error.length ==0){
               
               enviar.disabled=false;
               enviar.classList.remove('cursor-not-allowed');
               enviar.classList.remove('opacity-50');
          }else {
               inicioapp();
          }
 
          visualizarError(error);
          // enviar.classList.add('opacity-100')
     }
}
// validar Text y el textarea
function validarText(campo){

     const rer=/^([a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]*)+$/;

     const campoText=campo.value.trim();

     if(campoText.length !==0){

          (rer.test(campoText) ) ? correcto(campo) : error(campo);
     }else{
          error(campo);
     }


}
// validar Email
function validarEmail(campo){

     const campoEmail=campo.value.trim();

     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
     if(re.test(campoEmail.toLowerCase()) ){

          correcto(campo);

     }else{
          
          error(campo);

     }
}
// ENVIAR DATOS
function enviardatos(e){

     e.preventDefault();

     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

          // Gif que envia email
     const enviado = document.createElement('p');
     enviado.textContent = 'Mensaje Enviado Correctamente';
     enviado.classList.add('bg')

          // Ocultar Spinner y mostrar gif de enviado
          setTimeout( () => {
               spinner.style.display = 'none';
     
               document.querySelector('#loaders').appendChild( enviado );
              
               setTimeout(() =>  {
                    enviado.remove();
                    formulario.reset();
                    inicioapp();
               }, 5000);
          }, 3000);
}

// function error
function error(campo){
     
     limpiarBordeGreen(campo);
     campo.style.borderBottomColor='red';
     campo.classList.add('border', 'border-red-500');
     campo.classList.add('error'); 
}
// function correcto
function correcto(campo){
     
     limpiarBordeGreen(campo);
     campo.style.borderBottomColor='green';
     campo.classList.add('border', 'border-green-500');
     campo.classList.remove('error');

     
}
function visualizarError(error){

     const mensajeErr=document.querySelector('.mensajeErr');

     (error.length>0) ?  mostarmensajeError() 
     :  
     (!!mensajeErr !==false) &&
           (mensajeErr.length !==0) && mensajeErr.parentNode.removeChild(mensajeErr);

}
// mensaje de error
function mostarmensajeError(){
     const mjsError = document.createElement('div');
     mjsError.textContent='Todos los campos son obligatorios';
     mjsError.classList.add('border','bg-red-600','text-white','p-3','mt-5','text-center','mensajeErr');
     const todoError=document.querySelectorAll('.error');
     
     if(todoError.length !==0){
          formulario.appendChild(mjsError);
     }
 
}

function formularioReset(e){
     e.preventDefault();

     formulario.reset();

     email.setAttribute('style','');
     asunto.setAttribute('style','');
     mensaje.setAttribute('style','');

     limpiarBordeTodo();

     inicioapp();
     const mensajeErr=document.querySelector('.mensajeErr');

     if( !!mensajeErr !==false){

          if(mensajeErr.length !==0){
               mensajeErr.parentNode.removeChild(mensajeErr);
          }
         
     }
     
}
function limpiarBordeGreen(campo){
    
     if(campo.classList.value.includes('border-green-500')){
          
          campo.classList.remove('border-green-500');

     }
     if(campo.classList.value.includes('border-red-500')){
          
          campo.classList.remove('border-red-500');

     }

}

function limpiarBordeTodo(){

     const borderGreen=document.querySelectorAll('.border-green-500');
     const borderRed =document.querySelectorAll('.border-red-500');

     if(borderGreen.length !==0){

          if(borderGreen.length !==0){
     
               borderGreen.forEach(element => {
                  element.classList.remove('border-green-500');
               });
     
          }
         

     }
     if(borderRed !==0){

          if(borderRed.length !==0){

               borderRed.forEach(element => {
                    element.classList.remove('border-red-500');
               });
          }
     }


}

// // variables
// const email = document.querySelector('#email');
// const asunto = document.querySelector('#asunto');
// const mensaje = document.querySelector('#mensaje');

// const btnEnviar = document.querySelector('#enviar');
// const formularioEnviar = document.querySelector('#enviar-mail');
// const resetBtn = document.querySelector('#resetBtn');

// // event Listener

// eventListeners();

// function eventListeners() {
//      // Inicio de la aplicación y deshabilitar submit
//      document.addEventListener('DOMContentLoaded', inicioApp);

//      // Campos del formulario
//      email.addEventListener('blur', validarFormulario);
//      asunto.addEventListener('blur', validarFormulario);
//      mensaje.addEventListener('blur', validarFormulario);

//      // Boton de enviar en el submit
//      formularioEnviar.addEventListener('submit', enviarEmail);

//      // Boton de reset
//      resetBtn.addEventListener('click', resetFormulario);
// }



// // funciones
// function inicioApp() {
//      // deshabilitar el envio
//      btnEnviar.disabled = true;
//      btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
// }


// // Valida que el campo tengo algo escrito

// function validarFormulario(e) {
    
//      if(e.target.value.length > 0 ) {
//           campo.style.borderBottomColor = 'green';
//           campo.classList.remove('error');
//      } else {
//           e.target.classList.add('border', 'border-red-500');
//      }



//      // Validar unicamente el email
//      if(this.type === 'email') {
//           validarEmail(this);
//      }


//      if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
//         btnEnviar.disabled = false;
//         btnEnviar.classList.remove('opacity-50');
//         btnEnviar.classList.remove('cursor-not-allowed');
//      }
// }

// // Resetear el formulario 
// function resetFormulario(e) {
//      formularioEnviar.reset();
//      e.preventDefault();
// }

// // Cuando se envia el correo
// function enviarEmail(e) {

//     e.preventDefault();





//      // Spinner al presionar Enviar
//      const spinner = document.querySelector('#spinner');
//      spinner.style.display = 'flex';

//      // Gif que envia email
//      const enviado = document.createElement('p');
//      enviado.textContent = 'Mensaje Enviado Correctamente';
//      enviado.classList.add('bg')

//      // Ocultar Spinner y mostrar gif de enviado
//      setTimeout( () => {
//           spinner.style.display = 'none';

//           document.querySelector('#loaders').appendChild( enviado );

//           setTimeout(() =>  {
//                enviado.remove();
//                formularioEnviar.reset();
//           }, 5000);
//      }, 3000);

     
// }



// function validarEmail(campo) {
//      const mensaje = campo.value;

//      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
//      if( re.test(mensaje.toLowerCase()) ) {
//           campo.style.borderBottomColor = 'green';
//           campo.classList.remove('error');
//      } else {
//           campo.style.borderBottomColor = 'red';
//           campo.classList.add('error');
//      }
// }