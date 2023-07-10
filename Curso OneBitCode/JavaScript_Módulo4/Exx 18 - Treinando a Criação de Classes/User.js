
class User {
    constructor(fullname, email, password) { //funcionalidade constructor
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.existentUser = false
    }
    login(email, password){//método
        if (this.password === password && this.email === email){
            this.existentUser = true;
            return true
        } else{
            return false
        }
    }
}

const user1 = new User('Arthur Gonçalves Saldanha', 'arthurgonsal@hotmail.com', '1234');

console.log(user1)

user1.login('arthurgonsal@hotmail.com', '1234') ? console.log("Login Efetuado!") : console.log("Erro!");
// if de uma linha é (código) ? (situação verdadeira) : (situação falsa);
