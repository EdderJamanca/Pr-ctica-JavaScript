/*=============================================>>>>>
OBJETO CON LAS PROPIEDADES CON LA CALCULADORA
===============================================>>>>>*/
 var p = {

    teclas:document.querySelectorAll(".calculadora ul li"),
    accion:null,
    digito:null,
    operaciones:document.querySelector(".operaciones"),
    cantidadSigno:0,
    cantidadDecimal:false,
    rsultado:false

 }




/*=============================================>>>>>
OBJETO CON LOS METODOS CON LA CALCULADORA
===============================================>>>>>*/
var m ={

    inicio:function(){

        for(var i=0;i<p.teclas.length; i++){
            p.teclas[i].addEventListener("click",m.oprimirTecla)
        }

    },
    teclado:function(){
      document.addEventListener("keydown",m.oprimir)
    },
    oprimir:function(teclaPrecionado){

        if(teclaPrecionado.keyCode==96 || teclaPrecionado.keyCode==48){
          accion="numero";
          digito=0;
        }
        else if(teclaPrecionado.keyCode==97 || teclaPrecionado.keyCode==49){
          accion="numero";
          digito=1;
        }
         else if(teclaPrecionado.keyCode==98 || teclaPrecionado.keyCode==50){
          accion="numero";
          digito=2;
        }
        else if(teclaPrecionado.keyCode==99 || teclaPrecionado.keyCode==51){
          accion="numero";
          digito=3;
        }
        else if(teclaPrecionado.keyCode==100 || teclaPrecionado.keyCode==52){
          accion="numero";
          digito=4;
        }
        else if(teclaPrecionado.keyCode==101 || teclaPrecionado.keyCode==53){
          accion="numero";
          digito=5;
        }
        else if(teclaPrecionado.keyCode==102 || teclaPrecionado.keyCode==53){
          accion="numero";
          digito=6;
        }
        else if(teclaPrecionado.keyCode==103 || teclaPrecionado.keyCode==54){
          accion="numero";
          digito=7;
        }
        else if(teclaPrecionado.keyCode==104 || teclaPrecionado.keyCode==55){
          accion="numero";
          digito=8;
        }
        else if(teclaPrecionado.keyCode==105 || teclaPrecionado.keyCode==56){
          accion="numero";
          digito=9;
        }
        else if(teclaPrecionado.keyCode==100 || teclaPrecionado.keyCode==52){
          accion="numero";
          digito=4;
        }
        else if(teclaPrecionado.keyCode==107 || teclaPrecionado.keyCode==187){
          accion="signo";
          digito="+";
        }
        else if(teclaPrecionado.keyCode==109 || teclaPrecionado.keyCode==189){
          accion="signo";
          digito="-";
        }
        else if(teclaPrecionado.keyCode==106 || teclaPrecionado.keyCode==88){
          accion="signo";
          digito="*";
        }
        else if(teclaPrecionado.keyCode==111){
          accion="signo";
          digito="/";
        }
        else if(teclaPrecionado.keyCode==110 || teclaPrecionado.keyCode==190){
          accion="signo";
          digito=".";
        }
        else if(teclaPrecionado.keyCode==13){
          accion="igual";
          digito="=";
        }
        else if(teclaPrecionado.keyCode==8){
          accion="";
          m.borrar();
        }else {
          accion="";
          digito="";
        }
        m.calculadora(accion,digito)
    },
    oprimirTecla: function(hola){
      p.accion= hola.target.getAttribute("class");
      p.digito= hola.target.innerHTML;

      m.calculadora(p.accion,p.digito)
    },
    calculadora:function(accion, digito){

            switch (accion) {
              case "numero":
                    p.cantidadSigno = 0
                    if (p.operaciones.innerHTML == "0") {
                      p.operaciones.innerHTML=digito;
                    }else {
                      console.log(p.resultado);

                            if(p.resultado){

                                p.resultado=false
                                p.operaciones.innerHTML=0;

                            }else{
                              p.operaciones.innerHTML +=digito
                            }
                    }

                break;
              case "signo":

                      p.cantidadSigno++

                      if(p.cantidadSigno == "1"){
                            if(p.operaciones.innerHTML == "0"){
                                p.operaciones.innerHTML=0;
                            }else if(p.cantidadDecimal){

                                  p.operaciones.innerHTML += 0;
                                    p.cantidadSigno = 0;
                                  p.cantidadDecimal=false;

                            }else {
                              p.operaciones.innerHTML +=digito
                              p.cantidadDecimal=false
                              p.resultado=false
                            }

                      }

                break;
              case "igual":
                      p.operaciones.innerHTML= eval(p.operaciones.innerHTML)

                        var expresion= /./g;
                      if(!expresion.test(p.operaciones.innerHTML)){
                        p.cantidadDecimal=true;
                      }

                      p.resultado=true
                break;
              case "decimal":

                    if(!p.cantidadDecimal && p.cantidadSigno!= 1){
                       p.operaciones.innerHTML +=digito;
                       p.cantidadDecimal=true;
                       console.log("p.cantidadDecimal", p.cantidadDecimal);
                       p.resultado=false;
                    }

                break;
              default:

            }
    },
    borrar:function(){
        p.cantidadDecimal=false
        p.resultado=false
        p.operaciones.innerHTML=0;
    }

}
m.inicio();
m.teclado();
