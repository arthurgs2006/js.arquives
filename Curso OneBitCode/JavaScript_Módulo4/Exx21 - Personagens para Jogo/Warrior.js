const Character = require("./Character");

class Warrior extends Character{
    constructor(name, lifePoints, damage, defense, shieldPts){
        super(name, lifePoints, damage, defense);
        this.shieldPts = shieldPts;
        this.stance = 'attack';

    }
    attack(target){
        if(this.stance == 'attack'){
            super.attack(target);
        } 
    }
    switchStance(){
        if(this.stance == 'attack'){
            this.stance = 'defense'
            this.defense += this.shieldPts;
        } else {
            this.stance = 'attack'
            this.defense -= this.shieldPts;
        }
    }
}

module.exports = Warrior