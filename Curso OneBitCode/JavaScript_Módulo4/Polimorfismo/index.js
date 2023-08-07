class Vehicle{
    move(){
        console.log("O veículo está se movendo!");
    }

}

class car extends Vehicle{
    move(){
        console.log("O carro está se movendo!");
    }
}

class Ship extends Vehicle{
    move(){
        console.log("O navio está navegando!")
    }
}

class AirCraft extends Vehicle{
    move(speed){
        console.log("A aeronave está voando!")
        console.log(`A aeronave está voando à ${speed} km por hora.`)
    }
}

const deloran = new car()
const blackPearl = new Ship()
const epoch = new AirCraft()

deloran.move()
blackPearl.move()
epoch.move(340)

const start = (vehicle) => {
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(deloran)
start(blackPearl)
start(epoch)