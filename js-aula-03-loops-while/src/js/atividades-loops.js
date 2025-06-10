// Atividade 01 - Loop while
function atividade01() {
  let i = 1;
  let saida = '';
  while (i <= 10) {
    console.log(i);
    saida += i + " ";
    i++;
  }
  exibirResultado("Atividade 01:\n" + saida);
}

// Atividade 02 - Loop do...while até número negativo
function atividade02() {
  let numero;
  do {
    numero = Number(prompt("Digite um número (negativo para parar):"));
    console.log("Número inserido:", numero);
  } while (numero >= 0);
  exibirResultado("Atividade 02:\nLoop encerrado.");
}

// Atividade 03 - Adivinhar número
function atividade03() {
  const numeroCorreto = 7;
  let tentativa;
  do {
    tentativa = Number(prompt("Adivinhe o número entre 1 e 10:"));
    console.log("Tentativa:", tentativa);
  } while (tentativa !== numeroCorreto);
  alert("Parabéns! Você acertou!");
  exibirResultado("Atividade 03:\nNúmero correto adivinhado.");
}

// Atividade 04 - Soma até número inserido
function atividade04() {
  let numero = Number(prompt("Digite um número inteiro positivo:"));
  
  if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
    alert("Por favor, insira um número inteiro positivo válido.");
    return;
  }

  let soma = 0;
  let i = 1;
  let numeros = [];

  while (i <= numero) {
    numeros.push(i);
    soma += i;
    i++;
  }

  console.log("Números: " + numeros.join(", "));
  console.log("Soma de 1 até " + numero + " é: " + soma);

  exibirResultado(
    "Atividade 04:\nNúmeros: " + numeros.join(", ") +
    "\nSoma: " + soma
  );
}

// Atividade 05 - Loop for com continue e break
function atividade05() {
  let saida = '';
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    if (i > 15) break;
    console.log(i);
    saida += i + " ";
  }
  exibirResultado("Atividade 05:\n" + saida);
}

// Atividade 06 - Loop for...of com string
function atividade06() {
  let texto = prompt("Digite uma palavra ou frase:");
  let saida = '';
  for (let char of texto) {
    console.log(char);
    saida += char + " ";
  }
  exibirResultado("Atividade 06:\n" + saida);
}

function exibirResultado(texto) {
  document.getElementById('resultado').innerText = texto;
}
