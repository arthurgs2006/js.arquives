const fs = require('fs')

fs.writeFile('test.txt', "Hello Node.JS", err => {
    console.log(err)
} )
// fs.writeFile('nome_do_arquivo.(extensão do arquivo)', "Escrita que irá dentro do arquivo", err => {
    // console.log(err) /*Por mim, haverá uma funcção que caso aconteça um erro durante a execução do codigo
    /* será iniciada e assim retornara seu estado */
// })

fs.appendFile('test.txt', " GoodBye Node.JS", err => {
    console.log(err)
})

// o mesmo comando, porém em vez de criar arquivos novos, ele altera add info a arquivos ja existentes

// Se utilizar o writefile sempre, ele sempre reescreve o arquivo completo de acordo com o primeiro comando

fs.rename('test.txt', 'test2.txt', err => console.log(err)) //Renomeia o nome do arquivo

fs.unlink('test2.txt', err => console.log(err));
// Faz o papel de remover o arquivo em questão

console.log(__dirname);
// __dirname é o caminho para o diretorio atual