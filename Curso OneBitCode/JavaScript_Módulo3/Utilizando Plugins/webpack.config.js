const path = require('path') 
const miniCssExtractPlugin = require("mini-css-extract-plugin"); //importar o plugin do css
module.exports = {
    entry: {
        index: './src/index.js'
    },
      mode: 'development',
      module: {
        rules: [{
          test: /\.css$/,
          use: [miniCssExtractPlugin.loader, 'css-loader']
        }]
      },
      plugins: [
        new miniCssExtractPlugin() //função construtora, devolve como objeto
        // o new cria como uma instancia
      ]
    }