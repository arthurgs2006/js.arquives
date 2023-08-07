function sendStartShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("The ship ".concat(spaceship.name, ", commanded by ").concat(spaceship.captain, ", got in mission."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reducing speed of ".concat(spaceship.name, ", by ").concat(spaceship.speed, " to ").concat(targetSpeed, "."));
        spaceship.speed = targetSpeed;
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Increasing speed of ".concat(spaceship.name, ", by ").concat(spaceship.speed, " to ").concat(targetSpeed, "."));
        spaceship.speed = targetSpeed;
    }
    else {
        alert("The ship ".concat(spaceship.name, " is already at ").concat(spaceship.speed, "."));
    }
}
var spaceshipName = prompt("Insert the spaceship's name to be sent to: ");
var spaceshipCaption = prompt("Insert the ship's caption to be sent to: ");
var currentship = sendStartShip(spaceshipName, spaceshipCaption);
var speed = Number(prompt("Insert the speed of the spaceship: "));
accelerate(speed, currentship);
