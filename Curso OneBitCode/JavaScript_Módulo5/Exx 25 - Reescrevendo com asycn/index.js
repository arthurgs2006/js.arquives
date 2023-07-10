

async function imc(a, b){
    if(typeof a == 'number' || typeof b == 'number'){
        return calculate(a,b);
    }
    return Promise.reject('Arguments must be of the type number to proceeds.')
}

async function calculate(weight, height){
    const imc = weight / (height * height);
    if( imc < 18.5)
        return 'Abaixo do Peso'
    else if(imc < 24.9)
        return 'Peso Ideal'
    else if(imc < 29.9)
        return 'Sobrepeso'
    else if(imc < 39.9)
        return 'Obesidade Grave'
    else 
        return Promise.reject("Error! Please try your code again.")

}

async function execute(){
    try{
        const result = await imc(78, 1.90);
        console.log(result)
    }catch(err){
        console.log(err)
    }finally{
        console.log('Finalizando Aplicação!')
    }
}
execute()
// imc(45, 1.90).then(resolve => {
//     console.log(`The Promise was resolved!\nYour status in the I.M.C is: ${resolve}.`);
// }).catch(err => {
//     console.log(`Something bad happend!\nThe error that occured in your application is ${err}.`)
// }).finally(() => {
//     console.log("\nApplication finished.")
// })

// console.log(imc(70.5, 1.85))