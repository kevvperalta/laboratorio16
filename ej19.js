obj = {
    'nombre': 'kevin',
    'edad': 19
}

btn = document.getElementById('accion')

salida = document.getElementById('salida')

btn.addEventListener('click', function() {

    texto = JSON.stringify(obj)

    dato = JSON.parse(texto)

    dato.edad = 29

    actualizado = JSON.stringify(dato)

    salida.textContent = 'json: ' + actualizado

})
