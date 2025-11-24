datos = {
    'nombre': 'kevin',
    'correo': 'kperaltal@unsa.edu.pe',
    'rol': 'alumno'
}

btn_guardar = document.getElementById('guardar')

btn_cargar = document.getElementById('cargar')

salida = document.getElementById('salida')

btn_guardar.addEventListener('click', function() {

    texto = JSON.stringify(datos)

    localStorage.setItem('usuario', texto)

    salida.textContent = 'guardado'

})

btn_cargar.addEventListener('click', function() {

    texto = localStorage.getItem('usuario')

    if (texto) {

        obj = JSON.parse(texto)

        salida.textContent =
            'nombre: ' + obj.nombre +
            ' correo: ' + obj.correo +
            ' rol: ' + obj.rol

    } else {

        salida.textContent = 'no hay datos'

    }

})
