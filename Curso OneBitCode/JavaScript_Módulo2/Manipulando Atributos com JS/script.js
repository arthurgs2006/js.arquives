
const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function (){
  input.value = input.value === '' ? "Olá mundo!" : '';
  //if ternário, se input.value for igual a "" então o valor sera "Ola mundo!", se nao o valor sera substituido por ""..
  console.log(input.getAttribute('value'))
  //o getAttribute utiliza do valor predefinido pelo HTML, enquanto o .value recebe a data na hora, ou seja, que foi alterada em tempo real

});

document.getElementById('type').addEventListener('click', function(){
  input.type = input.type !== 'radio' ? 'radio' :'text';
  //Se ele for diferente de "radio" entao se tranformara em 'radio', se nao ele voltara a ser 'text'...
  // input.setAttribute('radio')
  //o setAttribute() vai transformar o input em outra forma, contudo é uma via de mão unica, podendo somente realizar isso escrevendo no codigo uma vez por cada

});

document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = input.placeholder == "" ? 'Digite o texto aqui...' : '';

});

document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute('disabled', !input.disabled);
  
  //
});

document.getElementById('data').addEventListener('click', function(){
  const data = input.dataset.something;
  //Se vc add mais nome ao data-something, utilize o segundo nome ou terceiro com a primeira letra maiscula e junta, como:
  //data-something-else -> dataset.somethingElse ...
  console.log("O valor do atributo data-something é ", data);
  //.dataset. -> prop do HTML que referencia todas as prop do tipo data do HTML e une em um so local...
  input.dataset.something = 'Outro valor';
  console.log('O input agora vale', input.dataset.something);
})