let transactions = [] //salvar localmente as mudanças no site
//servindo de espelho ao que está no backEnd

const createTransactionContainer = (id) => {
  const container = document.createElement('div');
  container.classList.add("transaction");
  container.id = `transaction-${id}`;
  return container;
  //A partir de um ID que contém todas as info sobre um budge, adicionamos uma classlist e o id ao elemento criado (DIV)
  //depois retornamos seu valor ao código que o solicitou
}

const createTitleContainer = (name) => {
  const title = document.createElement("span");
  title.classList.add('transaction-title')
  title.textContent = name;
  return title;
  //Mesmo sistema do TransactionContainer
}

const createTransactionAmount = (amount) => {
  const span = document.createElement('span');
  span.classList.add('transaction-amount');
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  const formatedAmount = formater.format(amount);
  //formata de acordo com o que foi pedido ao user
  if(amount > 0){
    span.textContent = `${formatedAmount} C`
    span.classList.add('credit');
  }else{
    span.textContent = `${formatedAmount} D`
    span.classList.add('debit')
  }
  return span
}

const renderTransaction = (transaction) => {
  const container = createTransactionContainer(transaction.id)
  const title = createTitleContainer(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const editBttn = createTransactionButton(transaction)
  document.getElementById('transactions').append(container)
  container.append(title, amount, editBttn);
}

const fetchTransactions = async () => {
  return await fetch('http://localhost:3000/amount').then(res => res.json());
  //com essa funcção, a promise a ser retornada irá transformar as info para o backend com o metodo .json()
}
const createTransactionButton = (transaction) => {
  const edit = document.createElement('button')
  edit.classList.add('edit-btn')
  edit.textContent = 'Edit'
  edit.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id;
    document.querySelector('#name').value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  })
  return edit
}
function updateBalance(){
  const balanceSpan = document.querySelector('#balance');
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  balanceSpan.textContent = formater.format(balance)
  // balanceSpan.textContent = formater.format(balance);
}

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
  updateBalance()
}

async function saveTransactio(ev){
  ev.preventDefault()
  const name = document.getElementById('name').value
  const amount = Number(document.getElementById("amount").value)
  // console.log(transaction)
  const transaction = await response.json() 
  //essa const, espera se o conteúdo foi add corretamente ao backend para prosseguir
  if (id) {
    const response = await fetch(`http://localhost:3000/amount${id}`,  {
    method: 'PUT', //o método fetch, coletará a URL em que será adicionada ou retirada e indicará qual método cm o backend o dev quer realizar cm o user
    //no caso, o method?, indicará se o user quer postar, coletar ou deletar um conteúdo da pagina e do back
    body: JSON.stringify({name, amount}), //body indica qual elemento será add, no caso o objeto unido com 2 variaveis externas
    //o headers indicará o tipo de conteudo a ser postado, no caso uma app de json.
    Headers: {
      'Content-type': 'aplication/json'
    }
  })
    const transaction = await response.json()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1, transaction)
    document.querySelector(`#transaction-${id}`).remove()
    renderTransaction(transaction)
  } else {
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }

  ev.target.reset() /
  /reseta todos os campos no HTML
  updateBalance() 
  //aumentará o valor total.
}


document.addEventListener('DOMContentLoaded', setup);
document.querySelector('form').addEventListener('submit', saveTransactio)