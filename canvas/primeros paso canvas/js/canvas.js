/*=============================================>>>>>
OBJETO DE PROPIEDADES DE canvas
===============================================>>>>>*/
var c = {
  canvas: document.querySelector("#lienzo"),
  ctx: null
}



/*=============================================>>>>>
OBJETO DE METODOS DE canvas
strokeStyle
===============================================>>>>>*/
var t = {
  inicioCanvas:function(){
    c.ctx=c.canvas.getContext("2d");

    // CONTORNO
    c.ctx.lineWidth=5;
    c.ctx.strokeStyle="rgba(255,0,255,1)";

    c.ctx.rect(10,10,500,100);
    c.ctx.stroke();//habilitamos el contorno

    c.ctx.rect(200,300,10,10);
    c.ctx.stroke();

    //RELLENO
    c.ctx.fillStyle="cyan";
    c.ctx.fillRect(10,10,500,100);

    /*=============================================>>>>>
    CIRCULO
    ===============================================>>>>>*/
    c.ctx.beginPath();
    //arc(x1,y1,r,starAngle,endAngle)
    c.ctx.arc(300,300,80,0,2*Math.PI);
    // RELLENO CIRCULO
    c.ctx.fillStyle="green";
    c.ctx.fill();
    // CONTORNO CIRCULO
    c.ctx.lineWidth=5;
    c.ctx.strokeStyle="rgba(255,0,255,1)";
    c.ctx.stroke();
    /*=============================================>>>>>
    LINEA
    ===============================================>>>>>*/
    c.ctx.beginPath();
    // moveTo(x,y)
      c.ctx.moveTo(0,0);
    // lineTo(x1,y2)
    c.ctx.lineTo(200,200);
    c.ctx.lineTo(400,200);
    c.ctx.lineTo(600,400);
    c.ctx.lineTo(800,200);
    c.ctx.lineTo(1000,200);
    c.ctx.lineTo(1000,0);
    //contorno LINEA
    c.ctx.lineWidth=5;
    c.ctx.strokeStyle="red";
    c.ctx.stroke();
    // RELLENO
    c.ctx.fillStyle="rgba(0,0,255,.6)";
    c.ctx.fill();
    /*=============================================>>>>>
    CURVAS
    ===============================================>>>>>*/
    c.ctx.beginPath();
    c.ctx.moveTo(0,500);

    //bezierCurveTo(cpx1,xpy1,cpx2,cpy2,x1,y2)
    c.ctx.bezierCurveTo(200,300,400,400,500,500);
    // Contorno curvo
    c.ctx.lineWidth=5;
    c.ctx.strokeStyle="rgba(100,0,0,1)";
    c.ctx.stroke();
    // RELLENO
    c.ctx.fillStyle="rgba(0,0,255,.6)";
    c.ctx.fill();
    /*=============================================>>>>>
    DEGRADADO
    ===============================================>>>>>*/
    // createLinearGradient
    var grid=c.ctx.createLinearGradient(0,300,100,300);
    grid.addColorStop(0,"red");
    grid.addColorStop(1,"yellow");
    c.ctx.fillStyle=grid;
    c.ctx.fillRect(0,300,100,100);
    // degradado lineal createRadialGradient(x1,y1,r1,x2,y2,r2)
    var grid2=c.ctx.createRadialGradient(890,350,5,900,350,120);
    grid2.addColorStop(0,"white");
    grid2.addColorStop(1,"black");
    c.ctx.beginPath();
    c.ctx.arc(900,400,100,0,7);
    c.ctx.fillStyle=grid2;
    c.ctx.fill();
  }

}
t.inicioCanvas();
