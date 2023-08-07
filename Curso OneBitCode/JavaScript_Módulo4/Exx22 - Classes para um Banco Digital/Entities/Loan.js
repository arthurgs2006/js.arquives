const Installments = require('./Installments.js');

module.exports = class Loan{

    static #interestRate = 1.05;

    constructor(value, date, installments){
        this.value = value;
        this.date = date;
        this.installments = [];
        for(let i = 1; i <= installments; i++ ){
            this.installments.push(new Installments((value * Loan.#interestRate)/installments , i) )
        }
        this.createAt = new Date();
    }
    
    static get insterestRateValue(){
        return Loan.#interestRate;
    }

    static set newInsterestRate(newTax){
        Loan.#interestRate = 1 + newTax/100;
    }
}

// const ex1 = new Loan(1500.00, '28/04/2006', 8);
// console.log(ex1)
