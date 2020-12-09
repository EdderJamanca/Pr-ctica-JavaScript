/*=============================================>>>>>
                CICLO FOR
===============================================>>>>>*/

var cajas=document.querySelectorAll(".cajas");
console.log("cajas",cajas);

for ( var i=0; i<cajas.length; i++){
  cajas[i].style.width="150px";
  cajas[i].style.height="150px";
  cajas[i].style.background="blue";
  cajas[i].style.marginTop="5px";
}
/*=============================================>>>>>
                CICLO while
===============================================>>>>>*/

var a=1;

while( a <=5){
  console.log(a);
  a++;
}
/*=============================================>>>>>
                CICLO DO while
===============================================>>>>>*/

var n=1;

do{
  console.log(n);
  a++;
}while( a <=10)
