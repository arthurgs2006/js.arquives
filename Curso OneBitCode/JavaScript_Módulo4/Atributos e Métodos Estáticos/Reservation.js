
class Reservation{
    constructor(guests, room, days){
        this.guests = guests;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150;

    static showBaseFee(){
        console.log(`Base Fee is: ${Reservation.baseFee}`);
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5;

    }
    
}

Reservation.showBaseFee();
Reservation.baseFee = 200;
const r1 = new Reservation(3, '301', 5);
console.log(r1);
console.log(`Premium Fee : ${Reservation.premiumFee}`)