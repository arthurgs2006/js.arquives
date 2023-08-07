
let number = prompt("Digite um número para realizar a tabuada de 1 à 20.")
let data = ""

for(c = 1; c < 21; c++){
  let result = number*c;
  data += `${number} x ${c} =` + result + "\n"
}
alert(data)
alert("Finalizando...")