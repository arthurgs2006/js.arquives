const Database = require("./DataBase");
const Author = require("./Entities/Author");
const Book = require("./Entities/Book");
const Order = require("./Entities/Order");
const Poster = require("./Entities/Poster");
const User = require("./Entities/User");

module.exports = class App{
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users');
    }

    getBooks(){
        return App.#database.find('books');
    }

    createAuthor(name, nacionality, bio){
        const author = new Author(name, nacionality, bio);
        App.#database.saveAuthor(author);
    }

    getAuthor(){
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book =  new Book(title, synopsis, genre, pages, author, description, price, inStock);
        App.#database.saveBook(book);
    }

    addBook(bookname, quantity){
        App.#database.addBookToStock(bookname, quantity);
    }

    createPoster(name, height, width, description, price, inStock){
        const poster = new Poster(name, height, width, description, price, inStock);
        App.#database.savePoster(poster)
    }

    addPoster(postername, quantity){
        App.#database.addPosterToStock(postername, quantity);
    }

    createOrder(items, user){
        const order = new Order(items, user);
        App.#database.saveOrder(order);
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book ){
                App.#database.removeBookFromStock(product.name, quantity);
            } else if( product instanceof Poster){
                App.#database.removePosterFromStock(product.name, quantity);
            }
        });
    }

    getOrders(){
        App.#database.find('order');
    }

    showDatabase(){
        App.#database.showStorage()
    }

}