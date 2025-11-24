form = document.getElementById('form')

perfil = document.getElementById('perfil')

function mostrar_guardado() {

    texto = localStorage.getItem('perfil')

    if (texto) {

        obj = JSON.parse(texto)

        perfil.textContent =
            'nombre: ' + obj.nombre +
            ' edad: ' + obj.edad +
            ' pais: ' + obj.pais

    } else {

        perfil.textContent = 'no hay perfil guardado'

    }

}

form.addEventListener('submit', function(e) {

    e.preventDefault()

    nombre = document.getElementById('nombre').value.trim()

    edad = document.getElementById('edad').value.trim()

    pais = document.getElementById('pais').value.trim()

    obj = {
        'nombre': nombre,
        'edad': edad,
        'pais': pais
    }

    texto = JSON.stringify(obj)

    localStorage.setItem('perfil', texto)

    mostrar_guardado()

})

document.addEventListener('DOMContentLoaded', function() {

    mostrar_guardado()

})
