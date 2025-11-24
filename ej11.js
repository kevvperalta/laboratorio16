lista = document.getElementById('lista')

lista.addEventListener('click', function(e) {

    objetivo = e.target

    if (objetivo && objetivo.tagName === 'LI') {

        objetivo.remove()

    }

})
