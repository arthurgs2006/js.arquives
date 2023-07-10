const spaceships = []

const spaceShip = (name:string, pilot: string, crewLimit: number, inMission?: false) => {
  const crewS = []
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crewS,
    inMission: false
  }
  spaceship.crewS.push(pilot);
  spaceships.push(spaceship);
  return spaceship
}


const addCrew = (spaceship: any, member:string, crewS: [string]) => {
  console.log(crewS.length)
  console.log(spaceship.crewLimit >= crewS.length)
    if(spaceship.crewLimit >= crewS.length){
      crewS.push(member);
      return `Added ${member} to the crew!`;
    }
    throw new Error("The number of spaces on spacehip is over the limit.");
}

const sendSpaceship = (spaceshipMission: unknown,crewLimit:number ,crewS: []) => {
  if(crewS.length >= Math.round(crewLimit*(1/3)) && spaceshipMission !== true){
    spaceshipMission = true;
    return 'The spaceship started the mission!';
  } else{
    spaceshipMission = false;
    return 'The spaceship has not started the mission!, because its population is not enough to launch.';
  }
}

const spaceShipsRegister = () => {
  console.table(spaceships)
}

const findSpaceship = (name: string) => {
  let spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crewS: [string],
    inMission: boolean
  }
  spaceship = spaceships.find(spaceship => spaceship.name == name)
  return spaceship
}
// const execute = () => {
//   alert("BEM VINDO AO WEBSITE DAS NAVES ESPACIAIS...")
//   alert("INTERAJA COM O MENU PARA VER AS OPÇÕES")
//   alert("1 - Cadastrar Nave\n2 - Adicionar Integrantes\n3 - Lançar Nave\n4 - Ver todas as Naves Cadastradas...")
//   const choice = prompt("Digite a opção desejada: ");
//   switch (choice) {
//     case "1":
//       const name = prompt("Digite o nome da nave: ");
//       const pilot = prompt("Digite o nome do piloto: ");
//       const crewLimit = parseInt(prompt("Digite a quantidade de pilotos que você pode adicionar: "));
//       const spaceship = spaceShip(name, pilot, crewLimit);
//       break;
//     case "2":
//       const member = prompt("Digite o nome do integrante: ");
//       const spacehip = prompt("Digite o nome da nave: ")
//       const add = addCrew(spacehip, member, spaceships[spacehip])
//       alert(add)
//       break;
//     case "3":
//       const spaceshipMission = prompt("Digite o nome da nave: ")
//       const launch = alert(sendSpaceshipsMission(spaceshipMission, spaceshipMission.crewLimit, ))
//   }
// }