
(()=>{
    const personajes =['ana','maria'];
})();
(()=>{

    /** 
 * 2C = TWO OF CLUBS
 * 2D = TWO OF DIAMINDS
 * 2H =TWO OF HEARTS
 * 2S = TWO OF SPADES
 * **/

 let deck =[];

 const tipos =['C','D','H','S'];
 const especiales =['A','J','K','Q'];

//  ODTEER LOS BOTONES
const nuevoJuego=document.querySelector('#nuevoJuego');
const btnPedirCarta=document.querySelector('#pedirCarta');
const detenerJuego =document.querySelector('#detenerJuego');

// seleccionar la etiquetas del los puntajes

const small = document.querySelectorAll('small');
let puntajeJugador=0;
let punatajeComputador=0;

// las cartas por el jugador
const cartasjugador =document.querySelector('#jugador-cartas');
// las cartas por la computadora
const cartasComputador =document.querySelector("#computadora-cartas");

 const crearDeck =()=>{

    for (let i = 2; i<=10; i++) {
        
        for (const tipo of tipos) {

            deck.push(i+tipo);

        }
    }
    for (const tipo of tipos) {
        for (const especial of especiales) {

            deck.push(especial+tipo );
            
        }
        
    }

    deck=_.shuffle(deck);

    return deck;
 }
 crearDeck();
// ESTA FUNCION ME PERMITE TOMAR UNA CARTA
const pedirCarta =()=>{

    if(deck.length===0){
       
       console.log('No hay cartas en el deck');
       return;
    }
    const carta =deck.pop();

    return carta;
}


// PEDIR CARTA 
const valorCarta =(carta)=>{
      carta =pedirCarta();
    const valor =carta.substring(0,carta.length-1);
    return (isNaN(valor))?
        (valor==='A') ? 11:10
        :valor*1;
}
// ACIONES CON LOS BOTONES

btnPedirCarta.addEventListener('click',()=>{

    let carta =pedirCarta();
    let cartaSeleccionada =valorCarta(carta);


    if(puntajeJugador<=21){

        // puntaje
        puntajeJugador = puntajeJugador + cartaSeleccionada;
        // ponemos puntos del jugador
        small[0].innerText=puntajeJugador;
        //agregar las cartas al documento


        const imgCarta=document.createElement('img');
        imgCarta.src=`assets/carta/${carta}.png`;
        imgCarta.className='carta';
        cartasjugador.append(imgCarta);
    

    }

    if(puntajeJugador>21){
        turnoComputadora(puntajeJugador);

            btnPedirCarta.disabled=true;
            detenerJuego.disabled=true;

    } else if(puntajeJugador===21){
        turnoComputadora(puntajeJugador);
        btnPedirCarta.disabled=true;
        detenerJuego.disabled=true;
    }



   
})

const turnoComputadora=(minimo)=>{



    do{
        let carta1 =pedirCarta();
        let cartaSeleccionada1 =valorCarta(carta1);
        punatajeComputador=punatajeComputador + cartaSeleccionada1;
        small[1].innerText=punatajeComputador;

        const imgComputadora=document.createElement('img');
        imgComputadora.src=`assets/carta/${carta1}.png`;
        imgComputadora.className='carta';
        cartasComputador.append(imgComputadora);
        if(minimo>21){
            break;
        }

    }while((punatajeComputador<=21) && (punatajeComputador<minimo));

    setTimeout(()=>{
        if(punatajeComputador==minimo){
            alert('NADIE GANA ()');
        }else if(punatajeComputador>minimo){
            alert('GANA LA COMPUTADORA');
        }else {
            alert('USTED GANA EL JUEGO');
        }
    },200)


};

detenerJuego.addEventListener("click",()=>{
    btnPedirCarta.disabled=true;
    detenerJuego.disabled=true;
    turnoComputadora(puntajeJugador);
})
// NUEVO JUEGO
nuevoJuego.addEventListener('click',()=>{
    console.clear();
    deck = [];
    deck=crearDeck();
    console.log(deck);
    btnPedirCarta.disabled=false;
    detenerJuego.disabled=false;
    small[0].innerText='';
    small[1].innerText='';
    cartasComputador.innerHTML='';
    cartasjugador.innerHTML='';
})

})();
