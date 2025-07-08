// Criando e chamando uma função
function saudacao () {
    console.log("Olá Mundo!");
}

saudacao()

// Parâmetros de função + callback com parâmetro
function mensagem(nome) {
    console.log(`Olá, seja bem vindo ${nome}!`);
}

mensagem("Ricardo")

// Definindo um valor padrão
function mensagemComPadrao (nome = "Aluno") {
    console.log(`Bem vindo ao curso da Infinity, ${nome}!`);
}

mensagemComPadrao();

// Utilizando o método rest operator para receber vários parâmetros de uma vez
function listarFilmes(filmePrincipal, ...outrosFilmes) {
    console.log(`Filme principal: ${filmePrincipal}.`);
    console.log(`Outros filmes: ${outrosFilmes.join(", ")}.`);
}

listarFilmes("Batman", "Spiderman 2", "Wolverine 3", "Avatar 5");

// Return para devolver um valor para o chamador da função e encerrar um bloco de código
function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 4);
console.log(`O resultado da soma de 3 e 4 é: ${resultado}`);

// funções anônimas: Podem ser atribuidas para variáveis
let novaSaudacao = function(nome) {
    return "Olá, " + nome + "!";
}

console.log(novaSaudacao("Junior"));

//Ou podem ser retornadas por outras funções
function criarMultiplicador(multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    };
}

let dobra = criarMultiplicador(2);
console.log(dobra(5));

// Função com callback
function dizerOla() {
  console.log("Olá!");
}

function executar(callback) {
  console.log("Início...");
  callback(); // chama a função passada
  console.log("Fim...");
}

executar(dizerOla); // Chamando a função com o callback

// Arrow Functions
const subtrair = (num1, num2) => num1 - num2;
console.log(subtrair(10, 5));

const divisao = (num3, num4) => num3 - num4;
console.log(divisao(18, 9));


