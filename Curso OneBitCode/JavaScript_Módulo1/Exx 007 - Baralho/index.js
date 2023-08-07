let cheap = []
let option = ""

do{
  option = Number(prompt(`1. Add uma carta\n2. Puxar uma carta\n3. Sair`));
  switch(option){
    case 1:
      let cardName = prompt("Qual é o nome da carta em que você quer add?")
      if (cheap.push(cardName) == true){
        alert("Carta adicionada com sucesso!")
      }
      break
    case 2:
      let cardpush = cheap.pop()
      if(!cardpush){
        alert("Não há nenhuma carta no baralho.")
      }else{
        alert(`A carta retirada foi ${cardpush}`)
      }
      break
    case 3:
      break
    default:
      alert("Digite um nº válido.")
  }
} while(option !== 3)
