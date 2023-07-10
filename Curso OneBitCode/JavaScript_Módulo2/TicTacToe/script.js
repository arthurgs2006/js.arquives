
const gameboard = document.querySelectorAll('#tictac-area span');
let vBoard = [];
let turnPlayer = '';

function updateTitle(){
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById('turn-player').innerText = playerInput.value;
};
function start(){
  vBoard = [['', '', ''],['', '', ''],['', '', '']];
  turnPlayer = 'player1';
  document.querySelector('#main-player label[name="turn-player"]').innerHTML = 'Vez de: <span id="turn-player"></span>';
  updateTitle();
  gameboard.forEach(function (element){
    element.classList.remove('win');
    element.innerText ='';
    element.addEventListener('click', handleBoardClick);
    element.classList.add('cursor-pointer');
});
};
function getWinRegions(){
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
    winRegions.push("0.1", "1.1,", "2.1");
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
function disableRegion(element){
  element.classList.remove('cursor-pointer');
  element.removeEventListener('click', handleBoardClick);
};
function handleWin(regions){
  regions.forEach(function (region){
    document.querySelector('[data-region="'+ region +'"]').classList.add("win");
  });
  const player = document.getElementById(turnPlayer).value;
  document.querySelector('#main-player label[name="turn-player"]').innerHTML += ' venceu!'
};
function handleBoardClick(ev){
  const region = ev.currentTarget.dataset.region 
  const rowColumnPair = region.split('.');
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (turnPlayer === 'player1'){
    ev.currentTarget.innerText ='X';
    vBoard[row][column] = 'X';
  } else{
    ev.currentTarget.innerText ='O';
    vBoard[row][column] = 'O';
  }
  console.clear();
  console.table(vBoard);
  disableRegion(ev.currentTarget);
  const winRegions = getWinRegions();
  if (winRegions.length > 0){
    console.log("Venceu!");
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")){
    turnPlayer = turnPlayer === "player1" ?'player2' : "player1";
    updateTitle();
  } else{
    document.querySelector('#main-player label[name="turn-player"]').innerHTML = "Empate!";
  }
};

document.getElementById('start').addEventListener('click', start);
