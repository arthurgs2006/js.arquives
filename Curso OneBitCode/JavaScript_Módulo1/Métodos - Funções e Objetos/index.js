let person = {
  name: "Arthur",
  age: 16,
  dizerOla(){ // Método: Função dentro do objeto é declarada assim
    console.log("Olá mundo!\nMeu nome é " + this.name); //referencie propiedades dentro de um objeto com o elemento "this."
  }
}
person.dizerOla() //chamar o método