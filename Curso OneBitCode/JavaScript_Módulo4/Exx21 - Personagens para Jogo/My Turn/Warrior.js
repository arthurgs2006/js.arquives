const Character = require("./Character.js");


class Warrior extends Character{
    constructor(name, lifePnts, damagePnts, defensePnts, shieldPnts){
        super(name, lifePnts, damagePnts, defensePnts);
        this.shieldPnts = shieldPnts;
        this.stance = true; // stancia estar ativada ou nao, no caso de true, significa que está para ataque.
    }
    attack(target){
        if(this.stance == true){
            super.attack(target);
        }
    }
    switchStance(){
        if(this.stance == true){
            this.stance = false;
            this.defensePnts += this.shieldPnts;
        } else{
            this.stance = true;
            this.defensePnts -= this.shieldPnts;
        }
    }
}

module.exports = Warrior;