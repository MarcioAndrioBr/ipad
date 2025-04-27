const linkSiga = document.getElementById('linkSiga');
        const popup = document.getElementById('popup');
        let url = "https://siga.edubox.pt/auth";

        // Quando clicar no link
        linkSiga.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            mostrarPopup();
        });

        // Função para mostrar o pop-up
        function mostrarPopup() {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }

        // Função para continuar para o site
        function continuar() {
            window.location.href = url;
        }