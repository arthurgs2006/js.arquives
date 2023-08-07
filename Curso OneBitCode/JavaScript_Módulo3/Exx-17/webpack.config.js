const path = require('path');
// webpack.config.js

module.exports = {
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist') //Pegar o diretorio atual e alcançar dist...
      },
      compress: true, //Comprimir os arquivos para zip
      port: 8000 //mudar a porta de acesso.
    },
    entry: {
      index: './src/index.js'
    },
    mode: 'production',
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /.js$/,
        use: ['babel-loader']
      }]
    },
    output: {
      filename: '[name].min.js'
    }
  }