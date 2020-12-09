/*=============================================>>>>>
    OBJETO CON LAS PROPIDADES DE EFECTO MAUSE
===============================================>>>>>*/

var ep= {
   contenido: document.querySelector("#efectoMause"),
   figuras: document.querySelectorAll("#efectoMause figure"),
   mauseX:0,
   mauseY:0,
   movimientoH:true,
   movimientov:false

}



/*=============================================>>>>>
    OBJETO CON METODOS DE EFECTO MAUSE
===============================================>>>>>*/
var em= {

  inicioEfectomause: function(){

    ep.contenido.addEventListener("mousemove",em.movimientoMause);
    for( var i=0; i<ep.figuras.length; i++){
      ep.figuras[i].innerHTML='<img SRC="img/mouse/plano0'+i+'.png">';
      ep.figuras[i].style.zIndex= (i-3)*-1;
    }
    console.log(ep.figuras.length)
    setTimeout(function(){
        ep.contenido.style.height=ep.figuras[0].childNodes[0].height +"px";
    },500)

  },
  movimientoMause:function(item){
    ep.mauseX=item.offsetX;
    ep.mauseY=item.offsetY;
    for (var i=0; i<ep.figuras.length; i++){

        if(ep.movimientoH){
         ep.figuras[i].style.left=-ep.mauseX/(i*100 + 50)+"%";
       }
       if(ep.movimientov){
        ep.figuras[i].style.top=ep.mauseY/(i*100 + 50)+"%";
      }

    }

    console.log(item.offsetX,item.offsetY);
  }

}
em.inicioEfectomause();
