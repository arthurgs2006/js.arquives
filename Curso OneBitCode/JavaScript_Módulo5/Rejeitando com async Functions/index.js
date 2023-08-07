async function asygnSum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number')
        return Promise.reject('arguments must be of type number')
    return a+b //ele retorna uma promise automaticamente, não sendo necessario todo aquele processo.
}

function asygnSubtract(a, b){
    if(typeof a !== 'number' || typeof b !== 'number')
        return Promise.reject('arguments must be of type number') //utilizando o obj global, colocamos o reject
    return a-b
}

const sum = asygnSum(50, 50);
const subtract = asygnSubtract(35, 2);

//Promise é o objeto global para todas as promises, com o método all, ele criará um array que retornara outra promise...
Promise.all([sum, subtract]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err);
})
