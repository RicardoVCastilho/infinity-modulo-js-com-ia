//Botão clicável
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    alert("O botão foi clicado.")
});

//Criando novo elemento (paragáfo)
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = "Este é um novo parágrafo";
document.body.appendChild(novoParagrafo)

//Coleta de dados
document.getElementById('btn-2').addEventListener('click', function(event) {
    console.log('Tipo de evento: ', event.type);
    console.log('Elemento alvo: ', event.target);
})

//Previnindo comportamento
const form = document.getElementById('meuFormulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Formulário enviado, mas sem recarregar a página.")
})