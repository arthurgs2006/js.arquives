function double(x = 0){
  return x * 2
}
alert(double(5));

function add(x = 0, y = 0){
  return x + y;
}

alert(add(20, 70));

function newUser(name, email, password, type = "admin"){
  const user = {
    name,
    email,
    password,
    type
  }
  console.log(user)
}
alert(newUser("Arthur", "arthurgonsal@email.com", "1234"));

function manyParameters (user01){
  user01.name
  user01.adress
  user01.telephone

}
const data = {
  nome: "",
  adress: "",
  phone: ""

}
manyParameters(data);