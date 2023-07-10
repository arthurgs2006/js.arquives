const bday = require('dayjs');

const birthday = (date) => {
  const today = bday();
  const birthday = bday(date);
  const age = today.diff(birthday, 'year');
  const nextbday = birthday.add(age + 1, 'year');
  const daystobday = nextbday.diff(today, 'day')
  console.log(`Você possui ${age} anos e completará em ${nextbday.format('DD/MM/YYYY')} .`)
  console.log(`Faltam aproximadamente ${daystobday} dias para seu aniversário.`);

}

birthday('2006-04-28')