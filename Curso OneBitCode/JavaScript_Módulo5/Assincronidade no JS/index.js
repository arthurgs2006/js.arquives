

const step02 = () => {
    console.log('passo 02\n')
}

console.log("Passo 01\n" )
step02()
console.log('\nPasso 03')

console.log('Passo 04');
setTimeout(() => {
    console.log("Passo 05");
}, 2 * 1000) //o JS continua o codigo, mesmo com a contagem sendo iniciada, ele termina de rodar os outros até que a contagem encerre e ele retorna ao codigo que e pedido depois de ter finalizado.

console.log("Passo 06")