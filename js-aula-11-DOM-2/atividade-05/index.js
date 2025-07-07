const formulario = document.getElementById('formulario');
const campoTexto = document.getElementById('campoTexto');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio tradicional do formulário

  const texto = campoTexto.value.trim();

  if (texto !== '') {
    resultado.textContent = `Você digitou: ${texto}`;
    campoTexto.value = '';
    campoTexto.focus();
  } else {
    resultado.textContent = 'Por favor, digite algo antes de enviar.';
  }
});
