// Aumentar e Diminuir Fonte
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');
const highContrast = document.getElementById('high-contrast');
const voiceCommandButton = document.getElementById('voice-command');
const voiceStatus = document.getElementById('voice-status');

// Função para aumentar a fonte
increaseFont.addEventListener('click', () => {
  document.body.style.fontSize = '1.2em';
});

// Função para diminuir a fonte
decreaseFont.addEventListener('click', () => {
  document.body.style.fontSize = '1em';
});

// Ativar/Desativar modo de alto contraste
highContrast.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// Função de Comando de Voz
let recognizing = false;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.onstart = () => {
  voiceStatus.textContent = 'Aguardando comando...';
};

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  voiceStatus.textContent = `Comando: ${command}`;

  if (command.includes('aumentar fonte')) {
    document.body.style.fontSize = '1.2em';
    voiceStatus.textContent = 'Fonte aumentada!';
  } else if (command.includes('diminuir fonte')) {
    document.body.style.fontSize = '1em';
    voiceStatus.textContent = 'Fonte diminuída!';
  } else if (command.includes('alto contraste')) {
    document.body.classList.toggle('high-contrast');
    voiceStatus.textContent = 'Modo de alto contraste ativado!';
  } else {
    voiceStatus.textContent = 'Comando não reconhecido. Tente novamente.';
  }
};

// Ativar/desativar o reconhecimento de voz
voiceCommandButton.addEventListener('click', () => {
  if (recognizing) {
    recognition.stop();
    voiceStatus.textContent = 'Comandos de voz desativados.';
    voiceCommandButton.textContent = 'Ativar Comando de Voz';
  } else {
    recognition.start();
    voiceStatus.textContent = 'Escutando...';
    voiceCommandButton.textContent = 'Desativar Comando de Voz';
  }
  recognizing = !recognizing;
});

