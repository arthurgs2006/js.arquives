const dayjs = require('dayjs');

function birthday(date) {
  const birthday = dayjs(date); // Declara o dia em questão forncecido pelo user
  const today = dayjs() // Declara o dia de hoje
  const age = today.diff(birthday, 'year') //faz a diferença com base em anos, meses, etc.
  console.log(`A sua idade é ${age}.`)
  const nextBday = birthday.add(age + 1, 'year');
  console.log(`Seu próximo aniversário é ${nextBday.format('DD/MM/YYYY')}.`) // .format formata a data para o dia escolhido
  const daytoNextBday = nextBday.diff(today, 'day');
  console.log(`Faltam ${daytoNextBday} dias para completar seus ${age + 1} anos.`)
}

birthday('2006-04-28');