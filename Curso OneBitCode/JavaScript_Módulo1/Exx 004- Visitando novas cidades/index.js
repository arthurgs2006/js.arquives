
const name = prompt("Qual é seu nome?")
let confirm = prompt("Você já visitou alguma cidade? (SIM/NÃO)")
let city_visited = "";
let c = 0;
while(confirm === "Sim"){
  let city = prompt("Digite o nome da cidade em que visitou:");
  city_visited += " " + city + "\n"
  alert(`${city} adicionada com sucesso.`) 
  confirm_while = prompt("Você já visitou alguma cidade a mais? (SIM/NÃO)")
  if (confirm_while === "Não"){
    alert(`Encerrando o programa...`)
    break
  }
  c++
}
alert(`Resultados finais: 
Foram ${c} cidades visitadas...
As que tiveram nossa identificação foram (foi): 
${city_visited} `)