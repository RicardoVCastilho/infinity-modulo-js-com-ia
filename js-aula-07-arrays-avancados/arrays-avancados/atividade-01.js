const numeros = [5, -3, 0, 12, -7, 8, 0];

numeros.forEach(function(numero) {
  if (numero > 0) {
    console.log(numero + " é positivo.");
  } else if (numero < 0) {
    console.log(numero + " é negativo.");
  } else {
    console.log(numero + " é zero.");
  }
});
