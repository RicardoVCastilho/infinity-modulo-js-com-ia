const link = document.getElementById('meuLink');
const mensagem = document.getElementById('mensagem');

link.addEventListener('click', function (event) {
    event.preventDefault(); // Sempre previne primeiro

    const desejaIr = confirm('Você realmente deseja ir para o site?');

    if (desejaIr) {
        // Redireciona manualmente se o usuário confirmar
        window.location.href = link.href;
    } else {
        mensagem.textContent = 'Navegação cancelada pelo usuário.';
    }
});
