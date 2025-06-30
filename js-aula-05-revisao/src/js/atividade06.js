function executarLoops() {
  console.log("1. Números de 1 a 10 (for):");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  console.log("2. Números pares de 2 a 20 (while):");
  let num = 2;
  while (num <= 20) {
    console.log(num);
    num += 2;
  }

  console.log("3. Soma dos números de 1 a 5:");
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    soma += i;
  }
  console.log("Resultado da soma:", soma);
}
