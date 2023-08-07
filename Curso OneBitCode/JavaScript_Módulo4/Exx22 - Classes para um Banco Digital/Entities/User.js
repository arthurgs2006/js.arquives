const Account = require('./Account.js')


module.exports = class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.account = new Account(this);
    }

    get username(){
        return this.account;
    }
}

