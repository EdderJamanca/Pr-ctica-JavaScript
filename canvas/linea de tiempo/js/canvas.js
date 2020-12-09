var frame = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRquestAnimationFrame;

var canvas = document.querySelector("#lienzo"); // seleccionamos la etiqueta cambas

var ctx = canvas.getContext("2d"); // trabajamos en 2da dimensión

var numero=0;
var ubicacionX=0;

var animacion =0;

// Dibujar SPRITE

var sprite = new Image();// declaramos una objeto de Image
sprite.src="img/opcion1.png";

//
// sprite.onload = function(){
//   // ctx.drawImage(Image,ubicacionX,UbicacionY,recorteX,recrteY, x1,y1,x2,y2)
//   //x1,y1,x2,y2 -> la pocision en la pantalla
//   //ubicacionX,UbicacionY,recorteX,recrteY -♠> el recorte de la imagen
//   ctx.drawImage(sprite,0,0,100,100,0,100,100,100);
// }
function tiempo() {

  if(numero>=600){numero = 0} else {numero+=25};

  for (var i = 0; i <= numero; i+=100) {
        if(numero >=i)(ubicacionX = i)
  }
  ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.drawImage(sprite,ubicacionX,0,100,100,0,100,100,100);
  animacion=frame(tiempo);
}
setTimeout(function(){
  cancelAnimationFrame(animacion)
},3000)


tiempo();
