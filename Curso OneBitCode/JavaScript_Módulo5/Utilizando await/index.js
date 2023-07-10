async function asyncSum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of the type Number.');
    }
    return a+b;
}
//ANTIGO MODELO:
// async function execute(){
//     asyncSum(65, 45).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(`error ${err}`);
//     })
// }

async function execute(){
    
    //o await espera a promise ser resolvida para posteriormente, ser armazenada manualmente numa var
    // ele somente funciona em funções assincronas (async)
    //com o await, o codigo abaixo dele somente rodará quando a função call pelo await estiver sido finalizada!
    try{
        const result = await asyncSum(63, 47);
        console.log(result);
    }catch(err){
        console.log(err)
    }
    

}

execute()