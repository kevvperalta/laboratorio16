productos = [
    { 'nombre': 'laptop', 'precio': 3500 },
    { 'nombre': 'mouse', 'precio': 80 },
    { 'nombre': 'teclado', 'precio': 120 }
]

btn = document.getElementById('accion')

lista = document.getElementById('lista_productos')

btn.addEventListener('click', function() {

    texto = JSON.stringify(productos)

    obj = JSON.parse(texto)

    lista.innerHTML = ''

    obj.forEach(function(p) {

        li = document.createElement('li')

        li.textContent = p.nombre

        lista.appendChild(li)

    })

})
