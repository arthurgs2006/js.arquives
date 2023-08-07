

function createLabel( text , htmlfor){
  const label = document.createElement('label');
  label.htmlFor = htmlfor; //for a label pelo JS
  label.innerText = text;
  return label;
};
function createInput( id, value, name, type='text', placeholder ='' ){
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
  //Criar uma função para retornar inputs, em que cada parâmetro dado acima da função retorne ao input criado com estas tais características...
};
const form = document.getElementById('form');
const buttonAddNew = document.getElementById('add');
const developers = []; //Possuir todas as info coletadas
let inputRows = 0;

buttonAddNew.addEventListener('click', function (ev){
  ev.preventDefault();
  const stackinputs = document.getElementById('list-area');

  const newRow = document.createElement('li');
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = 'inputRow-' + rowIndex;
  newRow.className= 'inputRow';

  const techNameLabel = createLabel('Nome: ', 'techName-'+rowIndex);
  const techNameInput = createInput('techName-'+rowIndex, null, 'techName');


  const expLabel = createLabel(' Experiência: ');
  const id1 = 'expRadio-' + rowIndex + '.1';
  const expRadio1 = createInput(id1, "0 a 2 anos", 'techExp' + rowIndex, 'radio');
  const expLabel1 = createLabel('0 a 2 anos', id1);
  //
  const id2 = 'expRadio-' + rowIndex + '.2';
  const expRadio2 = createInput(id2, "2 a 4 anos", 'techExp' + rowIndex, 'radio');
  const expLabel2 = createLabel('2 a 4 anos', id2);
  //
  const id3 = 'expRadio-' + rowIndex + '.3';
  const expRadio3 = createInput(id3, "5 ou mais anos", 'techExp' + rowIndex, 'radio');
  const expLabel3 = createLabel('5 ou mais anos', id3);
  //
  const removeRowBtn = document.createElement('button');
  removeRowBtn.type = 'button';
  removeRowBtn.innerText = 'Remover';
  removeRowBtn.addEventListener('click', function (){
    stackinputs.removeChild(newRow);
  })
  //
  newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn);
  stackinputs.append(newRow);
  

})

form.addEventListener('submit', function (ev){
  ev.preventDefault();

  const fullnameInput = document.getElementById('name');
  const inputrows = document.querySelectorAll('.input');
  let technologies = [];
  inputrows.forEach(function (row){
    const techName = document.querySelector('#' + row.id + 'input[name="techName"]').value;
    const techExp = document.querySelector('#' + row.id + 'input[type="radio"]:checked').value;
    technologies.push({name: techName, exp: techExp});
  })
  const newDev = {fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullnameInput.value = "";
  inputrows.forEach(function (row){
    row.remove();
  });
  console.log(developers);
});


// function add(ev){
//   ev.preventDefault()
//   form.addEventListener('submit', function(ev){
//     ev.preventDefault();
//     const ul = document.getElementById("list-area");
//     const li = document.createElement('li');
//     const inputTech = document.createElement('input');
//     inputTech.id = 'newTech';
//     inputTech.type = 'name';
//     li.appendChild(inputTech);
//     ul.appendChild(li);
//   })
// };