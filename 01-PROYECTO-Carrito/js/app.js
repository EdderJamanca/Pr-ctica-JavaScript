// La Variable 

const carrito = document.querySelector('#carrito');
const listaCurso =document.querySelector('#lista-cursos');
const contenidoCarrito= document.querySelector('#lista-carrito tbody');
const vaciarCarrito= document.querySelector('#vaciar-carrito');
let articulosCarrito=[];

// ejecución de la funcion principal
cargarInicioCarrito();

// función principal

function cargarInicioCarrito(){

    // disparar cuando se precione "agregar carrito"
    listaCurso.addEventListener('click', agregarCurso);
    // eliminar un curso del carrito
    carrito.addEventListener('click',eliminarcurso);
    // vaciar el curso 
    vaciarCarrito.addEventListener('click',limpiarTodoCarrito);

}

function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){

        const curso =e.target.parentNode.parentNode;
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(cardCurso){

    const infocurso={

        image:cardCurso.querySelector('img').src,
        nombre:cardCurso.querySelector('.info-card h4').innerText,
        precio:cardCurso.querySelector('.precio span').textContent,
        id: cardCurso.querySelector('.agregar-carrito').getAttribute('data-id'),
        cantidad:1,

    }

    if(articulosCarrito.some(curso=> curso.id === infocurso.id)){

       const curso= articulosCarrito.map(curso => {

            if(curso.id === infocurso.id){
                curso.cantidad++;
                return curso;
            }else {
                return curso;
            }
       })
       articulosCarrito=[...curso]
        
    }else {
        articulosCarrito=[...articulosCarrito,infocurso];
    }

    agregarCursoCarrito();
}

function agregarCursoCarrito(e){


    limpiarCarrito();
    articulosCarrito.forEach(curso => {
        const {image,nombre,precio,id,cantidad } =curso;
        const row=document.createElement('tr');
        row.innerHTML=`<td> <img src="${image}" style="width:100%;"  /> </td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        contenidoCarrito.appendChild(row);
    });

}

function limpiarCarrito(){
    // contenidoCarrito.innerHTML='';
    while(contenidoCarrito.firstChild){
        contenidoCarrito.removeChild(contenidoCarrito.firstChild);
    }
    //      while(contenedorCarrito.firstChild) {
//           contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//       }
}

function eliminarcurso(e){


    if(e.target.classList.contains('borrar-curso')){
        e.preventDefault();
        const idcurso=e.target.getAttribute('data-id');
        articulosCarrito=articulosCarrito.filter(curso=> curso.id !==idcurso);
        agregarCursoCarrito();
    }

}
function limpiarTodoCarrito(e){
    e.preventDefault();
    articulosCarrito=[];
    agregarCursoCarrito();
}

