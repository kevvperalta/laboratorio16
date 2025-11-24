texto = '[{"titulo":"tarea 1","completada":true},{"titulo":"tarea 2","completada":false}]'

btn = document.getElementById('cargar')

lista = document.getElementById('tareas')

btn.addEventListener('click', function() {

    arr = JSON.parse(texto)

    lista.innerHTML = ''

    arr.forEach(function(t) {

        li = document.createElement('li')

        li.textContent = t.titulo

        if (t.completada) {
            li.classList.add('completada')
        }

        lista.appendChild(li)

    })

})
