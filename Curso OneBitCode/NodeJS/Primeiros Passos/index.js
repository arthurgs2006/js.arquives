const moment = require('moment')

function saymyname(name){
    console.log(name)
    console.log(moment().format("HH:mm"))
    // Biblioteca moment informa o horário que foi processado a function.
}
saymyname("Arthur")