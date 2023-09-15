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

const Barbie = new Pelicula("1", "./img/bar.jpg", "Barbie", "Comedia", "ATPR", "114 min", "$1800");
const TortugasNinja = new Pelicula("2", "./img/tor.jpg", "Tortugas Ninja: Caos Mutante", "Animación, Acción, Aventura, Comedia, Ciencia Ficción", "ATPR", "100 min", "$1800");
const Oppenheimer = new Pelicula("3", "./img/opp.jpg", "Oppenheimer", "Drama, Historia", "N/A", "180 min", "$1800");
const Megalodon = new Pelicula("4", "./img/meg.jpg", "Megalodon 2", "Acción, Terror, Comedia", "P-13", "116 min", "$1800");
const BlueBeetle = new Pelicula("5", "./img/blb.jpg", "Blue Beetle", "Acción, Ciencia Ficción", "P-13", "127 min", "$1800");

const peliculas = [Barbie, TortugasNinja, Oppenheimer, Megalodon, BlueBeetle];

function busqueda(arr, peli) {
    const respuesta = arr.filter((el) => el.titulo.toLowerCase().includes(peli));
    return respuesta;
}

function crearCarta(el) {
    const container = document.querySelector("#container");
    let html = `
        <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="${el.titulo}" style="max-width: auto; height: 350px; border-radius: 30px;">
            <div class="card-body">
                <h5 class="card-title">${el.titulo}</h5>
                <p class="card-text">Precio= ${el.precio}</p>
                <div class="btn-cont">
                    <button class="btn-card">Comprar</button>
                </div>
            </div>
        </div>`;
    container.innerHTML = html;
}

const searchButton = document.querySelector("#botonbuscar");
const input = document.querySelector("input");

searchButton.addEventListener("click", () => {
    const ingreso = input.value.toLowerCase();
    const peliculasEncontradas = busqueda(peliculas, ingreso);
    
    if (peliculasEncontradas.length > 0) {
        crearCarta(peliculasEncontradas[0]);
    } else {
        alert("No se encontraron películas.");
    }
});

function guardarValor() {
    const valor=prompt("Cual es tu snack preferido?");
    localStorage.setItem("miValor", valor);
    alert("A continuacion te vamos a dar un snack de regalo");
}

function recuperarValor() {
    const valorRecuperado = localStorage.getItem("miValor");
    if (valorRecuperado) {
        document.getElementById("resultado").textContent ="Tu Snack favorito de regalo:"+valorRecuperado;
    } else {
        alert("No se encontró ningún valor en localStorage.");
    }}

