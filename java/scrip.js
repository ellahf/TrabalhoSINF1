// Função para abrir o pop-up
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popupForm"); // Pega o formulário
    const openPopupBtn = document.getElementById("openPopupBtn"); // Botão de abrir
    const closePopupBtn = document.querySelector(".close-btn"); // Botão "X" de fechar

    // Quando o botão "Criar Nova Coleção" for clicado, mostrar o popup
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Quando clicar no botão "X", esconder o popup
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Fechar o popup ao clicar fora dele (fundo escuro)
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});