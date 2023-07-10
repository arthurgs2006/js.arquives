const App = require('./Entities/App');

App.createUser('arthurgonsal@hotmail.com','ArthurGS');
App.createUser('chaveirobarao@hotmail.com','Eduardo');
App.createUser('lueart@hotmail.com','Luci');

App.deposit('arthurgonsal@hotmail.com', 100)
App.transfer('arthurgonsal@hotmail.com','lueart@hotmail.com', 20 )
App.changeLoanFee(10)
console.log(App.takeLoan('chaveirobarao@hotmail.com', 2000, 24 ));

console.log(App.findUser('chaveirobarao@hotmail.com'))
console.log(App.findUser('chaveirobarao@hotmail.com').account)
console.log(App.findUser('chaveirobarao@hotmail.com').account.loans[0].installments)
console.log(App.findUser('arthurgonsal@hotmail.com'))
console.log(App.findUser('arthurgonsal@hotmail.com').account)
console.log(App.findUser('lueart@hotmail.com'))
console.log(App.findUser('lueart@hotmail.com').account)
