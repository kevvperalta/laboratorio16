input_nombre = document.getElementById('nombre')

btn = document.getElementById('guardar')

btn.addEventListener('click', function() {

    persona = {
        'nombre': input_nombre.value.trim()
    }

    texto = JSON.stringify(persona)

    console.log(texto)

})
