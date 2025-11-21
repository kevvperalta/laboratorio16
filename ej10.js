const productos = [

    { nombre: "Laptop", precio: 3500 },

    { nombre: "Mouse", precio: 80 }

];

const botonCrear = document.getElementById("crear");

botonCrear.addEventListener("click", () => {

    const contenedor = document.getElementById("contenedor");

    contenedor.innerHTML = "";

    const tabla = document.createElement("table");

    const encabezado = document.createElement("tr");

    encabezado.innerHTML = `
        <th>Nombre</th>
        <th>Precio</th>
    `;

    tabla.appendChild(encabezado);

    productos.forEach((producto) => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        `;

        tabla.appendChild(fila);

    });

    contenedor.appendChild(tabla);

});
