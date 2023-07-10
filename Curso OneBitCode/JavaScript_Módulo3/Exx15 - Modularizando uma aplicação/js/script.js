import { calculate } from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import switchTheme from "./switch-theme.js";
import {clear, handleButtonPress} from "./keyHandlers.js";

const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input-equation');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
input.addEventListener('keydown', function(ev){
  ev.preventDefault();
  if( allowedKeys.includes(ev.key)){
    input.value += ev.key;
    return;
  };
  if( ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1);
  };
  if( ev.key === 'Enter'){
    calculate();
  };
});
document.getElementById('buttonC').addEventListener('click', )
document.getElementById('button=').addEventListener('click', clear)
document.querySelectorAll('.button').forEach(handleButtonPress)
const button_ = document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard )


document.getElementById('switch-theme').addEventListener('click', switchTheme)




