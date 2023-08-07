
module.exports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key] //achar o que o usuario deseja.
    }

    saveAuthor(author){
        return this.#storage.authors.push(author);
    }

    findBookByName(bookname){
        const book = this.#storage.books.find(b => b.name === bookname);
    }

    findPosterByName(postername){
        const poster = this.#storage.posters.find(p => p.name === postername);
    }

    saveBook(book){
        const bookExists = this.findBookByName(book)
        if(!bookExists){
            this.#storage.books.push(book);
        }
    }

    savePoster(poster){
        const posterExists = this.findBookByName(poster)
        if(!posterExists){
            this.#storage.posters.push(poster);
        }
    }

    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName);
        poster?.name.addToStock(quantity);
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName);
        poster?.name.removeToStock(quantity)
    }

    addBookToStock(bookName, quantity){
        const book = this.findBookByName(bookName);
        book?.name.addToStock(quantity);
    }

    removeBookFromStock(bookName, quantity){
        const book = this.findBookByName(bookName);
        book?.name.removeToStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email);
        if(!userExists){
            this.#storage.users.push(user);
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order);
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.users)
        console.table(this.#storage.posters)
        console.table(this.#storage.orders.map( order => order.data))
    }
}