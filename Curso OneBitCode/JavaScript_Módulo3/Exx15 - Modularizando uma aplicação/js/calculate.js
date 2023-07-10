
export function calculate(){
  const input = document.getElementById('input-equation');
  const resultInput = document.getElementById('result');
  resultInput.value = "ERROR";
  resultInput.classList.add('error')
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error');
};