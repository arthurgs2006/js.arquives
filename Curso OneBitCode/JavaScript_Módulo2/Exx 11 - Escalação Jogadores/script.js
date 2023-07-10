
function addplayer(){
  
  const playerlist = document.getElementsByClassName('player-list');
  
  const name = document.getElementById('player_name').value;
  const number = document.getElementById('player_number').value;
  const position = document.getElementById('player_position').value;

  confirmation = confirm(`Deseja salvar o jogador ${name} como ${position}?`);
  console.log({name, number, position});//Transforma o corpo todo em objeto para melhor view

  if(confirmation){
    const ul = document.getElementById('player-list');
    const playeritem = document.createElement('li');
    playeritem.id = 'player' + number;
    playeritem.innerText = `${position} ... ${name} (${number})`;
    ul.appendChild(playeritem);

    document.getElementById('player_position').value = "";
    document.getElementById('player_name').value = "";
    document.getElementById('player_number').value = "";
  }
}

function removeplayer(){
  const number = document.getElementById('removeplayer').value;
  const item = document.getElementById('player'+ number);
  confirmation = confirm(`Deseja excluir o jogador ${item.innerText}?`);
  if (confirmation){
    // document.getElementById('player-list').removeChild(item);
    item.remove() // Versao mais recente
    document.getElementById('removeplayer').value = "";
  }
  item.removeChild(item[number]);
}