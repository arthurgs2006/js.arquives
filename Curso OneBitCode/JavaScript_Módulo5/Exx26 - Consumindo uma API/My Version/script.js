let transactions = []


const renderTransferences = async (data) => {
  // const formater = Intl.NumberFormat('pt-BR',{ //Obj Global, formata valores em moeda brasileiras
  //   compactDisplay: 'long',
  //   currency: 'BRL',
  //   style: 'currency'
  // })
  // const formatedAmount = formater.format(amount);
  const article = document.createElement('article');
  article.classList.add('article');
  article.id = `article-${data.id}`;

  const transferenceTitle = document.createElement('h3');
  transferenceTitle.classList.add('h3');
  transferenceTitle.innerText =  `Transference ${data.name}`;

  const transferenceValue = document.createElement('p');
  // data.formater(data.value);
  
  transferenceValue.classList.add('p');
  if(data.value > 0){
    transferenceValue.textContent = `Valor da Transferência: R$${data.value}\nPago em Crédito.`;
    transferenceValue.classList.add('credit')
  } else{
    transferenceValue.textContent = `Valor da Transferência: R$${data.value}\nPago no débito.`;
    transferenceValue.classList.add('debit')
  }
  

  article.append(transferenceTitle, transferenceValue);
  document.querySelector('#transitionsList').append(article);
}

const fetchTransferences = async () => {
  const transfers = await fetch('http://localhost:3000/transitionsList').then(res => res.json())
  transfers.forEach(renderTransferences);
}

document.addEventListener('DOMContentLoaded', () => fetchTransferences())

const getData = document.querySelector('form').addEventListener('submit', async (ev) => {
  ev.preventDefault()
  const data = {
    // id: id,
    name: document.getElementById('title').value,
    value: document.getElementById('value').value
  }

  const response = await fetch('http://localhost:3000/transitionsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const deleteTrans = await fetch('http://localhost:3000/transitionsList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'aplication/json'
    }
    

  })

  // const put = await fetch('http://localhost:3000/transitionList', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })


  const saveData = response.json();
  document.querySelector('form').reset()
  renderTransferences(saveData);
  console.log(saveData);



})



