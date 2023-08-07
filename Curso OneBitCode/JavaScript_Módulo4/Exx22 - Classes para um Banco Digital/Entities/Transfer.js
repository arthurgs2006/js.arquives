const Deposit = require("./Deposit");
const User = require("./User")



module.exports = class Transfer{


    constructor(sender, receiver, value){
        this.sender = sender;
        this.receiver = receiver;
        this.value = value;
        this.createdAt = new Date();
    }
    get Value(){
        return "R$" +this.value;
    }
}