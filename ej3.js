const botonCambiar = document.getElementById("btnCambiar");

botonCambiar.addEventListener("click", () => {

    const parrafo = document.getElementById("texto");

    parrafo.textContent = "Texto cambiado";

});
