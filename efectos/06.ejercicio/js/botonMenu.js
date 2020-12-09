/*=============================================>>>>>
    OBJETO DE LAS PROPIEDADES DEL BOTON DE MENU
===============================================>>>>>*/

var bt= {
  botonMenu: document.querySelector(".btnMovil"),
  vistaBotones:false,
  botonera:document.querySelector("nav"),
  botones: document.querySelectorAll("nav ul li a")
}

/*=============================================>>>>>
    OBJETO DEL METODO DEL BOTON DE MENU
===============================================>>>>>*/

var mt= {
  inicioBotonMenu:function(){
    bt.botonMenu.addEventListener("click",mt.mostrarBotonera);
    for (var i = 0; i < bt.botones.length; i++) {
      bt.botones[i].addEventListener("click",mt.ocultarBoton);
    }
  },
  mostrarBotonera:function(){

    if(!bt.vistaBotones){
      bt.vistaBotones=true;
      bt.botonera.className="col-lg-0 col-md-0 col-sm-0 col-xs-12"
    }else {
      bt.vistaBotones=false;
      bt.botonera.className="col-lg-0 col-md-0 col-sm-0 col-xs-0"
    }

  },
  ocultarBoton:function(){
    if(window.matchMedia("(max-width:767px)").matches){
      bt.vistaBotones=false;
      bt.botonera.className="col-lg-0 col-md-0 col-sm-0 col-xs-0"
    }
  }
}
mt.inicioBotonMenu();
