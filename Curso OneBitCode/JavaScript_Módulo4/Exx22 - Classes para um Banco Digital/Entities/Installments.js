
class Installments{
    constructor(value, number){
        this.value = value;
        this.number = number;
        this.situtation = false;//pending
    }

    SeeBankAccount(){
        if(this.situtation === false){
            return 'Você está em divida com o banco.'
        } else{
            return 'Você está sem dívida com o banco.'
        }
    }    
}