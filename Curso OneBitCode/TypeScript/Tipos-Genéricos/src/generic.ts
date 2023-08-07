
function first(array) {
  return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
  // O tipo genérico <ArrayType> mostra ao TS com que o param deve trabalhar e o que deve retornar ao user
  return array[array.length - 1]
}
//Se caso pilots fosse um array de números, o propio function muda para o tipo em que o array é
const pilots = ['Arthur', 'Armstrong', 'Lewis Hamilton', 'Ayrton Senna']

const firstPilot = first(pilots);
const lastPilot = last(pilots);

interface Ship{
  name: string;
  pilot: string;
}

interface fighter extends Ship{
  attack: number;
  shield: number;   
}

interface transporter extends Ship{
  capacity: number;
}
//Declarando tipo genérico:
function newShip<shipType extends Ship>(ship: shipType, newName: string, newPilot: string){
  const newShip = ship;
  newShip.name = newName;
  newShip.pilot = newPilot;
}
function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}

const a: Ship = {
  name: "arthurShip",
  pilot: 'arthur'
}

const xWing: fighter = {
  name: "xWing",
  pilot: 'xWing',
  attack: 4,
  shield: 3
}
const yWing: transporter = {
  name: "yWing",
  pilot: 'yWing',
  capacity: 10
}
const b = newShip(a, "AyrtonShip", 'Ayrton');
const c = newShip(xWing, "ByrtonShip", 'Byrton');
const d = newShip(yWing, "DyrtonShip", 'Dyrton');

interface enemyShip {
  name: string,
  pilot: string,
  flag?: string //a prop é opcional para evitar erros
}
//O tipo Ship não está correto nessa sintaxe:
const enemyCopy = cloneShip(xWing, "Enemy",  "Enemy");
//O correto será:
const enemyCopy2 = cloneShip<enemyShip>(xWing, "Enemy", "Enemy");

// enemyCopy.flag = "Imperial"
enemyCopy2.flag = "Imperial";