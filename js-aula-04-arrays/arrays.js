// Variáveis simples X Compostas
let idade = 22;
let nome = "Ricardo";
let estaEnsinando = true;

/* Um Array = Múltiplos valores em uma única variável
Podem conter elementos de qualquer tipo (strings, number, boolean, etc). São acessados por meio de índicies, começando do 0 
*/
let alunos = ["João", "Maria", "Lúcia"]; // Array
let pessoa = {nome: "Carlos", idade: 40}; // Objeto

/*
Propriedade .length = Utilizada para saber o número de elementos em um array
*/
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);


// Acessando os elementos de uma array com seu índice
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

/*
Manipulação de Arrays e seus métodos

1 - Método .push() = Adiciona um elemento a mais no final do array, aumentando seu comprimento.
*/
let filmes = ["Vingadores", "Thunderbolts", "Quarteto"]

/*
2 - Método .pop() = Remove o último elemento de um Array e o retorna.
*/
let jogos = ["DMC", "Resident Evil", "TLOU", "God of War"];

/*
3 - Método .shift() = Remove o primeiro elemento do Array e o retorna.
*/
let cores = ["Vermelho", "Verde", "Azul", "Amarelo"];

/*
4 - Método .Unshift() = Adiciona um ou mais elementos ao início do array e retorna o novo comprimento.
*/
let cores2 = ["Roxo", "Cinza", "Preto",];

/*
5 - Método .Splice() = Altera por completo o conteúdo de um array, adicionando, removendo ou substituindo elementos. Precisa de parâmetros
*/
const frutas2 = ["Morango", "Limão", "Cajá"];

/*
6 - Método .Slice() = Retorna uma cópia superficial de uma parte de um array, selecionada desde o início até o fim (fim não incluído). O array original não é modificado.
*/
const superHerois = ["Hulk", "Batman", "Robin", "Superman", "Spider"];

/*
8 - Método .concat() = Usado para mesclar dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array.
*/
const carros1 = ["BMW", "Mercedez"];
const carros2 = ["Lamborguini", "Ferrari"];

/*
9 - Método .Reverse() = Inverte a ordem dos elementos de um arra no local. O primeiro elemento se torna o último, e o último elemento se torna o primeiro.
*/
const numeros2 = [10, 9, 8, 7, 6];


/*
10 - Método .Join() = Une todos os elementos de um array em uma string e retorna esta string. É possível especificar um separador.
*/
let verduras = ["Brócolis", "Cenoura", "Batata"];


/*
11 - Método .Sort() = Ordena os elementos de um array no local e retorna o mesmo. A ordem padrão é crescente e alfabética. Para números, a ordenação converte os valores em strings, o que pode gerar resultados inesperados. Para números corretos, use uma função de comparação.
*/
const verduras2 = ["Cebola", "Pimentão", "Chuchu", "Beterraba"];


/*
12 - Método .Includes() = Verifica se um array contém um determinado valor de forma rápida e simples.
*/
const array = [1, 2, 3, 4, 5];
console.log(array.includes(6));
console.log(array.includes(2));
console.log(array.includes(1, 2));

/*
Percorrendo Arrays

Percorrer arrays é uma tarefa comum e essencial para manipular e processar dados armazenados em listas.

1 - Loop for Tradicional
 - Permite controle total sobre o índice do array.
 - Ideal para quando você precisa acessar o índice do elemento.
*/
const numeros3 = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros3.length; i++) {
    console.log(numeros3[i]);
}

/*
2 - Loop for...of
- Simples e legível, focado nos valores dos elementos
- Não fornece o índice dos elementos.
*/
const frutas3 = ["Maçã", "Banana", "Uva"];
for (const fruta of frutas3) {
    console.log(fruta);
}
