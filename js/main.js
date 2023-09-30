class Pelicula {
    constructor(id, img, titulo, genero, calificacion, duracion, precio) {
        this.id = id;
        this.img = img;
        this.titulo = titulo;
        this.genero = genero;
        this.calificacion = calificacion;
        this.duracion = duracion;
        this.precio = precio;
    }
}

const Barbie = new Pelicula("1", "./img/bar.jpg", "Barbie", "Comedia", "ATPR", "114 min", "1800");
const TortugasNinja = new Pelicula("2", "./img/tor.jpg", "Tortugas Ninja: Caos Mutante", "Animación, Acción, Aventura, Comedia, Ciencia Ficción", "ATPR", "100 min", "1800");
const Oppenheimer = new Pelicula("3", "./img/opp.jpg", "Oppenheimer", "Drama, Historia", "N/A", "180 min", "1800");
const Megalodon = new Pelicula("4", "./img/meg.jpg", "Megalodon 2", "Acción, Terror, Comedia", "P-13", "116 min", "1800");
const BlueBeetle = new Pelicula("5", "./img/blb.jpg", "Blue Beetle", "Acción, Ciencia Ficción", "P-13", "127 min", "1800");
const Monja = new Pelicula("6", "./img/mon.jpg", "La Monja 2", "Terror", "P-13", "109 min", "1800");
const Indest = new Pelicula("7", "./img/inde.jpg", "Los indestructibles 4", "Acción", "P13R", "104 min", "1800");
const Paw = new Pelicula("8", "./img/paw.jpg", "Paw Patrol: La Super Pelicula", "Animación, Familia, Comedia", "ATP", "92 min", "1800");
const Ast = new Pelicula("9", "./img/ast.jpg", "Asteroid City", "Comedia, Drama", "P-13", "105 min", "1800");
const Aft = new Pelicula("10", "./img/aft.jpg", "After: Para Siempre", "Romance, Drama", "N/A", "90 min", "1800");


const peliculas = [];
peliculas.push(Barbie, TortugasNinja, Oppenheimer, Megalodon, BlueBeetle, Monja, Indest, Paw, Ast, Aft)

function busqueda(arr, peli) {
    const respuesta = arr.filter((el) => el.titulo.toLowerCase().includes(peli));
    return respuesta;
}

function crearCarta(el) {
    const container = document.querySelector("#container");
    let html = `
        <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="${el.titulo}" style="max-width: auto; height: 350px; border-radius: 30px; margin-bottom: 20px;">
            <div class="card-body">
                <h5 class="card-title">${el.titulo}</h5>
                <p class="card-text" style= font-size:14px;>Precio: ${el.precio}</p>
                <p class="card-text" style= font-size:14px;>Genero: ${el.genero}</p>
                <p class="card-text" style= font-size:14px;>Duracion: ${el.duracion}</p>
                <p class="card-text" style= font-size:14px;>Clascificacion: ${el.calificacion}</p>
            </div>
        </div>`;
    container.innerHTML = html;
}


const searchButton = document.querySelector("#botonbuscar");
const input = document.querySelector("input");



searchButton.addEventListener("click", () => {
    const ingreso = input.value.toLowerCase();
    
    if (ingreso.trim() !== ""){
    const peliculasEncontradas = busqueda(peliculas, ingreso);
    
    if (peliculasEncontradas.length > 0) {
        crearCarta(peliculasEncontradas[0]);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Pelicula no encontrada',
            text: 'Intenta nuevamente!',
            footer: 'Asegurate de estar escribiendo un titulo valido'
          })
    }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Campo de búsqueda vacío',
            text: 'Por favor, ingresa el título de una película antes de buscar.',
            footer: 'Asegúrate de no dejar el campo en blanco.'
        });
    }
});

let carrito;

const productosEnCarritoLs= JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLs){
    carrito = productosEnCarritoLs
} else{
    carrito=[]
}



const botonesCartel = document.querySelectorAll(".btnCartel");

botonesCartel.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const peliculaAgregada = peliculas.find(pelicula => pelicula.id === idBoton);
    
    if (carrito.some(pelicula => pelicula.id === idBoton)) {
        const index = carrito.findIndex(pelicula => pelicula.id === idBoton);
        carrito[index].cantidad++;
    } else {
        peliculaAgregada.precio = parseFloat(peliculaAgregada.precio);
        peliculaAgregada.cantidad = 1;
        carrito.push(peliculaAgregada);
    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
    Toastify({
        text: "Agregaste un producto al carrito",
        duration: 2000,
        gravity: "top",
        position: "center",
    }).showToast();
}