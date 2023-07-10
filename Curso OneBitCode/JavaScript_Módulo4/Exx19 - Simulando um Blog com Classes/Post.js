const Comment = require('./Comment.js');
const Author = require('./Author.js');
class Post{
    constructor(main, description, author, comments){
        this.main = main;
        this.description = description;
        this.author = author;
        this.comments = [];
        this.createdAt = new Date();

    }
    addComment(username, content){
        this.comments.push(new Comment(username, content))
    }
}

// const ex1 = new Post('<img>', 'lorem ipsulum bla blah blahh...', 'ArthurGS', ['Flawless', 'Perfect', 'Gorgeous']);
// console.log(ex1)

module.exports = Post;