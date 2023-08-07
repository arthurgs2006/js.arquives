const Character = require('./Character.js');

class Mage extends Character{
    constructor(name, lifePnts, damagePnts, defensePnts, magicPnts ){
        super(name, lifePnts, damagePnts, defensePnts);
        this.magicPnts = magicPnts;   
    }
    attack(target){
        target.lifePnts -= ((this.attack + this.magicPnts) - target.defensePnts) * 2
    }
    heal(target){
        target.lifePnts += target.defensePnts * 2;
    }
}

module.exports = Mage;