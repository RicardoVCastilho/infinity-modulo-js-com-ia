//Variáveis
var nome = "Ricardo";
let idade = 21;
const cidade = "Recife";

console.log(nome, idade, cidade);

//Tipos de dados
let name = 'Carlos'; 
let age = 30;      
let estudante = true; 
let endereco;        
let nota = null;   
const userId = Symbol('id');  

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof endereco);
console.log(typeof nota); 
console.log(typeof userId); 

const user = {
  name: 'Carlos',
  age: 30,
  [userId]: 12345 
};

console.log(user);
console.log(user[userId]); // 12345

//Convertendo dados
let str = "1234";
console.log(Number(str));

let intStr = "4567.3";
console.log(parseInt(intStr));

let floatStr = "891.11";
console.log(parseFloat(floatStr));

let num = 123;
console.log(String(num));

//Operadores Aritméticops
let soma
let diferenca
let produto
let quociente
let resto
let contadorCrescente
let contadorDecrescente
let potencia

//Operadores de Atribuição
let x = 10; //Atribuição
let y = 20;

let a = 20; //Atribuição de soma
a =+ 5;

let b = 15; //Atribuição de subtração
b -= 5;

let m = 10; //Atribuição de multiplicação
m *= 2;

let e = 2; //Atribuição de exponenciação
e **= 3;

let r = 10; //Atribuição do resto
r %= 3;

let d = 10; //Atribui9çào de divisão
d /= 2;

//Concatenação e Template Strings
const novoNome = "Carlos";
const novaIdade = 30;

console.log("Meu nome é " + novoNome + " e eu tenho " + novaIdade + " anos.");
console.log(`Meu nome é ${novoNome} e eu tenho ${novaIdade} anos de idade.`);







