// Requisito 3 - Validar email e senha ao clicar no botão "entrar".
const buttonLog = document.getElementById('buttonLogin');

function clickLogin() {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLog.addEventListener('click', clickLogin);

// Requisito 18 - Habilitar o botão "enviar" somente com a validação do checkbox agreement.
const checkboxAgree = document.getElementById('agreement');
const buttonSend = document.getElementById('submit-btn');
function allowSend() {
  if (checkboxAgree.checked) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
}
checkboxAgree.addEventListener('click', allowSend);

// Requisito 20 - Criar um contador de caracteres.
const textarea = document.getElementById('textarea');
const counterValue = document.getElementById('counter');
const maxChars = 500;

function charsCounter() {
  counterValue.innerText = maxChars - textarea.value.length;
}

textarea.addEventListener('input', charsCounter);
