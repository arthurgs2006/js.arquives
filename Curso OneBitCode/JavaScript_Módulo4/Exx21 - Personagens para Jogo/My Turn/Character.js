

class Character {
    constructor(name, lifePnts, damagePnts, defensePnts){
        this.name = name;
        this.lifePnts = lifePnts;
        this.damagePnts = damagePnts;
        this.defensePnts = defensePnts;
        console.log(`Character Information:\nName: ${this.name}\nLife Points: ${this.lifePnts}\nDamage Points: ${this.damagePnts}\nDefense Points: ${defensePnts}`);
    }
    attack(target){
        const targetLifeBefore = target.lifePnts;
        target.lifePnts -= this.damagePnts - target.defensePnts; // A vida do alvo será diminuída com base no valor entre a dif da ameaça com a defesa do target 
        if(target.lifePnts == targetLifeBefore){
            console.log("O ataque não foi o suficiente para machucar o alvo!");
        } else {
            console.log(`O ataque resultou a diminuição da vida do alvo de ${targetLifeBefore} pontos para ${target.lifePnts} pontos de vida.`);
        }
    }  
}

const ex1 = new Character('Arthur', 100, 25, 15);
console.log(ex1)
ex1.attack({name: 'target', lifePnts: 100, defensePnts: 15});

module.exports = Character;