const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach((imagen) => {

    imagen.addEventListener("click", () => {

        const imagenGrande = document.getElementById("img-grande");

        imagenGrande.src = imagen.src;

    });

});
