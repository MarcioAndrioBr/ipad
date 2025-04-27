const popup = document.getElementById('popup');
let currentUrl = ""; // Armazena a URL do site para redirecionamento

// Pegando os botões
const linkSiga = document.getElementById('linkSiga');
const linkInovar = document.getElementById('linkInovar');
const linkClassRoom = document.getElementById('linkClassRoom');

// Adicionando eventos de clique
linkSiga.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPopup("https://siga.edubox.pt/auth");
});

linkInovar.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPopup("https://aeen.inovarmais.com/consulta/app/index.html#/login");
});

linkClassRoom.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPopup("https://classroom.google.com");
});

// Função para exibir o pop-up
function mostrarPopup(url) {
    currentUrl = url; // Define a URL atual
    popup.style.display = 'block';
}

// Função para continuar para o site
function continuar() {
    window.location.href = currentUrl;
}
