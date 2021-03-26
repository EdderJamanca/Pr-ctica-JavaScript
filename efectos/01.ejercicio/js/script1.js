/*=============================================
=    OBJETOS CON PORPIEDADES DEL SLIDER      
=============================================*/

var propiedadesBanner = {

	paginacion:document.querySelectorAll("#paginacion li"), // obtenemos todos los LI
	cajaSlide:document.querySelector("#slide ul"), //contenedor de Imagen
	animacionSlide:"fade", //El nombre del efecto Al Slide
	imgSlide:document.querySelectorAll("#slide ul li"), // total de las imagenes
	retroceder:document.querySelector("#retroceder"),
	avanzar:document.querySelector("#avanzar"),
	velocidadSlide:3000,
	formatearLopp:false,
	item:0
	
}


// console.log("propiedadesBanner.paginacion", propiedadesBanner.paginacion);

// console.log("cajaSlide", propiedadesBanner.cajaSlide);

// console.log("imgSlide", propiedadesBanner.imgSlide);


// console.log("retroceder", propiedadesBanner.retroceder);

// console.log("avanzar", propiedadesBanner.avanzar);

/*=============================================
=          OBJETO CON METODO DEL SLIDE      =
=============================================*/

var metodoBanner = {

	//nombre de la funcion| function(){}
	inicioSlide: function(){

		for (var i = 0; i<propiedadesBanner.paginacion.length; i++) {

			propiedadesBanner.paginacion[i].addEventListener("click",metodoBanner.paginacionSlide);
			//definimos el ancho de cada li
			propiedadesBanner.imgSlide[i].style.width=(100/propiedadesBanner.paginacion.length)+"%";
		}
		propiedadesBanner.cajaSlide.style.width=(propiedadesBanner.paginacion.length*100)+"%";//redefinimos el ancho del contenedor ul
		propiedadesBanner.avanzar.addEventListener("click",metodoBanner.avanzarBanner);
		propiedadesBanner.retroceder.addEventListener("click",metodoBanner.retrocederBanner);

		metodoBanner.movimientoAutomatico();

	},
	avanzarBanner:function(){

		if(propiedadesBanner.item==propiedadesBanner.imgSlide.length-1){

			propiedadesBanner.item=0;

		}else {
			propiedadesBanner.item++;
		}

		
		metodoBanner.movimiento(propiedadesBanner.item);

	},
	retrocederBanner:function(){

		if(propiedadesBanner.item==0){

			propiedadesBanner.item=propiedadesBanner.imgSlide.length-1;

		}else {

			propiedadesBanner.item--;

		}

		metodoBanner.movimiento(propiedadesBanner.item);

	},
	paginacionSlide:function(event){

		propiedadesBanner.item=event.target.parentNode.getAttribute("item")-1;

		// console.log("event", item);
		// enviamos el item
		metodoBanner.movimiento(propiedadesBanner.item);

	},
	movimiento:function(item){

		propiedadesBanner.formatearLopp=true;

		propiedadesBanner.cajaSlide.style.left=item*(-100)+"%";

		for (var i = 0; i < propiedadesBanner.paginacion.length; i++) {

			propiedadesBanner.paginacion[i].style.opacity=0.5;

		}
		propiedadesBanner.paginacion[item].style.opacity=1;
		if(animacionSlide=="slide"){

		propiedadesBanner.cajaSlide.style.transition=".7s left ease-in-out";

		}
		if(animacionSlide=="fade"){

				for (var i = 0; i < propiedadesBanner.imgSlide.length; i++) {

						propiedadesBanner.imgSlide[i].style.opacity=0;

					}
				 propiedadesBanner.imgSlide[item].style.transition=".8s opacity eade-in-out";
				 setTimeout(function(){

	              propiedadesBanner.imgSlide[item].style.opacity=1;
	            },50);

		}


	},
	movimientoAutomatico: function(){

		setInterval(function(){

			if(propiedadesBanner.formatearLopp){

				propiedadesBanner.formatearLopp=false;

			}else {


				metodoBanner.avanzarBanner();

			}


		}, propiedadesBanner.velocidadSlide)

	}
}

metodoBanner.inicioSlide(); //se ejecuta el Metodo


