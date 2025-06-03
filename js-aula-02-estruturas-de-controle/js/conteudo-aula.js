// Operadores lógicos

// AND (E) -> Só é verdadeiro se ambas as expressões forem verdadeiras
let a = true;
let b = false;
let c = true;

console.log(a && b);  // false
console.log(a && c);  // true

// OR (||) -> É verdadeiro quando pelo menos uma das expressões é verdadeira
let d = true;
let e = false;
let f = false;

console.log(d || e);  // true
console.log(e || f);  // false

// NOT (!) -> Inverte o valor lógico
console.log(!a);  // false
console.log(!b);  // true

// Operadores de Comparação
const numero = '5';

console.log(numero == 5);   // true (compara só valor)
console.log(numero === 5);  // false (valor e tipo)
console.log(numero != 5);   // false
console.log(numero !== 5);  // true

const idade = 18;

console.log(idade > 18);   // false
console.log(idade >= 18);  // true
console.log(idade < 18);   // false
console.log(idade <= 18);  // true

// Condicionais

// if
let idade2 = 18;
if (idade2 >= 18) {
    console.log("Você é maior de idade.");
}

// if/else
let idade3 = 16;
if (idade3 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// if/else if/else
let nota = 85;

if (nota >= 90) {
    console.log("Você tirou A!");
} else if (nota >= 80) {
    console.log("Você tirou B!");
} else if (nota >= 70) {
    console.log("Você tirou C!");
} else {
    console.log("Você tirou F.");
}

// Operador ternário
let idade4 = 18;
let situacao = (idade4 >= 18) ? "Maior de idade" : "Menor de idade";

console.log(situacao);

// Switch - Case
let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 1:
        nomeDoDia = "Domingo";
        break;
    case 2:
        nomeDoDia = "Segunda-feira";
        break;
    case 3:
        nomeDoDia = "Terça-feira";
        break;
    case 4:
        nomeDoDia = "Quarta-feira";
        break;
    case 5:
        nomeDoDia = "Quinta-feira";
        break;
    case 6:
        nomeDoDia = "Sexta-feira";
        break;
    case 7:
        nomeDoDia = "Sábado";
        break;
    default:
        nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia);
