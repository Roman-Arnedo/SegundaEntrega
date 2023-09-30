const carritoContenedor = document.querySelector("#carritoContenedor");

function cargarProductos() {
    const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

    if (productosEnCarrito && productosEnCarrito.length > 0) {
        document.querySelector("#carritoVacio").classList.add("disabled");
        carritoContenedor.innerHTML = "";

        productosEnCarrito.forEach(pelicula => {
            const div = document.createElement("div");
            div.classList.add("divcarro");
            div.innerHTML = `
                <div class="contenedorImgCarro">
                    <img class="imgCarro" src="${pelicula.img}" alt="Imagen del producto agregado">
                </div>
                <div class="divCarrito-contenedor">
                    <small>Titulo</small>
                    <p>${pelicula.titulo}</p>
                </div>
                <div class="divCarrito-contenedor">
                    <small>Cantidad</small>
                    <p>${pelicula.cantidad}</p>
                </div>
                <div class="divCarrito-contenedor">
                    <small>Género</small>
                    <p>${pelicula.genero}</p>
                </div>
                <div class="divCarrito-contenedor">
                    <small>Precio</small>
                    <p>${pelicula.precio}</p>
                </div>
                <div class="divCarrito-contenedor">
                    <small>Subtotal</small>
                    <p>${pelicula.precio * pelicula.cantidad}</p>
                </div>
                <div>
                    <button class="botonEliminar" id="${pelicula.id}">ELIMINAR</button>
                </div>
            `;
            carritoContenedor.append(div);
        });
    } else {
        document.querySelector("#carritoVacio").classList.remove("disabled");
        carritoContenedor.innerHTML = "";
    }

    
}

function EliminarDelCarrito(e) {
    const idBoton = e.target.id;
    let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
    const index = productosEnCarrito.findIndex(pelicula => pelicula.id === idBoton);

    if (index !== -1) {
        if (productosEnCarrito[index].cantidad > 1) {
            productosEnCarrito[index].cantidad -= 1;
        } else {
            productosEnCarrito.splice(index, 1);
        }

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 
        cargarProductos();
    }
}


carritoContenedor.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("botonEliminar")) {
        EliminarDelCarrito(e);
    }
});

cargarProductos();

function FinalizarCompra() {
    const botonFinalizar = document.querySelector("#btnEnd");

    if (botonFinalizar) {
        botonFinalizar.addEventListener("click", compraFinalizada);
    }
}

function compraFinalizada() {
    const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

    if (productosEnCarrito && productosEnCarrito.length > 0) {
        localStorage.removeItem('productos-en-carrito');
        cargarProductos();
        Toastify({
            text: "Compra realizada con éxito",
            duration: 3000
        }).showToast();
    } else {
        Toastify({
            text: "No has agregado productos al carrito",
            duration: 3000
        }).showToast();
    }
}

FinalizarCompra();