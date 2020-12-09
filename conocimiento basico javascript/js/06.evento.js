
/*=============================================>>>>>
                  EVENTO DEL DOM
===============================================>>>>>*/

var evento1=document.querySelector("#recuadro");
 function cambiarcolor(){
   evento1.style.background="red";
 }

/*=============================================>>>>>
              EVENTO DEL JAVASCRIPT
 ===============================================>>>>>*/
var boton=document.querySelector("#boton");
console.log(boton);
    boton.addEventListener("click",engrandar);

    function engrandar(){
      evento1.style.width="500px";
      evento1.style.transition="1s width ease";
    }
