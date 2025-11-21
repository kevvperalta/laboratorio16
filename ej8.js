const formulario = document.getElementById("form");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const erroresPrevios = document.querySelectorAll(".error");

    erroresPrevios.forEach((err) => {

        err.remove();

    });

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");

    let valido = true;

    if (nombre.value.trim() === "") {

        const spanError = document.createElement("span");

        spanError.textContent = "Requerido";

        spanError.className = "error";

        nombre.after(spanError);

        valido = false;

    }

    if (correo.value.trim() === "") {

        const spanError = document.createElement("span");

        spanError.textContent = "Requerido";

        spanError.className = "error";

        correo.after(spanError);

        valido = false;

    }

    if (valido) {

        alert("Formulario válido");

    }

});
