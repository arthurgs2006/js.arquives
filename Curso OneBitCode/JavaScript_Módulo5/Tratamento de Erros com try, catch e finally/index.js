const sum = (a, b) => {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(a) || isNaN(b)){
        throw new Error('arguments must be two numbers.')
    } 
    return firstNumber + secondNumber;
}


try{ //tentar executar o código, caso aconteça um erro, execute outra coisa.
    console.log(sum(2, 9));
    console.log(sum(true, 9));// true é convertido para 1, false é para 0
    console.log(sum(undefined, 9)); //undefined não pode ser convertido.
    console.log(sum(2, '9'));
    console.log(sum(2, null));
    console.log(sum(2, 'zero'));
} catch (e) { //executará caso acontecça um erro.
    console.log('An Error Ocorred...\n' + e)
    //com try e catch, ele entende o erro porém ele não pausa a aplicação inteira.
} finally { //algo que sempre é executado, independente de erro ou não
    console.log('Calculation finished!')
}

