
function addContact(){
  const contactSection = document.getElementById('contact-list');

  const h3 = document.createElement('h3');
  h3.innerText = 'Contatos --';

  const ul = document.createElement('ul');
  
  const li = document.createElement('li');
  li.innerText = "Nome: ";
  const name_input = document.createElement('input');
  name_input.type = 'text';
  name_input.name = 'fullname';
  li.appendChild(name_input);
  ul.appendChild(li);
  ul.appendChild(document.createElement('br'));
  const phoneli = document.createElement('li');
  phoneli.innerText = "Número: ";
  const phone_input = document.createElement('input');
  phone_input.type = 'text';
  phone_input.name = 'phone_number';
  phoneli.appendChild(phone_input);
  ul.appendChild(phoneli);
  ul.appendChild(document.createElement('br'));
  const adress = document.createElement('li');
  adress.innerHTML = '<label for="adress">Endereço: </label>';
  const adress_input = document.createElement('input');
  adress_input.type = "text";
  adress_input.name = "adress";
  adress_input.id = "adress";
  adress.appendChild(adress_input);
  ul.appendChild(adress);
  contactSection.append(h3, ul);
}

function removeContact(){
  const contactSection = document.getElementById('contact-list');
  const titles = document.getElementsByTagName('h3');
  const contacts = document.getElementsByTagName('ul');

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}