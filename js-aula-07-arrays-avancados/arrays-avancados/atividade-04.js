const numeros = [5, 10, 15, 20, 25];

const somaTotal = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0); // valor inicial = 0

console.log("Soma total:", somaTotal);
