/*=============================================>>>>>
  OBJETO DE LAS PROPIEDADES DE CANVAS
===============================================>>>>>*/
var a ={
  contenedor: document.querySelector(".contenedor"),
  ampliarLienzo: document.querySelector("#lienzo"),
  btnampliar: document.querySelector("#btnampliar")
}


/*=============================================>>>>>
  OBJETO DE METODOS DE CANVAS
===============================================>>>>>*/
var m ={

  ampliar:function(){

    a.contenedor.style.width="100%";
    a.contenedor.style.height="100vh";
    a.contenedor.style.margin="0";

    a.ampliarLienzo.style.width="100%";
    a.ampliarLienzo.style.height="100vh";
    a.ampliarLienzo.style.backgroundSize="cover";
    a.ampliarLienzo.style.backgroundRepeat="no-repeat";

    a.btnampliar.innerHTML="Redicir Canvas";
    a.btnampliar.style.position="fixed";
    a.btnampliar.style.top="10px";
    a.btnampliar.style.left="10px";
    a.btnampliar.style.zIndex="1";

    a.btnampliar.setAttribute("onclick","m.regresar()");

  },
  regresar:function(){
    a.contenedor.style.width="1000px";
    a.contenedor.style.height="500px";
    a.contenedor.style.margin="5vh auto";

    a.ampliarLienzo.style.width="1000px";
    a.ampliarLienzo.style.height="500px";


    a.btnampliar.innerHTML="Redicir Canvas";
    a.btnampliar.style.position="relative";
    a.btnampliar.style.top="0";
    a.btnampliar.style.left="0";
    a.btnampliar.style.zIndex="0";



    a.btnampliar.setAttribute("onclick","m.ampliar()");

  }

}
