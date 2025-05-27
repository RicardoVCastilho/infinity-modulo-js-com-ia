/*
Atividade 01 - Primeiro, crie um array chamado cores contendo os seguintes elementos:
Vermelho, Verde, Azul, Amarelo.
Em seguida, acesse e exiba no console o elemento na posição 3.
*/

/*
Atividade 02 - Crie um array chamado animais contendo os seguintes elementos: Cachorro, Gato, Papagaio. 
Em seguida:
1 - Adicione o elemento Tartaruga ao final do array.
2 - Remova o primeiro elemento e adicione o elemento Coelho no início.
3 - Depois, substitua o elemento na posição 2 por Hamster.
4 - Exiba o comprimento atual do array.
5 - Acesse e exiba no console o elemento na posição 1.
6 - Finalmente, exiba o array final no console.
*/

/*
Atividade 03 - Crie um array chamado cores contendo as seguintes cores: Vermelho, Verde, Azul.
1 - Adicione as cores Amarelo e Roxo ao final do array.
2 - Em seguida, remova a última cor.
3 - Use o método splice para remover "Verde" e adicionar "Laranja" e "Marrom" em seu lugar.
4 - Crie um novo array chamado novasCores contendo as primeiras duas cores do array cores.
5 - Use o método join para criar uma string com todas as cores do array cores, separadas por uma vírgula.
6 - Inverta a ordem dos elementos no array cores.
7 - Exiba os arrays cores e novasCores, e a string resultante no console.
*/

/*
Atividade 04 - Crie um script que contenha um array de números e utilize o loop for para percorrê-lo. Para cada número no array, verifique se ele é par ou ímpar e exiba uma mensagem no console indicando o resultado.
*/
const numeros = [10, 23, 8, 4, 12];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
}
/*
Atividade 05 - Crie um script que contenha um array de nomes e utilize o loop for...of para percorrê-lo. Para cada nome no array, exiba uma mensagem de boas-vindas personalizada no console.
*/
const nomes = ["Ana", "Carlos", "Beatriz", "João", "Marina"];

for (const nome of nomes) {
  console.log(`Seja bem-vindo(a), ${nome}!`);
}