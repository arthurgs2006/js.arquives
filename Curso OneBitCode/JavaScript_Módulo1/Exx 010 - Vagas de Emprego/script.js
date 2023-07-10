const job = []

function create(){
  const name = prompt("Digite o nome do cargo:");
  const description = prompt("Digite uma descrição para o cargo adicionado:");
  const date_limit = prompt("Digite uma data limite:");
  if (confirm(`Deseja salvar essas informações?\nNome: ${name}\nDescrição: ${description}\nData Limite: ${date_limit}`)){
    const savejob = {name , description, date_limit, candidates: [] };
    job.push(savejob);
    alert("Salvo com sucesso!");
  } else {
    alert("Ok, item excluído!");
  }
}
// function novaVaga() {
//   const nome = prompt("Informe um nome para a vaga:")
//   const descricao = prompt("Informe um descrição para a vaga:")
//   const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

//   const confirmacao = confirm(
//     "Deseja criar uma nova vaga com essas informações?\n" +
//     "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
//   )

//   if (confirmacao) {
//     const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
//     vagas.push(novaVaga)
//     alert("Vaga criada.")
//   }
// }
function listjobs(){
  const jobs = job.reduce((finaltext, job, index) => {
    finaltext += index + ". ";
    finaltext += job.name;
    finaltext += "( " + job.candidates.length + " candidatos)\n";
    return finaltext;
  }, "");
  alert(jobs);
};
// function listarVagas() {
//   const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
//     textoFinal += indice + ". "
//     textoFinal += vaga.nome
//     textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
//     return textoFinal
//   }, "")

//   alert(vagasEmTexto)
// }

function showjob() {
  const index = prompt("Indique o índicie em que a sua vaga está...");
  if (index >= job.length || index < 0){
    alert("Esta vaga não existe ou não está disponível!")
    return 
  }
  jobApplied = job[index];
  const candidatesInText = jobApplied.candidates.reduce(function (finaltext, actualcandidate){
    return finaltext + "\n - " + actualcandidate;
  }, "");

  alert(`Vaga nº ${index}\nNome: ${jobApplied.name}\nDescrição: ${jobApplied.description}\nData Limite: ${jobApplied.date_limit}\nQuant. de candidatos: ${jobApplied.candidates.length}\nCandidatos Inscritos: ${candidatesInText}`);
};

function signIn(){
  const candidate_name = prompt("Digite o nome do candidato a se inscrever:");
  const index = prompt("Informe o indicie da vaga:");
  const jobApplied = job[index];

  const confirm = ("Deseja inscrever o candidato: " + candidate_name + ` na vaga...\nNome: ${jobApplied.name}\nDescription: ${jobApplied.description}\nData Limite: ${jobApplied.date_limit}`);
   if(confirm){
    jobApplied.candidates.push(candidate_name);
    alert("Inscrição marcada com sucesso!");
   }
};
// function inscreverCandidato() {
//   const candidato = prompt("Informe o nome do(a) candidato(a):")
//   const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
//   const vaga = vagas[indice]

//   const confirmacao = confirm(
//     "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
//     "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
//   )

//   if (confirmacao) {
//     vaga.candidatos.push(candidato)
//     alert("Inscrição realizada")
//   }
// }
function clear(){
  const index = prompt("Digite o indicie da vaga que deseja excluir: ");
  const job_clear = job[index]

  const cnfrm = confirm("Deseja excluir essa vaga?\n" + `Vaga nº ${index}\nNome: ${job_clear.name}\nDescrição: ${job_clear.description}\nData Limite: ${job_clear.date_limit}`);
  if(cnfrm){
    job.splice(index, 1);
    alert("Vaga excluída!");
  }
}

do{
  option = Number(prompt("Olá, bem vindo ao menu inicial do sistema de vagas de emprego...\nDigite o numerador para acessar à função escolhida!"+
  "\n1. Listar vagas disponíveis"
  + "\n2. Criar uma nova vaga"
  + '\n3. Visualizar uma vaga'
  + "\n4. Inscrever um canditado em uma vaga"
  + "\n5. Excluir uma vaga"
  +"\n0. Sair"
  ));

  switch(option){
    case 0:
      break
    case 1:
      listjobs();
      break
    case 2:
      create();
      break
    case 3:
      showjob();
      break
    case 4:
      signIn();
      break
    case 5:
      clear();
      break
    default:
      alert("Número inválido, digite novamente!");
    }
} while (option != 0);