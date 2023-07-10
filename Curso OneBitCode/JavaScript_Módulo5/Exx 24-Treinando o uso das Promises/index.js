function imc(weight, height){
    return new Promise((resolve, rejected) => {
        if(isNaN(weight) || (isNaN(height) ))
            rejected("arguments must be of type 'Number'.")
        // console.log(weight, height)
        resolve(calculate(weight, height));
    })
}

const calculate = (weight, height) => {
    const imc = weight / (height * height);
    if (imc < 18.5){
        return 'magreza';
    }else if(imc < 24.9){
        return 'normal';
    } else if (imc < 29.9){
        return 'sobrepeso';
    } else if(imc < 39.9){
        return 'obesidade';
    } else if(imc >= 40){
        return 'obesidade grave';
    } else{
        return false;

    }
}

imc().then((resolve) => {
    console.log(`A promise foi resolvida!\nOlhe qual é seu status no imc: ${resolve}`);
}).catch((err) => {
    console.log(`Obs... Aconteceu um erro.\nO problema encontrado foi: ${err}`);
}).finally(() => {
    console.log("A promise foi finalizada!")
})

console.log(imc)