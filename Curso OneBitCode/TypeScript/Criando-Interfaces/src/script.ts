//Type -> funciona para elementos mais convencionais ou menos redundantes
type planet = {
  name: string,
  satellite: string[];
}

//Interfaces  ->
interface CelestialBody { //declarando as interfaces
  name: string,
  mass: number
}

interface Star extends CelestialBody { 
  age: number,
  planets: Planet[]
}

interface Planet extends CelestialBody { 
  population: number,
  createSatellite: (name:string) => void
}

let sun: Star;
sun.name = 'Sol'
sun.mass = 1989 * (10**30)
sun.age = 4.603 * (10**9)
sun.planets = []

type Asteroid = CelestialBody & { //forma de extender utilizando o type
  size: number
}

class MilkWayPlanet implements Planet { // implementa dentro de uma classe um tipo
  name: string
  mass: number
  population: number;

  constructor(name: string, mass: number, population: number){
    this.mass = mass;
    this.population = population;
    this.name = name;

  }
  createSatellite: (name: string) => {
    //...
  }
}

interface Planet {
  satellite?: string[]
}