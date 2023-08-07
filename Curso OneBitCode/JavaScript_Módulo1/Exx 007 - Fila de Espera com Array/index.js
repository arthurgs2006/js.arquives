let option = ""
let fila = []
let pacient = ""
alert("Bem vindo ao consultório médico!\nConfira o nosso menu de pacientes e fila de espera.");
do{
  option = Number(prompt(`Selecione uma das opções abaixo:\n1. Adicionar Paciente\n2. Remover Paciente\n3. Consultar Paciente\n4. Conferir lista de espera\n5. Sair`));
  switch(option){
    case 1:
      pacient = prompt("Digite o nome do paciente em que você quer adicionar a fila de espera:")
      fila.push(pacient);
      alert(`O paciente ${pacient}, foi adicionado a fila de espera.`);
      break
    case 2:
      if(fila.length == ""){
        alert("Não há nenhum paciente na lista de espera.")
      } else{
        confirm(`ATENÇÃO!\nO último paciente adicionado, ${pacient}, será excluído do sistema.\nDeseja continuar?`)
        fila.shift()
      }
      break
    case 3:
      const pacientName = prompt(`Digite o nome do paciente para conferir se seu nome está na lista:`)
      let pacientNameConf = fila.includes(pacientName);
      if (pacientNameConf === true){
        alert(`Sim, ${pacientName} está presente na lista de espera.`)
      } else{
        alert(`Não, ${pacientName} não está presente na lista de espera.`)
      }
      break
    case 4:
      let listPacient =`Confira a lista da Fila de Espera:`;
      for(i = 0; i<fila.length; i++){
        listPacient += `\n ${i+1}º`+ fila[i];
      }
      alert(listPacient);
      break
    case 5:
      break
    default:
      alert("Opção inválida!\nTente Novamente...")
  }
} while(option !== 5);