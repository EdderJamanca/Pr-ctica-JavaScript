/*=============================================>>>>>
OBJETOS DE PROPIDADES DEL PAISAJE
===============================================>>>>>*/

var ps={
   lienzo:document.querySelector("#lienzo"),
   ctx:null,
   alfa:1
}


/*=============================================>>>>>
OBJETOS DE METODOS DEL PAISA
===============================================>>>>>*/
var pm = {
  inicioPaisaje: function(){

      ps.ctx=ps.lienzo.getContext('2d');
    // degradado del fondo CIELO
    var grd=ps.ctx.createLinearGradient(0,0,0,500);
    grd.addColorStop(0,"rgba(0,0,255,"+ps.alfa+")")
    grd.addColorStop(1,"white")
    ps.ctx.fillStyle=grd;
    ps.ctx.fillRect(0,0,1000,500)
  // degradado del fondo OCEANO
     var grd2=ps.ctx.createLinearGradient(0,400,0,500);
      grd2.addColorStop(0,"rgba(0,180,255,"+ps.alfa+")");
      ps.ctx.fillStyle=grd2;
      ps.ctx.fillRect(0,400,1000,100)

  // MONTAÑA 1
    ps.ctx.beginPath();
    ps.ctx.fillStyle='rgba(100,0,255,'+ps.alfa+')';
    ps.ctx.moveTo(0,400);
    ps.ctx.lineTo(200,100);
    ps.ctx.lineTo(400,400);
    ps.ctx.fill();

    // MONTAÑA 2
      ps.ctx.beginPath();
      ps.ctx.fillStyle='rgba(50,0,255,'+ps.alfa+')';
      ps.ctx.moveTo(200,400);
      ps.ctx.lineTo(400,100);
      ps.ctx.lineTo(600,400);
      ps.ctx.fill();

      // MONTAÑA 3
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(100,0,255,'+ps.alfa+')';
        ps.ctx.moveTo(400,400);
        ps.ctx.lineTo(600,100);
        ps.ctx.lineTo(800,400);
        ps.ctx.fill();
      // MONTAÑA 3
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(50,0,255,'+ps.alfa+')';
        ps.ctx.moveTo(600,400);
        ps.ctx.lineTo(800,100);
        ps.ctx.lineTo(1000,400);
        ps.ctx.fill();

      // ===================================
      //  NIEVE MONTAÑA 1
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
        ps.ctx.moveTo(200,300);
        ps.ctx.lineTo(200,100);
        ps.ctx.lineTo(267,200);
        ps.ctx.fill();
      // ===================================
      //  NIEVE MONTAÑA 1
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
        ps.ctx.moveTo(133,200);
        ps.ctx.lineTo(200,100);
        ps.ctx.lineTo(200,300);
        ps.ctx.fill();
      // ===================================
      //  NIEVE MONTAÑA 2 LEFT
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
        ps.ctx.moveTo(333,200);
        ps.ctx.lineTo(400,100);
        ps.ctx.lineTo(400,300);
        ps.ctx.fill();
      // ===================================
      //  NIEVE MONTAÑA 2 LEFT
        ps.ctx.beginPath();
        ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
        ps.ctx.moveTo(400,300);
        ps.ctx.lineTo(400,100);
        ps.ctx.lineTo(467,200);
        ps.ctx.fill();
    // ===================================
    //  NIEVE MONTAÑA 3 LEFT
      ps.ctx.beginPath();
      ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
      ps.ctx.moveTo(533,200);
      ps.ctx.lineTo(600,100);
      ps.ctx.lineTo(600,300);
      ps.ctx.fill();
    // ===================================
    //  NIEVE MONTAÑA 3 LEFT
      ps.ctx.beginPath();
      ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
      ps.ctx.moveTo(600,300);
      ps.ctx.lineTo(600,100);
      ps.ctx.lineTo(667,200);
      ps.ctx.fill();
  // ===================================
  //  NIEVE MONTAÑA 4 LEFT
    ps.ctx.beginPath();
    ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
    ps.ctx.moveTo(733,200);
    ps.ctx.lineTo(800,100);
    ps.ctx.lineTo(800,300);
    ps.ctx.fill();
  // ===================================
  //  NIEVE MONTAÑA 4 LEFT
    ps.ctx.beginPath();
    ps.ctx.fillStyle='rgba(210,210,255,'+ps.alfa+')';
    ps.ctx.moveTo(800,300);
    ps.ctx.lineTo(800,100);
    ps.ctx.lineTo(867,200);
    ps.ctx.fill()
  // ===================================
 // ===================================
  // ARBOL 1
  ps.ctx.fillStyle='rgba(100,0,20,'+ps.alfa+')';
  ps.ctx.fillRect(100,200,20,150);

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,140,25,'+ps.alfa+')';
  ps.ctx.arc(140,180,40,0,2*Math.PI);
  ps.ctx.fill();

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,110,25,'+ps.alfa+')';
  ps.ctx.arc(80,190,30,0,2*Math.PI);
  ps.ctx.fill();

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,80,25,'+ps.alfa+')';
  ps.ctx.arc(110,200,50,0,2*Math.PI);
  ps.ctx.fill();

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,50,25,'+ps.alfa+')';
  ps.ctx.arc(120,230,30,0,2*Math.PI);
  ps.ctx.fill();
// ===================================
// ===================================
//       ARBOL 2
  ps.ctx.fillStyle='rgba(100,0,20,'+ps.alfa+')';
  ps.ctx.fillRect(900,200,20,150);

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,50,25,'+ps.alfa+')';
  ps.ctx.moveTo(850,300);
  ps.ctx.lineTo(910,200);
  ps.ctx.lineTo(970,300);
  ps.ctx.fill();

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,80,25,'+ps.alfa+')';
  ps.ctx.moveTo(850,250);
  ps.ctx.lineTo(910,150);
  ps.ctx.lineTo(970,250);
  ps.ctx.fill();

  ps.ctx.beginPath();
  ps.ctx.fillStyle='rgba(0,110,25,'+ps.alfa+')';
  ps.ctx.moveTo(850,200);
  ps.ctx.lineTo(910,100);
  ps.ctx.lineTo(970,200);
  ps.ctx.fill();
  //TIERRA 1

  ps.ctx.beginPath();
  ps.ctx.fillStyle ='rgba(0,180,10,'+ps.alfa+')';
  ps.ctx.arc(0,500,250,3.15,2*Math.PI);
  ps.ctx.fill();

  //Lineas curvas
ps.ctx.beginPath();
ps.ctx.fillStyle ='rgba(0,100,10,'+ps.alfa+')';
ps.ctx.moveTo(0,500);
ps.ctx.bezierCurveTo(0,470,50,470,50,500);
ps.ctx.bezierCurveTo(50,470,100,470,100,500);
ps.ctx.bezierCurveTo(100,470,150,470,150,500);
ps.ctx.bezierCurveTo(150,470,200,470,200,500);
ps.ctx.bezierCurveTo(200,470,250,470,250,500);
ps.ctx.fill();
//TIERRA 2
ps.ctx.beginPath();
ps.ctx.fillStyle ='rgba(0,120,10,'+ps.alfa+')';
ps.ctx.arc(900,600,250,3.15,2*Math.PI);
ps.ctx.fill();
  }
}
pm.inicioPaisaje();
