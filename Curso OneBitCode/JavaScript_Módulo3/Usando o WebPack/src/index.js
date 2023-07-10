const dayjs = require('dayjs'); //Comando para importar o pacote no CommandJS, ou seja, possível em utilizar somente no node.js
// A forma poderia ser nativamente com JS, utilizando o import:
//import dayjs from 'dayjs'

alert(`Hoje é ${dayjs().format("DD/MM/YYYY")}`);
