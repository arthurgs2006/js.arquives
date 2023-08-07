alert("Bem vindo a calculadora geométrica...\nDigite o numerador da opção que você quer acessar.")

function triangleArea(){
  let base = Number(prompt("Digite o valor da base:"));
  let height = Number(prompt("Digite o valor da altura:"));
  return (base * height)/ 2
}
function rectangleArea(){
  let side = Number(prompt("Digite o valor da largura:"));
  let side2 = Number(prompt("Digite o valor da altura:"));
  return side * side2
}
function trapezeArea(){
  let BigBase = Number(prompt("Digite o valor da base maior:"));
  let SmallBase = Number(prompt("Digite o valor da base menor:"));
  let height = Number(prompt("Digite o valor da altura:"));
  return ((BigBase + SmallBase) * height)/2 
}
function circleArea(){
  let radius = Number(prompt("Digite o raio do círculo: "));
  return 3.14 * radius **2
}
do{
  var option = Number(prompt("MAIN MENU\n"+ //var para não criar variável fora...
  "1. área do triângulo"+
  "\n2. área do retângulo\n" +
  "3. área do quadrado\n" + 
  "4. área do trapézio\n"+
  "5. área do círculo\n" + 
  "0. Sair da aplicação"));
  switch (option){
    case 0:
      break
    case 1:
      alert(`O valor da área do triângulo é de ` + triangleArea())
      break
    case 2:
      alert(`O valor da área do retângulo é de ` + rectangleArea())
      break
    case 3:
      alert(`O valor da área do quadrado é de ` + rectangleArea())
      break
    case 4:
      alert(`O valor da área do trapézio é de ` + trapezeArea())
      break
    case 5:
      alert(`O valor da área do círculo é de ` + circleArea())
      break
    default:
      alert("Nº inválido, digite outra vez e tente novamente.")
  }

} while (option !== 0);