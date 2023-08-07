const Character = require('./Character.js');

class Thief extends Character{
    attack(target){
        target.name = 'Thief'
        target.lifePoints -= (this.damage - target.defense) * 2
    }
}

module.exports = Thief;

 