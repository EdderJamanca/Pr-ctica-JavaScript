/*=============================================>>>>
OBJETO CON LAS PROPIEDADES DEL ESCROLL
===============================================>>>>>*/
var sp ={
  posicionScroll:0,
  aticulos: document.querySelectorAll("#scroll article"),
  cajaScroll: document.querySelector("#scroll"),
  cabezote: document.querySelector("header"),
  botonera: document.querySelectorAll("nav ul li a"),
  ruta: null,
  intervalo: null,
  destinoScroll: null,
  padding:0

}






/*=============================================>>>>
OBJETO CON LOS METODOS DEL ESCROLL
===============================================>>>>>*/
var sm= {
  inicioScroll:function(){

    document.addEventListener("scroll",sm.efectoScroll);

    for (var i = 0; i < sp.botonera.length; i++) {
      sp.botonera[i].addEventListener("click",sm.desplezamiento);
    }

  },
  efectoScroll:function(){

    sp.posicionScroll=window.pageYOffset;

      if (sp.posicionScroll>110) {
        sp.cabezote.style.position="fixed";
        sp.cabezote.style.zIndex="10";
        sp.padding=80;
      }else {
        sp.cabezote.style.position="relative";
        sp.cabezote.style.zIndex="0";
        sp.padding=180;
      }


    //  SCROLL
    if(sp.posicionScroll>sp.cajaScroll.offsetTop-200){

      for (var i = 0; i < sp.aticulos.length; i++) {

        sp.aticulos[i].style.marginLeft="0%";

      }

    }else {

      for (var i = 0; i < sp.aticulos.length; i++) {

        sp.aticulos[i].style.marginLeft=sp.posicionScroll/22.8 -100+"%";

      }

    }

  },
  desplezamiento:function(ruta){
    ruta.preventDefault();

    sp.ruta=ruta.target.getAttribute("href");
    sp.destinoScroll=document.querySelector(sp.ruta).offsetTop-sp.padding;

    sp.intervalo=setInterval(function(){

      if(sp.posicionScroll<sp.destinoScroll){
        sp.posicionScroll+=100;

        if(sp.posicionScroll>=sp.destinoScroll){

          sp.posicionScroll=sp.destinoScroll;

          clearInterval(sp.intervalo);

        }

      }else {
        sp.posicionScroll-=100;
        if(sp.posicionScroll>=sp.destinoScroll){

          sp.posicionScroll=sp.destinoScroll;

          clearInterval(sp.intervalo);

        }
      }

      window.scrollTo(0,sp.posicionScroll);

    },100)


  }

}
sm.inicioScroll();
