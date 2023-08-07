
const addButton = document.getElementById('add');
const list_item = document.getElementById('list');
const signUp = document.getElementById('signUp');
const devs = [];
function createLabel(text, htmlfor){
  const label = document.createElement('label');
  label.innerText = text;
  label.htmlFor = htmlfor;
  return label;
}
function createInput(id, value, name, type='', placeholder=''){
  const input = document.createElement('input');
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  if (input.type == ''){
    input.placeholder='Digite aqui o campo de estudo que sabe...'
  }
  return input;
}
let index = 0;
addButton.addEventListener('click', function(ev){
  ev.preventDefault();
  const rowIndex = index;
  index++;
  const newRow = document.createElement('li');

  const addLabel = createLabel('Nome: ', 'tec_');
  const addInput = createInput('tec_'+rowIndex, null, "tec_");

  const row1 = createInput('row'+rowIndex+'.1','0 a 2 anos', 'row_name', 'radio');
  const label1 = createLabel('0 a 2 anos', 'row'+rowIndex+ '.1');
  
  const row2 = createInput('row'+rowIndex+ '.2','3 a 4 anos', 'row_name', 'radio' );
  const label2 = createLabel('3 a 4 anos', 'row' + rowIndex+ '.2');
  
  const row3 = createInput('row'+rowIndex+ '.3','+ de 5 anos', 'row_name', 'radio');
  const label3 = createLabel('+5 anos', 'row' + rowIndex+ '.3');

  const removebutton = document.createElement('button');
  removebutton.innerText ='Remover';
  removebutton.type = 'button';
  removebutton.addEventListener('click', function(){
    list_item.removeChild(newRow);
  })
  newRow.append(addLabel, addInput, row1, label1, row2, label2, row3, label3, removebutton);
  list_item.append(newRow);
});

signUp.addEventListener('submit', function(ev){
  ev.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const input = document.querySelectorAll('.input').value;
  let tec = [];
  input.forEach(function(row){
    const techN = document.querySelectorAll('.input[name="tec_"').value;
    const techR = document.querySelectorAll('.input[name="row_name"]:checked').value;
    tec.push({tech_name: techN, tech_radio: techR  });
  });
  const newDev = {fullname: fullname, tecnologies: tec};
  fullname.input = '';
  input.forEach(function (row){
    row.preventDefault();
    row.removeChild();
  });
  devs.push(newDev);
});
console.log(devs);