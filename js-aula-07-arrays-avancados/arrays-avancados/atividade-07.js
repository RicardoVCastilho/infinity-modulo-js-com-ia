const numeros = [3, 7, 10, 1, 5];

const todosPositivos = numeros.every(function(numero) {
  return numero > 0;
});

if (todosPositivos) {
  console.log("Todos os números são positivos.");
} else {
  console.log("Há números negativos ou zero no array.");
}
