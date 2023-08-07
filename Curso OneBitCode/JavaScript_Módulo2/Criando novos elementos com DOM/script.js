


function addInput(){
  const ul = document.getElementById('inputs');

  const newLi = document.createElement('li'); //Passar a tag do elemento que queremos criar
  newLi.className = 'list-item' //add classe ao elemento
  newLi.innerText = 'Novo Input:';

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'input';

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}