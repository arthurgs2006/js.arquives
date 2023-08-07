
const Log = () => {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]){
      console.log("----------------------------------------------------------------")
      console.log(`Calling the ${key} method, with the parameters: ${JSON.stringify(args)}`);

      const result = originalMethod.apply(this, args);

      console.log(`The ${key} method returned ${JSON.stringify(result)}`);
      console.log("----------------------------------------------------------------")
      return result;
    }
  }
}

function Decorator() {
  return function (target, key, descriptor){
    descriptor.value = function (value:number, vl2:number) {
      console.log(`Multiplicando os dois operadores: ${value} x ${vl2}`)
      return value * vl2;
    }
  }
}
//DECORATOR são funções que add funcionalidades a métodos de classes.
//Para ser realizado é necessário criar uma função que retorna uma função anonima com 3 parâmetros:
//(target, key, descriptor) => parametros
//Nisso, para inserir na classe, coloque acima do método escolhido dessa maneira:
//@(nome da função)() -> ou seja: @Decorator()
//após isso, insira nas config do TS, sua configuração correta:
//"experimentalDecorators": true



class Planet{
  name:string
  constructor(name:string){
    this.name = name;
  }
  @Log()
  calculate(x:number, y:number){
    console.log("Somando os dois valores...")
    return x + y;
  }

  @Log()
  invertName(){
    return this.name.split("").reverse().join("")
  }
}

const planet = new Planet("Earth");
const result  = planet.calculate(3, 4)
console.log("Resultado:", result);
planet.invertName();