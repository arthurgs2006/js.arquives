
const str = `{
  "name": "Arthur Gonçalves",
  "job": "Desenvolvedor",
  "technologies": ["HTML", "CSS", "JS", "JSON", "..."],
  "working": true
}`
//o comando .parse transforma o conteudo de uma string, em um objeto no JSON compatible...
//
const obj = JSON.parse(str)

//o método stringify() transforma o obj JSON compatible em uma string do JS comum
const str2 = JSON.stringify(obj)

console.log(str, obj, str2)
//para iniciar e rodar o codigo no console, insira:
//node (nome do arquivo).js

//para procurar o arquivo, utilize cd (nome do arquivo).js