const Character = require('./Character.js');

class Thief extends Character{ 
    attack(target){
        target.name = 'Thief';
        target.lifePnts -= (this.damagePnts - this.defensePnts) * 2
    }
}

module.exports = Thief; 