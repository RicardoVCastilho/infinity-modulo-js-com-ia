function verificarIdade() {
  const idadeTexto = prompt("Digite sua idade:");
  const idade = parseInt(idadeTexto);

  if (isNaN(idade)) {
    console.log("Valor inválido. Por favor, insira um número.");
    return;
  }

  if (idade < 18) {
    console.log("Você é menor de idade.");
    alert("Você é menor de idade.");
  } else if (idade <= 65) {
    console.log("Você é um adulto.");
    alert("Você é um adulto.");
  } else {
    console.log("Você é idoso.");
    alert("Você é idoso.");
  }
}
