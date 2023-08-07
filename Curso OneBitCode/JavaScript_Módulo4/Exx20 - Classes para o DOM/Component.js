
export class Component{

    #element = null; //declarando elemento privado, não sendo possível de ler ou reatribuílo.

    constructor(tag, parent, options){ //nome da tag, qual local ele está vinculado, suas propiedades (type, size...)
        this.tag = tag;
        this.parent = parent;
        this.options = options;
        this.build() //chamando o método criado anteriormente
    }

    getElement(){
        return this.#element; // retornará o valor lido do elemento, assim possibilitando ele ser lido
    }

    build(){
        this.#element = document.createElement(this.tag); //atribuiu ao elemento, o tipo da tag HTML a ser criada no DOM
        Object.assign(this.#element, this.options); // com assign, ele leva as prop. designadas pelo user para o elemento privado
        return this //retornará ao user tudo o que foi add assim tendo um parâmetro doq aconteceu cm o código.
    }
    
    render(){
        if( this.parent instanceof Component){ //se o local onde está vinculado fazer parte da classe tal, o parent será o valor de #element já atribuído
            return this.parent.getElement().append(this.#element)
            //retorne com a atribuição com append(), o elemento encapsulado
        } else{
            document.querySelector(this.parent).append(this.#element)  //com o querySelector(), ele irá procurar aonde está o local onde o #element deverá ser colocado.
        }
    }
}

// const ex1 = new Component('input', 'main', ['input', 'required']); //exemplo de seu uso
// console.log(ex1)
// console.log(ex1.build())