const numeros = [2, 4, 5, 7, 10];

const quadrados = numeros.map((numero) => {
  return numero * numero;
});

console.log("Array original:", numeros);
console.log("Array com quadrados:", quadrados);
