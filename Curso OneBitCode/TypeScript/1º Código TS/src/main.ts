
function sendStartShip(name:string, captain:string) {
    const spaceship = {
      name,
      captain,
      speed: 20,
      inMission: true,
      crew: []
    }
    alert(`The ship ${spaceship.name}, commanded by ${spaceship.captain}, got in mission.`)
    return spaceship;
}

function accelerate(targetSpeed:number, spaceship:{name:string,speed:number}) {
  if(spaceship.speed > targetSpeed){
    alert(`Reducing speed of ${spaceship.name}, by ${spaceship.speed} to ${targetSpeed}.`);
    spaceship.speed = targetSpeed;
  } else if (spaceship.speed < targetSpeed) {
    alert(`Increasing speed of ${spaceship.name}, by ${spaceship.speed} to ${targetSpeed}.`);
    spaceship.speed = targetSpeed;
  } else{
    alert(`The ship ${spaceship.name} is already at ${spaceship.speed}.`);
  }
}

const spaceshipName = prompt("Insert the spaceship's name to be sent to: ")
const spaceshipCaption = prompt("Insert the ship's caption to be sent to: ")

const currentship = sendStartShip(spaceshipName,spaceshipCaption);

const speed = Number(prompt("Insert the speed of the spaceship: "));
accelerate(speed, currentship);
