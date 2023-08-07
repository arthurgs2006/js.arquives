
class Account {
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password //com # é um atributo privado
    }
    getBalance(email, password){ // métodos também podem ser privados
        if(this.email === email && this.#password === password){
            return this.#balance

        } else{
            return null
        }
    }
}

const user = {
    email: 'arthurgonsal@hotmail.com',
    password: '66554488'
}

const myAccount = new Account(user)

console.log(myAccount);
console.log(myAccount.getBalance('arthurgonsal@hotmail.com', '66554488'))
myAccount.password = 'Caetano509'
myAccount.balance = 999999

console.log(myAccount)