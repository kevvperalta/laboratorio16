caja = document.getElementById('caja')
btn_m = document.getElementById('btn_mover')
btn_r = document.getElementById('btn_reiniciar')

btn_m.addEventListener('click', function() {

    caja.classList.add('mover')

})

btn_r.addEventListener('click', function() {

    caja.classList.remove('mover')

})
