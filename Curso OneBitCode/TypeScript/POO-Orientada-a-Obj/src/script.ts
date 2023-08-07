

class spaceship{
  name: string;
  pilot: string; //sem nenbuma prop. antes do atributo, sua característica é publica
  protected speed: number; //atribui a característica protected ao atributo
  private crew: string[]; //atribui a característica privado ao atributo
  //classes no TS é que os atributos .this são declarados antes do constructor
  constructor(name:string, pilot: string, speed: number){
    this.name = name;
    this.pilot = pilot;
    this.speed = speed;
  }

  get crewList(){ 
    return console.log(this.crew)
  }
  set speedlimit(speed: number){
    this.speed !== undefined;
  }
  AddCrew(crew: string[]){
    crew.push(this.name);
  }
}
class accelerate extends spaceship{
  accelerate(speed: number){
    this.speed = speed;
  }
}
const a = new spaceship("Arthur", 'Arthur', 6000)

// 3 NÍVEIS DE ENCAPSULAMENTO

//o atributo público pode ser acessado de qualquer lugar:
// a.name ou a.pilot

//o atributo protegido só pode ser acessado dentro da class, seja de origem ou extendida, podendo ser alterado lá também

//o atributo privado só pode ser acessado dentro da class de origem, podendo ser alterado lá também




