
// const book = {
//     title: 'Pequeno Príncipie',
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ['Fantasy', 'Adventure', 'Childhood'],
//     author: {
//         name: 'Antoine de Saint-Exupéry'
//     },
//     addOnStock(quantity) { // Criação de métodos:
//         this.inStock += quantity;
//         //o método é uma função que aciona dentro do objeto, como adicionar ao estoque
//     },
//     save: () => {
//         //salva os dados no banco de dados.
//     }
// }

// console.log(book.title)
// console.log(book)
// book.addOnStock(50)
// console.log(book.inStock,)

// book.save = () => {
//     console.log('Dados...')
// }

//FUNÇÕES CONSTRUTORAS:
//Diferente do camelCase
//Pascoal Case (Primeira letra maiúscula):
function Book(title, pages, published, inStock, tags, author) { //Funções construtoras são representadas com letra maiúscula no início de cada palavra
    this.title = title
    this.pages = pages
    this.published = false
    this.author = author
    this.tags = tags
    this.inStock = 0
    this.addOnStock = (quantity) => {
        this.inStock += quantity
    },
    this.save = () => {
        console.log("Dados salvos...")
    }
}



const tags = ['Fantasy', 'Childhood', 'Creative', 'World', 'Humanity']
const author = {name: 'Antoine de Saint-Exupéry'}
const eragon = new Book("Eragon", 468, tags, author)

eragon.addOnStock(20)
console.log(eragon)

const eBook = new Book('Pequeno Príncipie', 200, true, 60, tags,author) //declare funções construtoras com o new.
console.log(eBook)

const tags2 = ['Horror', 'Childhood', 'Mystery', 'Murder']
const author2 = {name: 'Scoot Cawthon'}
const FNAF = new Book("Five Nights at Freddy's: Silver Eyes", 468, true, 60, tags2, author2);
console.log(FNAF);