let velocidade = 80;
while (velocidade > 0) {
  alert(`O carro está há ${velocidade} km/h.`);
  velocidade -= 20;
  alert(`O carro está há menos de 20 km/h.`);
  if (velocidade === 40) {
    break;
  }
}
alert("O carro parou!");
