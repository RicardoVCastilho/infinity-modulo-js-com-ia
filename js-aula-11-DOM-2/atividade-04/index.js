const area = document.getElementById('areaMouse');
const coordenadas = document.getElementById('coordenadas');

area.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  coordenadas.textContent = `X: ${x} | Y: ${y}`;
});
