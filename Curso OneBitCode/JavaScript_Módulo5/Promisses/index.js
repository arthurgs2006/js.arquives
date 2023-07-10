//Ao ser criada, a promise é automaticamente executada,por isso é colocada geralmente em funções;



const p = new Promise((resolve, rejected) => { //declaração de promise
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

console.log(p)
//estado inicial da promise => pending
//estado de comprimento => resolved
//estado de rejeitada => rejected