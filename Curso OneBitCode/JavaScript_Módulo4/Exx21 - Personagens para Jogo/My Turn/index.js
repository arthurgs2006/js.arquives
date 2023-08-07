const Thief = require("../Thief");
const Warrior = require("../Warrior");
const Mage = require("./Mage")


const arthur = new Thief('Arthur', 100, 30, 20);
const kawany = new Mage('Kawany', 100, 25, 20, 10);
const gatti = new Warrior('Gatti', 100, 40, 5, 15);

console.table({arthur, kawany, gatti});

gatti.switchStance();
gatti.attack(arthur);
arthur.attack(kawany);

console.table({arthur, kawany, gatti});

kawany.heal(kawany);
kawany.attack(arthur);
gatti.switchStance()
arthur.attack(gatti);

console.table({arthur, kawany, gatti});