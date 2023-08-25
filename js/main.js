class pelicula{
    constructor(titulo, genero, calificacion, duracion, precio){
        this.titulo= titulo;
        this.genero= genero;
        this.calificacion= calificacion;
        this.duracion= duracion;
        this.precio= parseFloat(precio);
    }
}

const Barbie= new pelicula("Barbie", "Comedia", "ATPR", "114 min", "1800")
const TortugasNinja= new pelicula("Tortugas Ninja: Caos Mutante", "Animación, Acción, Aventura, Comedia, Ciencia Ficción", "ATPR", "100 min", "1800")
const Oppenheimer= new pelicula("Oppenheimer", "Drama, Historia", "N/A", "180 min", "1800")
const Megalodon= new pelicula("Megalodon 2", "Acción, Terror, Comedia", "P-13", "116 min", "1800")
const BlueBeetle= new pelicula("Blue Beetle", "Acción, Ciencia Ficción", "P-13", "127 min", "1800")

const peliculas=[Barbie, TortugasNinja, Oppenheimer, Megalodon, BlueBeetle]

const busquedaTitulo=prompt("Ingrese el nombre de la pelicula que desea ver. \nPeliculas en cartelera: \n\n Barbie \n Tortugas Ninja: Caos Mutante \n Oppenheimer \n Megalodon 2\n Blue Beetle \n")

const resultados = peliculas.filter(el => el.titulo.toLowerCase().includes(busquedaTitulo.toLowerCase()));

if (resultados.length > 0) {
    console.log("Películas encontradas:");
    resultados.forEach(pelicula => {
        console.log(pelicula);
    });
} else {
    console.log("Películas no encontradas");
}
