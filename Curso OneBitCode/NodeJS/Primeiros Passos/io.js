const process = require("process");
console.log(process.argv) // process é uma biblioteca node que informa alguns dados de arquivos ao dev
//com process.argv, vc informa para o dev com um array onde está localizado o dir do nome na maquina e depois onde está o arquivo que está sendo trabalhado por vc naquele momento

process.stdout.write("Qual é seu nome?")
// Este comando do process faz a mesma função que o console.log

process.stdin.on("data", (keybaord) => {
    process.stdout.write(`Texto do Usuário: ${keybaord}` )
    process.exit();
})
// utilize esses metodos para posicionar o codigo ao server e possibilitar o gerenciamento de entradas e saidas