
class Wallet{
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100//transformar ele em números inteiros.
    }
    get amount(){ //sua diferença entre o método normal é em razão dele ser mais como propiedade, tando que sua chamada externa não necessita de parenteses ()
        return this.#amount / 100
    }
    set username(newUsername){ // setar um valor utilizando essa prop.
        this.#username = newUsername; //é utilizado para tratar com elementos privados dentro da classe, como os casos acima.
        if(typeof this.#username === 'string'){
            this.#username = newUsername
        } else{
            console.log('username must be of type string')
        }
    }
    get username(){
        return this.#username;
    }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = 'Arthur'
console.log(myWallet.username);
console.log(myWallet.username += ' Gonçalves');

myWallet.username = true;