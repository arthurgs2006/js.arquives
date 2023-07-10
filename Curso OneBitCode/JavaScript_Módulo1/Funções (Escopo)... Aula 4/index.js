let pokemon = "Charmander"//Escopo mais externo

function evoluir(){
  pokemon = "Charmaleon" //Escopo mais interno
}
console.log(pokemon);
evoluir()
console.log(pokemon);

//Escopo mais interno não poder ser usado como mais externo, somente o contrário.

function grade(nota){
  if(nota >= 7){
    var aproved = true
    let situation = "aprovado"
  } else{
    var reproved = false
    let situation = "reprovado"
  }
  console.log(nota)
  console.log(aproved)
  console.log(situation)
}
grade(5)
grade(8) // Aplicando a regra alertada no comentário acima;
//var fica disponível sempre, o let não
// a var é lida primeiro, porém ele não atribui o valor