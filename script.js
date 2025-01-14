// Login
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'idoso' && password === '1234') {
    loginMessage.textContent = 'Login bem-sucedido!';
    loginMessage.style.color = 'green';
  } else {
    loginMessage.textContent = 'Usuário ou senha incorretos.';
    loginMessage.style.color = 'red';
  }
});

// Chat Suporte Técnico
const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

chatBtn.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

// Botão de Emergência
const emergencyBtn = document.getElementById('emergency-btn');
const emergencyStatus = document.getElementById('emergency-status');

emergencyBtn.addEventListener('click', () => {
  emergencyStatus.textContent = 'Emergência acionada! Localização enviada.';
});

// Acessibilidade
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');
const highContrast = document.getElementById('high-contrast');

increaseFont.addEventListener('click', () => {
  document.body.style.fontSize = '1.2em';
});

decreaseFont.addEventListener('click', () => {
  document.body.style.fontSize = '1em';
});

highContrast.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});
