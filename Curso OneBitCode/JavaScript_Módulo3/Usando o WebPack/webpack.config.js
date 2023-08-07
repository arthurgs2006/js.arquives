const path = require('path') //importar um module que facilita o caminho de pastas e arquivos.


module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development', //modo development não é otimizado, utilizamos para verificar o código por completo
    // o mode production é o modo completo, utilizando a otimização para ja ir ao navegador
    output: {
        path: path.resolve(__dirname, 'public'), // o __dirname resume todo caminho cm somente esse argumento, o public é para onde o arquivo sera enviado
        filename: '[name].bundle.min.js' //mudar o nome do arquivo de output
    }
}