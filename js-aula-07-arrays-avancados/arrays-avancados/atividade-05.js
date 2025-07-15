const numeros = [4, 8, -2, 10, 0, 7];

const temNegativo = numeros.some(function(numero) {
  return numero < 0;
});

if (temNegativo) {
  console.log("O array contém pelo menos um número negativo.");
} else {
  console.log("O array não contém números negativos.");
}
