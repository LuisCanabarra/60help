// Credenciais Simples
const validUser = "idoso";
const validPassword = "1234";

// Elementos
const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

// Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser && password === validPassword) {
        loginScreen.style.display = "none";
        mainScreen.style.display = "block";
    } else {
        loginError.textContent = "Usuário ou senha incorretos!";
    }
});

// Suporte
const btnSuporte = document.getElementById("btn-suporte");
const formSuporte = document.getElementById("form-suporte");
const enviarSuporte = document.getElementById("enviar-suporte");

btnSuporte.addEventListener("click", () => {
    formSuporte.style.display = formSuporte.style.display === "none" ? "block" : "none";
});

enviarSuporte.addEventListener("click", () => {
    const problema = document.getElementById("descricao-problema").value;
    if (problema) {
        alert("Suporte solicitado com sucesso! Descrição do problema: " + problema);
        formSuporte.style.display = "none";
    } else {
        alert("Por favor, descreva o problema antes de enviar.");
    }
});

// Emergência
const btnEmergencia = document.getElementById("btn-emergencia");

btnEmergencia.addEventListener("click", () => {
    alert("Mensagem de emergência enviada para os contatos cadastrados!");
});
