
function addplayer(){
  const section = document.getElementsByClassName('player-list');
  const ul = document.getElementById('player-list');
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const position = document.getElementById('position').value;
  console.log({name, number, position});
  const li = document.createElement('li');
  li.id = 'player' + number;
  li.innerText = `${position} ... ${name} (${number})`;
  ul.appendChild(li);
  
}

function removeplayer(){
  const number = document.getElementById('number_remove').value;
  const item = document.getElementById('player'+number);
  item.remove()
}

