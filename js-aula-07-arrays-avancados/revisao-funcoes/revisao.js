// O que é uma função? R - Um bloco de código reutilizável que executa uma tarefa específica. Palavra chave = reutilizável

function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

saudacao(); // Callback/reutilização da função

// Observemos a sintaxe de uma função, mais especificamente o uso do return
function nomeDaFuncao(parametro) {
    return resultado;      
}

// O return é um bloco de código que encerra a execução de uma função e entrega um resultado que pode ser reutilizado em todo o código, caso seja armazenado em uma variável, por exemplo.
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);

console.log(`O uso da função soma na variável resultado tem o valor de ${resultado}.`);

// Qual a diferença de um return para um console.log?
// O return é para o programa em desenvolvimento e o console.log é para o desenvolvedor.
function somar(a, b) {
  console.log(a + b);
}

let resultado2 = somar(3, 4);  
console.log(resultado2);

// Funções nativas do JS são baseadas nos seus principais objetos e métodos (Math, String, Number, Arrays, Date) que podemos utilizar na linguagem e acessadas através da notação de ponto.

// Objeto Math (raiz quadrada, potência, arrendodar, arredondar para cima e para baixo, gerar um número aleatório em um intervalo definido).
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));    
console.log(Math.round(4.7));   
console.log(Math.floor(4.9));   
console.log(Math.ceil(4.1));    
console.log(Math.random());     

// Métodos de string (Comprimento, maiúscula, minúscula, se inclui os caracteres, posição do caractere através do índicie, trocar alguma parte da string)
let nome = "Ricardo";

console.log(nome.length);       
console.log(nome.toUpperCase()); 
console.log(nome.toLowerCase()); 
console.log(nome.includes("car")); 
console.log(nome.charAt(0));     
console.log(nome.replace("Ric", "Mar")); 

// Métodos de Number (Fixar em x casas decimais, pode arredondar e converter de string para number)
let preco = 19.99;

console.log(preco.toFixed(1)); 
console.log(Number("123")); 

//Métodos de manipulação de Arrays (índicie, comprimento e alteração do Array);

let frutas = ["maçã", "banana", "uva"];

console.log(frutas.length);    
console.log(frutas[1]);            
frutas.push("laranja");             // adiciona no final
frutas.pop();                       // remove o último
console.log(frutas.indexOf("uva")); 

// Objeto Date ( Gerando uma nova data e hora atuais, exibindo o ano atual, o mês de 0 a 11 e o dia do mês)
let agora = new Date();

console.log(agora);                   
console.log(agora.getFullYear());    
console.log(agora.getMonth() + 1);    
console.log(agora.getDate());

// Funções anônimas - Consiste em uma função sem nome, geralmente atribuída a uma variável ou usada diretamente como argumento em outra função.
const saudacao = function() {
  console.log("Olá!");
};

saudacao(); 

// Função nomeada x anônima
function exibirMensagem() {
  console.log("Função nomeada");
}

const mostrarMensagem = function() {
  console.log("Função anônima");
};

// Quando usar? R - Quando queremos passar uma função como argumento (callback).Ao criar funções dentro de outras. Em métodos como forEach(Que é um método de array que executa uma função para cada elemento do array)

// Callback - Ex com a função nativa do JS setTimeOut - que agenda a execução de uma função após um determinado tempo definido em milisegundos.
setTimeout(function() {
  console.log("Executou depois de 2 segundos");
}, 2000);

// Função dentro de função
const operacao = function(a, b) {
  return a + b;
};

// Método .forEach
const frutas2 = ["maçã", "banana", "uva"];
frutas.forEach(function(fruta) {
  console.log(fruta);
});

// Arrow Functions - Ou (funções de seta) são uma forma mais curta e moderna de escrever funções em JavaScript.
// Função tradicional x Arrow function
function somar(a, b) {
  return a + b;
}

const somar = (a, b) => {
  return a + b;
};

// Pode ser utilizada de 3 formas: Com múltiplos parâmetros e um bloco de código, um único parâmetro e com um retorno implícito
const multiplicar = (x, y) => {
  return x * y;
};

const quadrado = x => {
  return x * x;
};

const subtrair = (a, b) => a - b; // Um bloco inteiro resumido em uma linha só










