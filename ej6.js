let valor = 0;

const spanValor = document.getElementById("valor");
const mensaje = document.getElementById("msg");

const botonMas = document.getElementById("mas");
const botonMenos = document.getElementById("menos");

botonMas.addEventListener("click", () => {

    valor++;

    spanValor.textContent = valor;

    mensaje.textContent = "";

});

botonMenos.addEventListener("click", () => {

    if (valor > 0) {

        valor--;

        spanValor.textContent = valor;

        mensaje.textContent = "";

    } else {

        mensaje.textContent = "No puede bajar de 0";

    }

});
