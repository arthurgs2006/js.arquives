
export function handleButtonPress(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.currentTarget.dataset.value;
    input.value += value;
  });
};

export function clear(){
  input.value = '';
  input.focus();
};