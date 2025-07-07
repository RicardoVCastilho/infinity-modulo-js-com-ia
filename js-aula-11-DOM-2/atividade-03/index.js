// Captura os elementos do HTML
const btnAdicionar = document.getElementById('btnAdicionarTarefa');
const inputTitulo = document.getElementById('tituloTarefa');
const inputDescricao = document.getElementById('descricaoTarefa');
const container = document.getElementById('cartoesContainer');

// Evento de clique no botão
btnAdicionar.addEventListener('click', function() {
  const titulo = inputTitulo.value.trim();
  const descricao = inputDescricao.value.trim();

  if (titulo !== '' && descricao !== '') {
    // Criar div do cartão
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');

    // Criar título <h3>
    const tituloElemento = document.createElement('h3');
    tituloElemento.textContent = titulo;

    // Criar descrição <p>
    const descricaoElemento = document.createElement('p');
    descricaoElemento.textContent = descricao;

    // Montar o cartão
    cartao.appendChild(tituloElemento);
    cartao.appendChild(descricaoElemento);

    // Adicionar o cartão ao container
    container.appendChild(cartao);

    // Limpar os campos
    inputTitulo.value = '';
    inputDescricao.value = '';
    inputTitulo.focus();
  } else {
    alert('Por favor, preencha o título e a descrição da tarefa.');
  }
});
