const Thief = require("./Thief");
const Mage = require("./Mage.js");
const Warrior = require("./Warrior");



const thief = new Thief('Beatrice', 140, 22, 8);
const arthur = new Mage('Arthur', 90, 4, 2, 14);
const cain = new Warrior('Cain', 200, 14, 12, 4);

console.table({arthur, thief, cain})

cain.switchStance()
arthur.attack(cain)
thief.attack(arthur)

console.table({arthur, thief, cain})

cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)
thief.attack(cain)

console.table({arthur, thief, cain})
