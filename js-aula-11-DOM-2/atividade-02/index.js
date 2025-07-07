// Captura os elementos do HTML
const botao = document.getElementById('btnAdicionar');
const input = document.getElementById('novoItem');
const lista = document.getElementById('listaItens');

// Evento de clique no botão
botao.addEventListener('click', function() {
  const texto = input.value.trim();

  if (texto !== '') {
    // Cria um novo <li>
    const novoItem = document.createElement('li');
    novoItem.textContent = texto;

    // Adiciona o <li> à lista
    lista.appendChild(novoItem);

    // Limpa o input
    input.value = '';
    input.focus();
  } else {
    alert('Digite algo para adicionar à lista.');
  }
});
