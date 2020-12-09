var frame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.wiketRequestAnimationFrame ||
            window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx =canvas.getContext("2d");

/*=============================================>>>>>
  POO
===============================================>>>>>*/
// vat jugador = new object ( { x:1,})
var jugador = {
  x:280,
  y:70,
  ancho:10,
  alto:10,
  color:"red",
  movimiento_x:0,
  movimiento_y:0,
  velocidad:5,
  x1:null,
  x2:null,
  y1:null,
  y2:null

}

var array =[{x:300,y:50,ancho:400,alto:10,x1:null,x2:null,y1:null,y2:null, color:"black"},
            {x:300,y:90,ancho:10,alto:360,x1:null,x2:null,y1:null,y2:null},
            {x:300,y:440,ancho:400,alto:10,x1:null,x2:null,y1:null,y2:null},
            {x:690,y:90,ancho:10,alto:360,x1:null,x2:null,y1:null,y2:null},

            {x:365,y:50,ancho:10,alto:350,x1:null,x2:null,y1:null,y2:null},
            {x:430,y:100,ancho:10,alto:350,x1:null,x2:null,y1:null,y2:null},
            {x:495,y:50,ancho:10,alto:350,x1:null,x2:null,y1:null,y2:null},
            {x:560,y:100,ancho:10,alto:350,x1:null,x2:null,y1:null,y2:null},
            {x:625,y:50,ancho:10,alto:350,x1:null,x2:null,y1:null,y2:null}]
/*=============================================>>>>>
  CANVAS
===============================================>>>>>*/
var dato = {
  izquierda:false,
  derecha:false,
  arriba:false,
  abajo:false
}

/*=============================================>>>>>
  METODOS DEL OBJETO JUEGO
===============================================>>>>>*/
var juego  = {
  teclado:function(){
    //EVENTO DE teclado
    document.addEventListener("keydown",juego.oprimir);
    document.addEventListener("keyup",juego.soltar);

  },
  oprimir:function(tecla){

    tecla.preventDefault();

    switch (tecla.keyCode) {
      case 37: dato.izquierda= true; break;
      case 38: dato.arriba= true; break;
      case 39: dato.derecha= true; break;
      case 40: dato.abajo= true; break;
    }

  },
  soltar:function(tecla){

    tecla.preventDefault();

    switch (tecla.keyCode) {
      case 37: dato.izquierda= false; break;
      case 38: dato.arriba= false; break;
      case 39: dato.derecha= false; break;
      case 40: dato.abajo= false; break;
    }
  },
  tiempo: function(){
    //MOVIMIENTO HORIZONTAL jugador
    jugador.x += jugador.movimiento_x;

    if(dato.izquierda){jugador.movimiento_x=-jugador.velocidad; jugador.movimiento_y=0;}
    if(dato.derecha){jugador.movimiento_x= jugador.velocidad; jugador.movimiento_y=0;}
    if(!dato.izquierda && !dato.derecha){jugador.movimiento_x=0}
    console.log("jugador Movimiento",jugador.movimiento_x);

    //MOVIMIENTO HORIZONTAL jugador
    jugador.y += jugador.movimiento_y;

    if(dato.arriba){jugador.movimiento_y=-jugador.velocidad; jugador.movimiento_x=0;}
    if(dato.abajo){jugador.movimiento_y=jugador.velocidad; jugador.movimiento_x=0;}
    if(!dato.arriba && !dato.abajo){jugador.movimiento_y=0}
    console.log("jugador Movimiento",jugador.movimiento_y);

    //COLISIONES
    for (var i = 0; i < array.length; i++) {

      jugador.x1=jugador.x;
      jugador.x2=jugador.x + jugador.ancho;
      jugador.y1=jugador.y;
      jugador.y2=jugador.y +jugador.alto;

      array[i].x1 = array[i].x;
      array[i].x2 = array[i].x +  array[i].ancho;
      array[i].y1 = array[i].y;
      array[i].y2 = array[i].y  + array[i].alto;

      function colisiones(){
        //NO COLISIONAR DE IZQ A DER
        if(jugador.x2 < array[i].x1){return false}
        //NO COLISION DE DER A IZQ
        if (jugador.x1 > array[i].x2) { return false}
        //NO COLISION DE ARRIBA HACIA abajo

        if(jugador.y2 < array[i].y1){ return false}
        //NO COLISION DE ABAJO HACIA arriba
        if(jugador.y1 > array[i].y2){ return false}

        return true;
      }
      colisiones();
      if ( colisiones() && jugador.x2 >= array[i].x1) {
        jugador.movimiento_x= 0;
      }
      //COLISION DE DER A IZQ

      if ( colisiones() && jugador.x1 - jugador.movimiento_x > array[i].x2) {
        jugador.movimiento_x= 0;
      }
      //COLISION DE ARRIBA HACIA ABAJO
      if ( colisiones() && jugador.y2 < array[i].y1 + jugador.movimiento_y) {
        jugador.movimiento_y= 0;
      }
      //COLISION DE ABAJO HACIA ARRIBA
      if ( colisiones() && jugador.y1-  jugador.movimiento_y > array[i].y2) {
        jugador.movimiento_y= 0;
      }

    }


    juego.canvas();
    frame(juego.tiempo);
  },
  canvas:function(){
    //borramos lienzo
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle=jugador.color;
    ctx.fillRect(jugador.x, jugador.y,jugador.ancho,jugador.alto)


    ctx.fillStyle=array[0].color;
    for (var i = 0; i < array.length; i++) {

      ctx.fillRect(array[i].x,array[i].y,array[i].ancho,array[i].alto);
    }
  }
}
juego.teclado();
juego.tiempo();
