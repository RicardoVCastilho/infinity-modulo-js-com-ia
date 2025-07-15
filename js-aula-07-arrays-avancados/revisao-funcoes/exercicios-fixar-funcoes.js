/*1 - Crie uma função chamada dobrarNumero que receba um número e retorne o dobro dele. Depois, chame essa função de duas formas:

- Usando console.log() dentro da função
- Usando return e imprimindo o resultado fora da função*/
function dobrarNumeroComLog(num) {
  console.log(num * 2);
}

function dobrarNumeroComReturn(num) {
  return num * 2;
}

dobrarNumeroComLog(4); // imprime 8
let resultado = dobrarNumeroComReturn(4);
console.log(resultado); // imprime 8


/*2 - Crie uma função chamada verificarPar que receba um número como parâmetro.
A função deve retornar true se o número for par e false se for ímpar.  Depois, mostre no console se um número qualquer (ex: 7) é par ou não, usando o retorno da função. */
function verificarPar(numero) {
  return numero % 2 === 0;
}

if (verificarPar(7)) {
  console.log("É par");
} else {
  console.log("É ímpar");
}


/*3 - Crie uma função chamada executarOperacao que receba dois números e uma função como parâmetros.
Ela deve executar essa função passando os dois números e retornar o resultado.

Depois, crie 3 funções: somar, subtrair e multiplicar.
Use a função executarOperacao com cada uma delas.
*/
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
} 

function somar(x, y) {
  return x + y;
}

function subtrair(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

console.log(executarOperacao(10, 5, somar));     
console.log(executarOperacao(10, 5, subtrair));     
console.log(executarOperacao(10, 5, multiplicar));  
