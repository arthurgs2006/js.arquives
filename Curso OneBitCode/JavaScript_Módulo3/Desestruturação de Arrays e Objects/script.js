
const person = {
  name:'Arthur',
  job: 'developer',
  parents:['Eduardo', 'Lucivane']
} 

const { job } = person; //Ele retira a seção do object e cria uma variável com ela,
const { name, parents } = person;
//aperta ctrl + space para ver resultados possiveis,
console.log(job, name, parents);

//Para o array funciona da msm forma, somente o par de chaves diferentes:
const [father, mother] = parents;
//Os elementos seguem da ordem do array, (father) - 1 item do array, (mother) - 2 item do array...
console.log(father, mother);

function createUser({name, job, parents}){
  const id = Math.floor(Math.random() ** 9999);
  return {
    id,
    name, 
    job,
    parents
  }
}

const luke = createUser(person);
console.log(luke)

const array2 = (exclusive) => exclusive*2