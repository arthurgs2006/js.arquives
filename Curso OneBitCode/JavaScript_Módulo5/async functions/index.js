//async
async function asygnSum(a, b){
    return a+b //ele retorna uma promise automaticamente, não sendo necessario todo aquele processo.
}

function asygnSubtract(a, b){
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

const numbers = [1, 2, 2,4, 9, 108, 31, 12]
async function asygnSquare(x){
    return x*x
}

Promise.all(numbers.map(number => asygnSquare(number))).then(squares => {
    console.log(squares);
}).catch(err => console.log(err));