const Deposit = require("./Deposit");
const depositsInfo = [];

module.exports = class Account{

    #balance;


    constructor(user){
        this.owner = user;
        this.#balance = 0;
        this.deposits = [];
        this.loans = [];
        this.installments = [];
        this.transferences = []; 
    }

    get Balance(){
        return this.#balance;
    }

    addDeposit(deposit){
        this.#balance += deposit.value;
        this.deposits.push(deposit); 
    }
    addLoan(loan){
        this.#balance += loan.value;
        this.loans.push(loan)

    }

    addTransfer(transfer){
        if( transfer.receiver.email === this.owner.email){
            this.#balance += transfer.value;
            this.transferences.push(transfer);
        } else if (transfer.sender.email === this.owner.email){
            this.#balance -= transfer.value;
            this.transferences.push(transfer);
        }
        
    }
}

// const ex2 = new Account(1500, 300, 10, 2);
// console.log(ex2.deposit(300))