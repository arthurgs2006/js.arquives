const Post = require('./Post.js')

class Author{
    constructor(username){
        this.username = username;
        this.posts = [,,,,]
    }
    addPost(main, description, comment){
        const post = new Post(main, description, this, comment);
        this.posts.push(post);
        return post
    }
}

// const ex1 = new Author('Arthur')
// console.log(ex1)
// console.log(ex1.addPost('<img src="./example">', 'blah blahh blah neh', 'this.username', '<3 <3 <3'));
module.exports = Author;