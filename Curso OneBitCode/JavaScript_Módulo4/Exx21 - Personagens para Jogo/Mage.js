const Character = require("./Character");


class Mage extends Character{
    constructor(name, lifePoints, damage, defense, magicPtns){
        super(name, lifePoints, damage, defense)
        this.magicPtns = magicPtns;
    }
    attack(target){
        target.lifePoints -= ((this.damage + this.magicPtns) - target.defense) * 2
    }
    heal(target){
        target.lifePoints += this.magicPtns * 2;
    }
}

module.exports = Mage