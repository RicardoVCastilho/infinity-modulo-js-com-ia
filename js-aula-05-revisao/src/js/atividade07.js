// Atividade 07 - Manipulação de Arrays com métodos avançados

function atividade07() {
  const numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

  // 1. Filtra os números pares e armazena no array 'pares'
  const pares = numeros.filter(num => num % 2 === 0);

  // 2. Eleva ao quadrado cada número do array de pares
  const paresAoQuadrado = pares.map(num => num ** 2);

  // 3. Calcula a soma dos números ao quadrado
  const somaTotal = paresAoQuadrado.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

  // 4. Exibição dos dados no console:
  console.log("🔢 Array original:", numeros);
  console.log("✅ Números pares:", pares);
  console.log("⬆️ Pares ao quadrado:", paresAoQuadrado);
  console.log("🧮 Soma dos pares ao quadrado:", somaTotal);
}

// Chamada da função para execução
atividade07();
