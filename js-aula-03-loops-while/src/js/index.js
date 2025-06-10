// // Loop infinito (não executar)
// while (true) {
//     console.log("Esse loop nunca vai parar.");
// }

// Loop com while
let contador = 1;

while (contador <= 5) {
    console.log("Contando: " + contador);
    contador++;
}

// Loop do... while
let numero = 1;

do {
    console.log("O número é: " + numero);
    numero++;
} while (numero <= 3);

// Loop com while (true)
let i = 0;

while (true) {
    console.log("Loop infinito... Interações: " + i);
    i++;
    if (i === 3) break;
}

// Loop for
for (let i = 1; i <= 5; i++) {
    console.log("Valor de i: " + i);
}

// Loop for...of 
const frutas = ["maçã", "banana", "uva"];

for (const fruta of frutas) {
    console.log("Fruta: " + fruta);
}
