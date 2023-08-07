
class Product {
    constructor(name, description, price, inStock, discount){
        this.name = name;
        this.description = description;
        this.price = price ?? 0.00;
        this.inStock = 0;
        this.discount = false
    }
    addToStock(value){
        this.inStock += value;
        return `O estoque foi atualizado, contendo agora ${this.inStock} produtos.`
    }
    calculateDiscount(discount){
        this.price = this.price - (this.price * (discount/100));
        this.discount = true
    }
}

const product1 = new Product('Galaxy S21', 'Smartphone Samsung 128GB', 2699.99);
console.log(product1)
console.log(product1.addToStock(30))
console.log(product1.calculateDiscount(5));
console.log(product1)
