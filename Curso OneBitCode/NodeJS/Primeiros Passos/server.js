const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method) //A forma que a req acontece
    console.log(req.url) //a url que esta utilizando
    res.statusCode = 200 //define a mensagem retornada do servidor caso a operação seja concluida com sucesso
    res.end("<h1>Hello World</h1>") //retorna a uma resposta do servidor ao cliente
} ); //Criar servidor com http library

server.listen(3000, () => {
    // Qualquer elemento que estará na porta 3000, será gerenciado pelo server criado
    console.log("Servidor ativo!")
})