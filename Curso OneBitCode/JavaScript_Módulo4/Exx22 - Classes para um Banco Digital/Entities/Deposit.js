
module.exports = class Deposit{


    constructor(value){
        this.value = value;
        this.createdAt = new Date();
    }
    getValue(){
        return this.value;
    }
    getFormated(){
        return `Dinheiro Depositado: R$${this.value} | A data do depósito foi ${this.date}.`;
    }
}


//Testes com a class
// const ex = new Deposit(199.99, '28/04/2006');
// console.log(ex)
// console.log(ex.getValue())
// console.log(ex.getFormated())
