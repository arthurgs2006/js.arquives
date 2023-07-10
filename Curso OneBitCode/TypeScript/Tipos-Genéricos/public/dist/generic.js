function first(array) {
    return array[0];
}
function last(array) {
    // O tipo genérico <ArrayType> mostra ao TS com que o param deve trabalhar e o que deve retornar ao user
    return array[array.length - 1];
}
//Se caso pilots fosse um array de números, o propio function muda para o tipo em que o array é
const pilots = ['Arthur', 'Armstrong', 'Lewis Hamilton', 'Ayrton Senna'];
const firstPilot = first(pilots);
const lastPilot = last(pilots);
//Declarando tipo genérico:
function newShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
}
function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const a = {
    name: "arthurShip",
    pilot: 'arthur'
};
const xWing = {
    name: "xWing",
    pilot: 'xWing',
    attack: 4,
    shield: 3
};
const yWing = {
    name: "yWing",
    pilot: 'yWing',
    capacity: 10
};
const b = newShip(a, "AyrtonShip", 'Ayrton');
const c = newShip(xWing, "ByrtonShip", 'Byrton');
const d = newShip(yWing, "DyrtonShip", 'Dyrton');
//O tipo Ship não está correto nessa sintaxe:
const enemyCopy = cloneShip(xWing, "Enemy", "Enemy");
//O correto será:
const enemyCopy2 = cloneShip(xWing, "Enemy", "Enemy");
// enemyCopy.flag = "Imperial"
enemyCopy2.flag = "Imperial";
