let data = ""
let word = prompt("Digite a palavra escolhida para identificar se é ou não um palíndromo:")
// Word.length -1 faz o processo reverso, vindo da ultima letra a primeira.
for(c = word.length -1; c >= 0 ; c--){
  data += word[c] 
}

if(word == data){
  alert(`A palavra ${word}, é um palindromo.`)
} else{
  alert(`A palavra ${word}, não é um palindromo.\n"${data}"`)
}
// alert(data)