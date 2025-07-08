function executarLoops() {
  console.log("1. Números de 1 a 10 (for):");  // Exibe um título no console
  // Laço FOR para contar de 1 até 10
  for (let i = 1; i <= 10; i++) {
    console.log(i); // Mostra o valor de i em cada repetição
  }

  console.log("2. Números pares de 2 a 20 (while):"); // Exibe outro título no console
  let num = 2; // Declara a variável num com valor inicial 2

  // Laço WHILE que repete enquanto 'num' for menor ou igual a 20
  while (num <= 20) {
    console.log(num); // Mostra o número atual
    num += 2; // Soma 2 a cada repetição (apenas números pares)
  }

  console.log("3. Soma dos números de 1 a 5:");  // Exibe um novo título
  let soma = 0;  // Variável que vai armazenar a soma dos números

  // Laço FOR que vai de 1 até 5
  for (let i = 1; i <= 5; i++) {
    soma += i; // Adiciona o valor de i à variável soma
  }
  // Mostra o resultado final da soma no console
  console.log("Resultado da soma:", soma);
}
