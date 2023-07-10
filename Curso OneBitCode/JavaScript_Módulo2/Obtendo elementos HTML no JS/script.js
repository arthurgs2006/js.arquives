
function show(){
  const contactList = document.getElementById('contact-list');
  console.log(contactList);
  //Por nome da Tag:
  const listElements = document.getElementsByTagName('li');
  console.log(listElements);
  //Por classe:
  const contactInputs = document.getElementsByClassName('contact-input');
  console.log(contactInputs);
  //por query selector All:
  const contacts = document.querySelectorAll('#contact-input > li > label');
  console.log(contacts);
  //por name:
  const contact1 = document.getElementsByName('contact-1');
  console.log(contact1);
  // por query select, porém individual:
  const firstcontact = document.querySelector('#contact-list > li > label');
  console.log(firstcontact);
}