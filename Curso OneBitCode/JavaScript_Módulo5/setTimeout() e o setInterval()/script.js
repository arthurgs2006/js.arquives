console.log("Programa iniciado!")
const timeoutID = setTimeout( () => { //função para criar um temporizado, ele espera um tempo para executar um código...
    console.log("3 segundos se passaram desde que o program foi iniciado!")
}, 1000 * 3) //recebe um conteudo a ser rodado e o tempo estabelicido, no caso calculado em ms...
//é uma high order function
console.log("Carregando...")

clearTimeout(timeoutID) //para o temporizador! o parametro é a const armazenada acima

let seconds = 0;
const intervalId = setInterval(() => { //intervalos se repetem até parar!
    seconds += 3
    console.log('se passaram ', seconds, ' segundos');
    if(seconds > 10){
        clearInterval(intervalId + '\nTempo Esgotado!');
    }
}, 1000*3);

clearInterval(intervalId);