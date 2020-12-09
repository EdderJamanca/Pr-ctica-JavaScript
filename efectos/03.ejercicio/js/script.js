/*=============================================>>>>>
          OBJETOS CON LAS PROPIEDADES DEL SLIDE
===============================================>>>>>*/
var m= {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide: document.querySelector("#slide ul"),
  animacionSlide:"slide",
  imgSlide: document.querySelectorAll("#slide ul li"),
  retroceder: document.querySelector("#slide #retroceder"),
  avanzar: document.querySelector("#slide #avanzar"),
  velocidadSlide:3000,
  formatearLoop:false
}


/*=============================================>>>>>
          OBJETOS CON LOS METODOS DEL SLIDE
===============================================>>>>>*/

var n = {

  inicioSlide: function(){

    for ( var i=0; i<m.paginacion.length; i++){
      m.paginacion[i].addEventListener("click",n.paginacionSlide);
      m.imgSlide[i].style.width=(100/m.paginacion.length)+"%";
    }
    m.retroceder.addEventListener("click",n.retroceder);
    m.avanzar.addEventListener("click",n.avanzar);
    n.avanzarAutomatico();

    m.cajaSlide.style.width=(m.paginacion.length*100)+"%";

  },

  retroceder: function(){

      if(m.item == 0){

        m.item=m.imgSlide.length-1;

      }else {

        m.item--;

      }

          n.movimientoSlide(m.item);

  },
  avanzar:function(){

    if(m.item == m.imgSlide.length - 1){

      m.item=0;

    }else {

      m.item++;

    }

    n.movimientoSlide(m.item);

  },

  paginacionSlide: function(tecla){

    m.item=tecla.target.parentNode.getAttribute("item")-1
    n.movimientoSlide(m.item)

  },

  movimientoSlide:function(indice){
        m.formatearLoop= true;
        m.cajaSlide.style.left=indice*-100 +"%";

        for (var i=0; i<m.paginacion.length;i++){

           m.paginacion[i].style.opacity=0.5;

        }

        m.paginacion[indice].style.opacity=1;

        if(m.animacionSlide=="slide"){

          m.cajaSlide.style.transition=".7s left ease-in-out";

        }
        if(m.animacionSlide=="fade"){

            for( var i=0; i<m.imgSlide.length;i++){

                m.imgSlide[i].style.opacity=0;

            }
            m.imgSlide[indice].style.transition=".8s opacity eade-in-out";
            setTimeout(function(){

              m.imgSlide[indice].style.opacity=1;
            },50);

        }

    },
    avanzarAutomatico:function(){

      setInterval(function(){

          if(m.formatearLoop){

            m.formatearLoop=false;

          }else {
            n.avanzar();
          }

      },m.velocidadSlide)
    }

}
n.inicioSlide();
/*=============================================<<<<<*/
