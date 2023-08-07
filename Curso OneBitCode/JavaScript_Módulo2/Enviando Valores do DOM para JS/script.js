function register(element){
  const username = element.children.username.value; //A partir do elemento pai, selecione com "." até encontrar o valor desejado...
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if(password === passwordConfirmation){
    alert("User Registrado!");
  } else{
    alert("As senhas estão distintas, tente novamente!");
  }
}