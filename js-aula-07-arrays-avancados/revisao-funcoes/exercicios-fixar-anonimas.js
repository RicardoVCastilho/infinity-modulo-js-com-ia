/*1 - Crie uma função anônima atribuída a uma variável chamada mensagem.
Essa função deve receber um nome como parâmetro e exibir no console:
"Bem-vindo(a), [nome]!"*/
const mensagem = function(nome) {
  console.log("Bem-vindo(a), " + nome + "!");
};

mensagem("Ricardo");

/*2 - Use a função setTimeout com uma função anônima que exiba no console:
"Aguardando... função executada depois de 2 segundos."

(O tempo deve ser de 2000 milissegundos) */
setTimeout(function() {
  console.log("Aguardando... função executada depois de 2 segundos.");
}, 2000);

/*3 - Crie um array com 3 nomes.
Use o método forEach com uma função anônima para exibir cada nome com a frase:
"Nome: [nome]" */
const nomes = ["Ana", "Carlos", "Marina"];

nomes.forEach(function(nome) {
  console.log("Nome: " + nome);
});
