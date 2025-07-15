const numeros = [3, 8, 11, 20, 7, 14, 0, 5];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log("Números pares:", numerosPares);
