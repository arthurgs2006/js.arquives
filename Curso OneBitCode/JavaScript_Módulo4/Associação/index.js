const Address = require('./Address.js');
const Person = require('./Person.js')

const addr = new Address('7 de Setembro', 99 , 'Centro', 'Rio de Janeiro', 'RJ');
const person = new Person('Arthur', addr);

console.log(person);
console.log(person.address.fullAddress())