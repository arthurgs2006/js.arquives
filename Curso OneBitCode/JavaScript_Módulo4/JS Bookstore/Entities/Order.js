

module.exports = class Order{
    #total
    #items
    #user

    constructor(items, user){
        items.forEach(({product, quantity}) => {
            if(quantity > product.inStock){
                throw new Error('Quantidade Insuficiente no Estoque!') // throw é jogar e new Error é uma classe nativa do JS
            } 

        });
        this.#items = items;
        this.#user = user;
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0);
        //o valor acumulado (sum) é somado junto ao preço do item( preço do produto multiplicado a sua quant.), iniciando ao 0
        //o item desestruturado se torna um product e quantity, sua união é um item.
    }
    get data(){
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total

        }
    }
}