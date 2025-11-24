cadena = '{"nombre":"carlos","edad":30,"ciudad":"arequipa"}'

objeto = JSON.parse(cadena)

salida = document.getElementById('salida')

salida.textContent = 'valor: ' + objeto.nombre
