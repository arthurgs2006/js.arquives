const car1 = prompt("Digite a velocidade do primeiro veículo: (km/h)");
const car2 = prompt("Digite a velocidade do segundo veículo: (km/h)");

if (car1 > car2) {
  alert("O primeiro veículo é mais rápido que o segundo veículo.");
} else if (car2 > car1) {
  alert("O segundo veículo é mais rápido que o primeiro veículo.");
} else if (car1 == car2) {
  alert("Os dois veículos possuem a mesma velocidade.");
} else {
  alert("Ocorreu um erro durante a execução do programa!\nTente novamente...");
}
