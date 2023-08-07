
interface GitHubUserResponse{ //interface para dados de algum user do GitHub
  id: number,
  login: string,
  name: string,
  bio: string,
  public_repos: number,
  repos_url: string
  message?: "Not Found"
}
interface GitHubRepoResponse{ // interface para dados de cada repositório de um user no GitHub
  name: string,
  description: string,
  fork: boolean,
  stargazers_count: number
}

const users: GitHubUserResponse[] = []; //array para salvar todos os users adicionados e suas locações ao sistema
const repositories = []; //array para salvar todos os repositories

const saveUser = async (username: string) => { //função async que certifica a existência do user coletado e dá informações sobre ele
  const certificate_users = await fetch(`https://api.github.com/users/${username}`);

  //utilizando o await com o fetch, a constante se torna automaticamente a resposta da api
  const user: GitHubUserResponse = await certificate_users.json()  //o .json() converte para um objeto do JS
  console.log(user);
  if(user.message)
    console.log("Este usuário não existe no sistema do GitHub.")
  else
    users.push(user)
    console.log("Este usuário foi adicionado com sucesso ao sistema.");
    console.log("User: " + user.name +"\nId:"+ user.id + "\nlogin:" + user.login + "\nbio: " + user.bio + "\nRepositórios Públicos: "+ user.public_repos)
    getUser(username)
}

const getUser = async (username: string) => { //Função async que coleta os dados repositorios do user cadastrado no sistema
  const user = users.find(user => user.login === username);
  if(typeof user.login === "undefined"){
    console.log(`O usuário ${username} não existe no sistema.`)
  } else {
    const response = await fetch(user.repos_url);
    const repos: GitHubRepoResponse[] = await response.json();
    let message = "User: " + user.name +"\nId:"+ user.id + "\nlogin:" + user.login + "\nbio: " + user.bio + "\nRepositórios Públicos: "+ user.public_repos;
    repos.forEach( (repo) => {
      repositories.push(repo)
      message += `\nNome: ${repo.name}\nDescrição: ${repo.description}\nEstrelas: ${repo.stargazers_count}\nÉ um Fork: ${repo.fork ? "Sim" : "Não"}`
    })
    console.log(message)
  }
}

const savedUsers = () => {
  console.log(`O total de usuários salvos no sistema é de ${users.length}.`)
  let message = "Usuários:\n"
  users.forEach((user) => {
    message += `\n- ${user.login}`
  })
  console.log(message)
}

const showReposTotal = () => {
  const repo = users.reduce((accumulator, user) => accumulator + user.public_repos, 0);
  //o método reduce, reduz os número a um valor só. Assim, é possível encerrar o exercício
  console.log(`O grupo possui um total de ${repo} repoitóriios`)
}



const repoSum = () => {
  console.log(`A soma de todos os repositórios é ${repositories.length}.`);
}

const rakingRepos = () => {
  const repositories = users.slice().sort((a, b) => a.public_repos - b.public_repos).slice(4, 0);
  //O comando slice, cria uma cópia do array que foi modificado, o sort() utiliza o conceito de gerenciar dois users que, se caso o lado a -b for negativo, ele altera a posição do array do user em questão
  let message = "Top 5 users com mais repositórios públicos: "
  repositories.forEach((user, index) => {
    message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios.`
  })
  console.log(message)
}