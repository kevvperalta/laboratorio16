const lista = document.getElementById("lista");

const botonAgregar = document.getElementById("agregar");
const botonBorrar = document.getElementById("borrar");

botonAgregar.addEventListener("click", () => {

    const textoInput = document.getElementById("texto");

    const texto = textoInput.value.trim();

    if (texto !== "") {

        const nuevoItem = document.createElement("li");

        nuevoItem.textContent = texto;

        lista.appendChild(nuevoItem);

    }

});

botonBorrar.addEventListener("click", () => {

    const ultimo = lista.lastChild;

    if (ultimo) {

        lista.removeChild(ultimo);

    }

});
