
const user = {
  name: 'Arthur Gonçalves',
  email: 'mpmano1337@gmail.com',
  friends: [{
    name: 'Ana Laura',
    address:{
      street: 'Rua Laguna',
      number: 509
    }
  }],
  age: 16,
  phone:{
    countryCode: '+55',
    DDD: '16',
    phoneNumber: '992428919'
  }
}

// console.log(user.friends[0].phone.DDD);
console.log(user?.friends[0]?.phone?.DDD); //Utiliza-se o ?. como um if, contudo mais rapido e menos complexo de programar,

console.log(user.friends?.[5]?.name)