const parrafo = document.getElementById("texto");

let cambiado = false;

const botonCambiar = document.getElementById("btnCambiar");

botonCambiar.addEventListener("click", () => {

    cambiado = !cambiado;

    if (cambiado) {
        parrafo.textContent = "Texto cambiado";
    } else {
        parrafo.textContent = "Texto original";
    }

});
