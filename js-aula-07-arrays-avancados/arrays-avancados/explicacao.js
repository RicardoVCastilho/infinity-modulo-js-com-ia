// Método forEach() - Executa uma função para cada elemento do array, ideal para iterações simples.
const number = [1, 2, 3, 4, 5,];

number.forEach((number, index) => {
    console.log(`O elemento no índice ${index} é ${number}.`);    
});

// Método map() - Cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => {
    return number * number;
})

console.log(squares);

// Método filter() - Cria um novo array com todos os elementos que passam em um teste especificado por uma função.
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter((number) => {
    return number % 2 === 0;
}) 

console.log(evenNumbers);

// Método reduce() - reduz todos os elementos do array a um único valor, aplicando uma função acumuladora.
const numeros = [10, 20, 30, 40];

const soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}); 

console.log("Soma total:", soma);
/*
1ª Iteração: acumulador = 0, valorAtual = 10 → retorna 10
2ª Iteração: acumulador = 10, valorAtual = 20 → retorna 30
3ª Iteração: acumulador = 30, valorAtual = 30 → retorna 60
4ª Iteração: acumulador = 60, valorAtual = 40 → retorna 100
*/

// Método some() - testa se pelo menos um elemento do array satisfaz uma condição Ele retorna true ou false.
const numeros2 = [3, 5, 8, 10];

const temPar = numeros2.some(function(numero) {
  return numero % 2 === 0;
});

console.log(temPar);

// Método find() - é usado para encontrar o primeiro elemento de um array que satisfaça uma condição específica. Ele retorna o elemento encontrado ou undefined se nenhum elemento atender ao critério.
const numeros3 = [5, 8, 12, 15, 22];

const primeiroPar = numeros3.find(function(numero) {
  return numero % 2 === 0;
});

console.log(`Primeiro número par: ${primeiroPar}`);


