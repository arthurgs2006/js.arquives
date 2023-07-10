

class Comment{
    constructor(username, comments){
        this.username = username;
        this.createdAt = new Date() //Hora da puplicação
        this.comments = comments;
    }
}
module.exports = Comment;