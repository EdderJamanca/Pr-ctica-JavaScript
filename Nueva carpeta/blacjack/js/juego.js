

const miModulo=(()=>{

    /** 
 * 2C = TWO OF CLUBS
 * 2D = TWO OF DIAMINDS
 * 2H =TWO OF HEARTS
 * 2S = TWO OF SPADES
 * **/
        'uset-strict';
        let deck =[];

        const   tipos =['C','D','H','S'],
                especiales =['A','J','K','Q'],
                nuevoJuego=document.querySelector('#nuevoJuego'),
                btnPedirCarta=document.querySelector('#pedirCarta'),
                detenerJuego =document.querySelector('#detenerJuego');

        // seleccionar la etiquetas del los puntajes

        const   small = document.querySelectorAll('small'),
                cartasjugador =document.querySelectorAll('.cartaImg');

        let     puntajeJugador=[];


        //inicializar juego
        const inicializarJuego =(numeroJugador=2)=>{
            desk=[];
            deck= crearDeck();
            puntajeJugador=[];
            for (let i = 0; i < numeroJugador; i++) {
                
                puntajeJugador.push(0);
                
            }
            small.forEach( elemt =>elemt.innerText=0);
            cartasjugador.forEach(elem1=>elem1.innerText='');
            btnPedirCarta.disabled=false;
            detenerJuego.disabled=false;

        }

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

            return  _.shuffle(deck);;
        }
   
        // ESTA FUNCION ME PERMITE TOMAR UNA CARTA
        const pedirCarta =()=>{

            if(deck.length===0){
            
                console.log('No hay cartas en el deck');
                return;
            }

            return deck.pop();
        }


        // VALOR CARTA 
        const valorCarta =(carta)=>{
            carta =pedirCarta();
            const valor =carta.substring(0,carta.length-1);
            return (isNaN(valor))?
                (valor==='A') ? 11:10
                :valor*1;
        }
        // ACIONES CON LOS BOTONES

        const acumularPunto =(carta,turno)=>{
            // puntaje
            puntajeJugador[turno] = puntajeJugador[turno] + valorCarta(carta);
            // ponemos puntos del jugador
            small[turno].innerText=puntajeJugador[turno];

            return puntajeJugador[turno];
        }
        // CREAR CARTA
        const crearCarta =(carta,turno)=>{

            const imgCarta=document.createElement('img');
            imgCarta.src=`assets/carta/${carta}.png`;
            imgCarta.className='carta';
            cartasjugador[turno].append(imgCarta);
        }
        // PEDIR CARTA
        btnPedirCarta.addEventListener('click',()=>{

            let carta =pedirCarta();
            
            let puntaje=acumularPunto(carta,0);
                crearCarta(carta,0);
            
            if(puntaje>21){

              
                btnPedirCarta.disabled=true;
                detenerJuego.disabled=true;
                turnoComputadora(puntaje);

            } else if(puntaje===21){

               
                btnPedirCarta.disabled=true;
                detenerJuego.disabled=true;
                turnoComputadora(puntaje);
            }
        
        })
        // DETERMINAR EL GANADOR
        const determinarGanador=()=>{

            const [minimo, punatajeComputador]=puntajeJugador;

            if(punatajeComputador==minimo){
                alert('NADIE GANA ');
            }else if(punatajeComputador>21){
                alert('USTED GANA EL JUEGO');
            }else if(minimo>21){
                alert('GANA LA COMPUTADORA');
            }else {
                alert('GANA LA COMPUTADORA');
            }

        }

        // TURNO DE COMPUTADORA
        const turnoComputadora=(minimo)=>{

            let puntaje=0;

            do{
                let carta1 =pedirCarta();
                puntaje=acumularPunto(carta1, puntajeJugador.length-1);
                crearCarta(carta1, puntajeJugador.length-1);

            }while((minimo<=21) && (puntaje<minimo));

            setTimeout(()=>{
                determinarGanador();
            },200)


        };

        detenerJuego.addEventListener("click",()=>{
            btnPedirCarta.disabled=true;
            detenerJuego.disabled=true;
            turnoComputadora(puntajeJugador[0]);
        })
        
        return {
            iniciojuego:inicializarJuego
        };

})();
