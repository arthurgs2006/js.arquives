
alert("Bem Vindo ao conversos de medidas...\nInforme a medida em metros e depois selecione para qual das medidas você deseja converter.")
let medida = prompt(
  "Digite qual medida você quer converter:\n-1 milímetro (mm)\n-2 centímetro (cm)\n-3 decímetro (dm)\n-4 decâmetro (dam)\n-5 hectômetro (hm)\n-6 quilômetro (km)")
let value = prompt("Digite qual é o número em metros que você deseja converter:")
switch (medida){

  case "1":
    value = value*1000;
    alert(`O valor será de ${value} mm.`)
    break
  case "2":
    value = value*100;
    alert(`O valor será de ${value} cm.`)
    break
  case "3":
    value = value*10;
    alert(`O valor será de ${value} dm.`)
    break
  case "4":
    value = value/10;
    alert(`O valor será de ${value} dam.`)
    break
  case "5":
    value = value/100;
    alert(`O valor será de ${value} hm.`)
    break
  case "6":
    value = value/1000;
    alert(`O valor será de ${value} km.`)
    break
  default:
    alert("Medida não encontrada... Finalizando o programa.")
}