const numeros = [2, 4, 6, 8, 11, 14, 17];

const primeiroImpar = numeros.find(function(numero) {
  return numero % 2 !== 0;
});

if (primeiroImpar !== undefined) {
  console.log("O primeiro número ímpar é:", primeiroImpar);
} else {
  console.log("Não há números ímpares no array.");
}
