const button = document.getElementById('register-button');

function register(ev){
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;
  console.log(ev);
// currentTarget seleciona o elemento que aciono o elemento
  if(passwordConfirmation === password){
    alert("Usuário registrado!")
  } else{
    alert("Usuário não registrado.")
  }
}
button.addEventListener('click', register);

function removeEvent(){
  button.removeEventListener('click', register); //Remover evento do HTML
  alert("Evento removido!");
}