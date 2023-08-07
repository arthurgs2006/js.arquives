
document.getElementById('keep-section').addEventListener('click', function (){
  const input = document.getElementById('input-section');
  sessionStorage.setItem('info', input.value);
  input.value = '';
});

document.getElementById('readSession').addEventListener('click', function (){
  const info = sessionStorage.getItem('info');
  alert(`A informação no session storage amarzenada é ${info}`);

})

document.getElementById('localButton').addEventListener('click', function(){
  const input = document.getElementById('local');
  localStorage.setItem('text', input.value);
  input.value = '';
})

document.getElementById("readLocal").addEventListener('click', function(){
  const info = localStorage.getItem('text');
  alert("A informação no local storage é " + info );
})

document.getElementById('cookieBtn').addEventListener('click', function(){
  const input = document.getElementById('cookie');
  //cookiename=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023, 3, 22) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path;
  input.value = ''
  console.log(document.cookie);
});

document.getElementById('cookie2Btn').addEventListener('click', function(){
  const input = document.getElementById('cookie2');
  //cookiename=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023, 4, 22) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path;
  input.value = ''
  console.log(document.cookie);
})