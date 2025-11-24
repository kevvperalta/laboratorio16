texto = '[{"titulo":"la casa","autor":"autor a"},{"titulo":"el viaje","autor":"autor b"}]'

btn = document.getElementById('cargar')

tbody = document.querySelector('#tabla_libros tbody')

btn.addEventListener('click', function() {

    arr = JSON.parse(texto)

    tbody.innerHTML = ''

    arr.forEach(function(libro) {

        tr = document.createElement('tr')

        td1 = document.createElement('td')

        td1.textContent = libro.titulo

        td2 = document.createElement('td')

        td2.textContent = libro.autor

        tr.appendChild(td1)

        tr.appendChild(td2)

        tbody.appendChild(tr)

    })

})
