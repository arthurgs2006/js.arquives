//CRIANDO UMA CLASSE:
class Book {
//atributos são inseridos aqui:
    constructor(title){ //método para colocar atributos estáticos
        this.title = title
        this.published = false
        
    }
    publish(){ //funções criadas dentro do class
        this.published = true
    }
}
// Instancia - Classe
const eragon = new Book("Eragon")
const elvis = new Book("Elvis")
//eragon é uma instância da classe Book
eragon.publish()
console.log(eragon)
console.log(elvis)

console.log(eragon instanceof Book)
//instanceof é uma estrutura que verifica se a tal instancia é de uma classe
//É organizada assim:
//(instance instanceof class)
//retorna true or false
console.log(eragon instanceof Array)


