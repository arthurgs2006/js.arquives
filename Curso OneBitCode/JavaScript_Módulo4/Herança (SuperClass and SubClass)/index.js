
class Property {
    constructor(area, price){
        this.area = area;
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area;
    }

}
// extends "extende" o comportamento da class Property
class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(120, 200000)
console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

class Apartament extends Property {
    constructor(number, area, price){
        // this.area = area
        super(area, price)//utilizar o construtor da SuperClass para Subclass
        this.number = number
    } 
    getFloor(){
        return this.number.slice(0, -2);
    }
}

const apt = new Apartament('201', 100, 160000);
console.log(apt);
console.log(apt.getFloor());
console.log(apt.getPricePerSquareMeter());
