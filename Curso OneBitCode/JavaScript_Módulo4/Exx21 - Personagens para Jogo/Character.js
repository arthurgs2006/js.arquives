
class Character{
    constructor(name, lifePoints, damage, defense){
        this.name = name;
        this.lifePoints = Number(lifePoints);
        this.damage = Number(damage);
        this.defense = Number(defense);
        console.log(`Character Name: ${this.name},\n${this.name}'s lifePoints: ${this.lifePoints},\n${this.name}'s strengh: ${this.damage},\n${this.name}'s defense: ${this.defense} `)
    }
    attack(target){
        const valueOriginal = target.lifePoints
        target.lifePoints  -= this.damage - target.defense
        if(target.lifePoints == valueOriginal ){
            console.log("O ataque não foi suficiente para causar algum dano ao adversário!")
        } else{
            console.log(`O ataque de ${this.damage}, levou ${target.name} a ter ${target.lifePoints} pontos de vida.`)
        }
    }
}
const Guy = new Character('Guy',1200, 300, 250);
Guy.attack({name: 'thief', lifePoints: 900, defense: 200})
module.exports = Character

