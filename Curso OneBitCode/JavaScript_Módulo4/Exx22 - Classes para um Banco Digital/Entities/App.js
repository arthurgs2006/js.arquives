const Deposit = require("./Deposit");
const User = require("./User");
const Transfer = require("./Transfer");
const Loan = require("./Loan");

module.exports = class App{
    static #users = [];

    static findUser(email){
        const user = this.#users.find(user => user.email === email);
        return user ?? null;
    }

    static createUser(email, name){
        const userExist = App.findUser(email);
        if(!userExist){
            this.#users.push(new User(name, email));
        }
    }

    static deposit(email, value){
        const user = App.findUser(email);
        if(user){
            const newDeposit = new Deposit(value);
            user.account.addDeposit(newDeposit);

        }
    }
    static transfer(email, emailReceiver, value){
        const sender = App.findUser(email);
        const receiver = App.findUser(emailReceiver);
        if(sender && receiver){
            const newTransfer = new Transfer(sender, receiver, value );
            sender.account.addTransfer(newTransfer);
            receiver.account.addTransfer(newTransfer);


        }
    }
    static takeLoan(email, value, numberOfInstallments){
        const user = App.findUser(email);
        if(user){
            const newLoan = new Loan(value, numberOfInstallments);
            user.account.addLoan(newLoan);

        }
    }

    static changeLoanFee(newPorcentage){
        Loan.fee = newPorcentage;
    }
}