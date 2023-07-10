var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Log = () => {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log("----------------------------------------------------------------");
            console.log(`Calling the ${key} method, with the parameters: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`The ${key} method returned ${JSON.stringify(result)}`);
            console.log("----------------------------------------------------------------");
            return result;
        };
    };
};
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value, vl2) {
            console.log(`Multiplicando os dois operadores: ${value} x ${vl2}`);
            return value * vl2;
        };
    };
}
//DECORATOR são funções que add funcionalidades a métodos de classes.
//Para ser realizado é necessário criar uma função que retorna uma função anonima com 3 parâmetros:
//(target, key, descriptor) => parametros
//Nisso, para inserir na classe, coloque acima do método escolhido dessa maneira:
//@(nome da função)() -> ou seja: @Decorator()
//após isso, insira nas config do TS, sua configuração correta:
//"experimentalDecorators": true
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(x, y) {
        console.log("Somando os dois valores...");
        return x + y;
    }
    invertName() {
        return this.name.split("").reverse().join("");
    }
}
__decorate([
    Log()
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet("Earth");
const result = planet.calculate(3, 4);
console.log("Resultado:", result);
planet.invertName();
