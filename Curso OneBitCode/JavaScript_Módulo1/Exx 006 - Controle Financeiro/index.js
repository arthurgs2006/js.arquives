
let credit = prompt("Digite o total de saldo disponível:");
let option = ""
credit = parseFloat(credit)
do{
  option = prompt(`Saldo disponível R$${credit}\n1. Adicionar dinheiro\n2. Remover Dinheiro\n3. Sair`)
  option = parseFloat(option)
  switch (option){
    case 1:
      credit += prompt("Digite o valor que gostaria de adicionar na conta...")
      break
    case 2:
      credit -= prompt("Digite o valor que gostaria de remover na conta...")
      break
    case 3:
      alert("saindo...")
        break
    default:
      alert("Ocorreu um erro durante a execução do programa, tente novamente mais tarde.")
  }
} while(option != "3")