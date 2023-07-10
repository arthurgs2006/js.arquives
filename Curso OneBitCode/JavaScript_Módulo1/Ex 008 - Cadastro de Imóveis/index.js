const houses = []
let menu = ""

alert("Bem vindo ao menu de imóveis...")
do{
  menu = Number(prompt(`MAIN MENU\nTotal de Imóveis: ${houses.length};\n`
  + "Digite qual opção você deseja acessar:\n1. Cadastrar Imóveis\n2. Listar imóveis\n3. Sair"))

  switch(menu){
    case 1:
      const category = {} //ATENÇÃO AOS CONST E LET
      category.proptname = prompt("Digite o nome do propietário:")
      category.quantrooms = prompt("Quantos quartos há na moradia?")
      category.bath = prompt("Quantos banheiros há na moradia?")
      category.garage = confirm("Há garagem na moradia?")
      if(category.garage == true){
        category.garage = "Sim"
      } else{
        category.garage = "Não"
      }
      let confirm_progess = confirm(
        `Propietário: ${category.proptname}\n`+
        `Quant. de quartos: ${category.quantrooms}\n`+
        `Quant. de banheiros: ${category.bath}\n`+
        `Possui Garagem: ${category.garage}\n`+
        `Deseja salvar esse imóvel?`)
      if(confirm_progess){
        alert("Imóvel salvo com sucesso!");
        houses.unshift(category);
        
      } else{
        alert("Imóvel excluído.");
      }
      break
    case 2:
      alert("Bem vindo ao visualizador de imóveis...")
      if(houses.length == 0){
        alert("Não há nenhum imóvel cadastrado!")
        break
      }
      for(i = 0; i < houses.length; i++){
        alert(`Imóvel ${i+1}\nPropietário: ${houses[i].proptname}\nQuant. de quartos: ${houses[i].quantrooms}\nQuant. de banheiros: ${houses[i].bath}\nPossui Garagem: ${houses[i].garage}`);
      }
      break
    case 3:
      break
    default:
      alert("Nº inválido ou não disponível a visualização!\nTente novamente...")
  }


} while( menu !== 3);