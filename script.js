// Selecionando os botões e o elemento de status
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
const highContrastButton = document.getElementById('high-contrast');
const voiceStatus = document.getElementById('voice-status');

// Função para aumentar a fonte
const increaseFont = () => {
  document.body.classList.add('large-font');
  document.body.classList.remove('small-font');
  voiceStatus.textContent = 'Fonte aumentada!';
};

// Função para diminuir a fonte
const decreaseFont = () => {
  document.body.classList.add('small-font');
  document.body.classList.remove('large-font');
  voiceStatus.textContent = 'Fonte diminuída!';
};

// Função para ativar/desativar o modo alto contraste
const toggleHighContrast = () => {
  document.body.classList.toggle('high-contrast');
  const isHighContrast = document.body.classList.contains('high-contrast');
  voiceStatus.textContent = isHighContrast ? 'Modo Alto Contraste ativado!' : 'Modo Alto Contraste desativado!';
};

// Adicionando eventos de clique nos botões
increaseFontButton.addEventListener('click', increaseFont);
decreaseFontButton.addEventListener('click', decreaseFont);
highContrastButton.addEventListener('click', toggleHighContrast);
