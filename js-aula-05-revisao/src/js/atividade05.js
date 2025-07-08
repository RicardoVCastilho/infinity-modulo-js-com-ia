function gerarTriangulo() {
  // Pede ao usuário para digitar um número inteiro
  const entrada = prompt("Digite um número inteiro para gerar o triângulo:");
  const n = parseInt(entrada);   // Converte a entrada para número inteiro

  // Verifica se a entrada é inválida (não é número ou menor/igual a 0)
  if (isNaN(n) || n <= 0) {
    console.log("Por favor, insira um número inteiro positivo.");
    return; // Interrompe a execução da função
  }

  // Laço externo: controla o número de linhas do triângulo (de n até 1)
  for (let i = n; i >= 1; i--) {
    let linha = ""; // Inicializa a linha que será construída

    // Laço interno: constrói a linha com números de 1 até i
    for (let j = 1; j <= i; j++) {
      linha += j + " "; // Adiciona o número atual e um espaço
    }
    // Exibe a linha construída no console
    console.log(linha);
  }
}
