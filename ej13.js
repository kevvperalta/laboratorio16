form = document.getElementById('form')
cuerpo = document.querySelector('#tabla tbody')

usuarios = []
contador = 1

form.addEventListener('submit', function(e) {

    e.preventDefault()

    n = document.getElementById('nombre').value.trim()
    e2 = document.getElementById('edad').value.trim()

    if (n === '' || e2 === '') {
        return
    }

    obj = {
        id: contador,
        nombre: n,
        edad: e2
    }

    usuarios.push(obj)

    contador = contador + 1

    dibujar()

    form.reset()

})

function dibujar() {

    cuerpo.innerHTML = ''

    usuarios.forEach(function(u) {

        fila = document.createElement('tr')

        c1 = document.createElement('td')
        c1.textContent = u.nombre

        c2 = document.createElement('td')
        c2.textContent = u.edad

        c3 = document.createElement('td')

        b1 = document.createElement('button')
        b1.textContent = 'editar'
        b1.dataset.id = u.id

        b2 = document.createElement('button')
        b2.textContent = 'borrar'
        b2.dataset.id = u.id

        c3.appendChild(b1)
        c3.appendChild(b2)

        fila.appendChild(c1)
        fila.appendChild(c2)
        fila.appendChild(c3)

        cuerpo.appendChild(fila)

    })

}

document.getElementById('tabla').addEventListener('click', function(e) {

    if (e.target.tagName === 'BUTTON') {

        id = parseInt(e.target.dataset.id)

        if (e.target.textContent === 'borrar') {

            usuarios = usuarios.filter(function(x) {
                return x.id !== id
            })

            dibujar()

        } else {

            item = usuarios.find(function(x) {
                return x.id === id
            })

            nuevo = prompt('nuevo nombre', item.nombre)
            nueva_edad = prompt('nueva edad', item.edad)

            if (nuevo !== null && nueva_edad !== null) {

                item.nombre = nuevo
                item.edad = nueva_edad

                dibujar()

            }

        }

    }

})
