const gameboard = document.querySelector('#content span');
let vBoard = [];
let turnplayer = '';

function updateTitle(){
  const player = document.getElementById('turnplayer');
  document.getElementById('turnplayer').innerText = player.value;
}
function start(){
  vBoard = [['', '', ''],['', '', ''],['', '', '']];
  turnplayer = 'player1';
  document.querySelector('h2').innerHTML = '<h2>Vez de: <span id=turnplayer></span></h2>'
  updateTitle();
  gameboard.forEach(function (element){
    element.classlist.remove('win');
    element.innerText ='';
    element.classlist.add('cursor-pointer');
    element.addEventListener('click', HandeBoardEvent);
  });
};
function disableregion(ev){
  ev.classlist.remove('cursor-pointer');
  ev.removeEventListener('click', handleBoardClick);
}
function winregion(){
    const winRegions = [];
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]){
    winRegions.push("0.0", "0.1", "0.2");
  } else if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]){
    winRegions.push("1.0", "1.1", "1.2");
  } else if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]){
    winRegions.push("2.0", "2.1", "2.2");
  } else if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]){
    winRegions.push("1.0", "1.1", "1.2");
  } else if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[1][0] === vBoard[2][0]){
    winRegions.push("0.0", "1.0", "1.0");
  } else if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]){
    winRegions.push("0.1", "1.1", "2.1");
  } else if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2]){
    winRegions.push("0.2", "1.2", "2.2");
  } else if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]){
    winRegions.push("0.0", "1.1", "2.2");
  } else if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0]){
    winRegions.push("0.2", "1.1", "2.0");
  } else{
    return winRegions;
  }
  return winRegions;
  
};
function handleWin(ev){
  ev.forEach( function (){
    document.querySelector('[data-region="' + ev + '"]').classList.add('win');
  });
  const player = document.getElementById(turnPlayer).value;
  document.querySelector('#main-player label[name="turn-player"]').innerHTML += ' venceu!';
}
function HandeBoardEvent(ev){
  const region = ev.currentTarget.dataset.region;
  const rowColumnPair = region.split('.');
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if( turnplayer === 'player1'){
    ev.currentTarget.innerText = 'X';
    vBoard[row][column];
  } else{
    ev.currentTarget.innerText = 'O';
    vBoard[row][column];
  }
  console.clear();
  console.table(vBoard);
  disableregion(ev.currentTarget);
  const winRegions = winregion();
  if(winRegions.length > 0){
    handleWin(winRegions);
    } else if (vBoard.flat().includes('')){
      turnplayer = turnplayer == 'player1' ? 'player2' : 'player1';
      updateTitle();
    } else{
      document.querySelector('h2').innerHTML = 'Empate';
    }

}

document.getElementById('Start').addEventListener('click', start);