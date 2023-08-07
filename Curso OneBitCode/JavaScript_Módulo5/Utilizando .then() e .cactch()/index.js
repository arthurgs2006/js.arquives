//Ao ser criada, a promise é automaticamente executada,por isso é colocada geralmente em funções;



function p (){ 
    return new Promise((resolve, rejected) => { //declaração de promise
    console.log("A promise foi executada e criada com sucesso!");
    resolve(true)//função que retornará o estado da promise
    //parametro dentro, retorna como ela se saiu...
    setTimeout(() => {
        if(true){
            rejected(false); //rejeita a promise
        }
        console.log("Resolvendo a promise")
        resolve(true);
    }, 1000*2);
})
}

// console.log(p)

p().then((result) => { //serve para lidar com a promise que está resolvida!
    console.log(`A promise foi resolvida!\nSeu resultado foi ${result}.`);
    //funciona com uma função de callback e seu parametro, é o estado da promise.
}).catch((err) => { //.catch() lida com
    console.log(`A promise foi rejeitada!\nO motivo principal é: ${err}`)
}).finally(() => { //será executada ao ser finalizada!
    console.log("A promise foi finalizada!  ")
})
//estado inicial da promise => pending
//estado de comprimento => resolved
//estado de rejeitada => rejected