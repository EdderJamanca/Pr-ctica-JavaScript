var tiempo =document.querySelector("#tiempo");
var segundo=0;
/*=============================================>>>>>
                  SET INTERVAL
===============================================>>>>>*/

var intervalo= setInterval(function(){
  segundo++;
  tiempo.innerHTML=segundo;
},1000)

/*=============================================<<<<<*/
/*=============================================>>>>>
                  SET TIME OUT
===============================================>>>>>*/

setTimeout(function(){
  clearInterval(intervalo);
},5000)

/*=============================================<<<<<*/
