function gerarTriangulo() {
  const entrada = prompt("Digite um número inteiro para gerar o triângulo:");
  const n = parseInt(entrada);

  if (isNaN(n) || n <= 0) {
    console.log("Por favor, insira um número inteiro positivo.");
    return;
  }

  for (let i = n; i >= 1; i--) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += j + " ";
    }
    console.log(linha);
  }
}
