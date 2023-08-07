const Author = require("./Author");

const john = new Author("John Doe")
const post = john.addPost("Título do texto", 'Lorem Ipsulum...', 'aidsjoajds')

post.addComment('<3', 'Ótimo');

console.log(john)
console.log(post)