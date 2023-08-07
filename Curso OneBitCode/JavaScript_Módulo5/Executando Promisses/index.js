
function asygnSum(a, b){
    return new Promise((resolve,rejected) => {
        if(typeof a !== 'number' || typeof b !== 'number')
            rejected("Arguments must be of the type Number.");
        else
            resolve(a+b);
    })
}

function asygnSubtract(a, b){
    return new Promise((resolve,rejected) => {
        if(typeof a !== 'number' || typeof b !== 'number')
            rejected("Arguments must be of the type Number.");
        else
            resolve(a-b);
    })
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
function asygnSquare(x){
    return new Promise(resolve, rejected){
            resolve(x*x)
    }
}

Promise.all(numbers.map(number => asygnSquare(number))).then(squares{
    console.log(squares);
}).catch(err => console.log(err));