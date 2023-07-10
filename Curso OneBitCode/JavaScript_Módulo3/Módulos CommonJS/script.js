
const render = require('./render')
const s = require('./store')
//Primeira forma de exportar ou importar módulos
console.log('Carregando...')
render()
s()
console.log("Carregamento completo!")