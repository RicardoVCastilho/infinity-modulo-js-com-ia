/*1 - Crie uma arrow function chamada dobrar que receba um número e retorne o dobro dele.*/
const dobrar = num => num * 2;
console.log(dobrar(5)); 

/*2 - Crie uma arrow function chamada soma que receba dois números e retorne a soma deles. */
const soma = (a, b) => a + b;
console.log(soma(3, 7));

/*3 - Crie uma arrow function chamada ehPar que receba um número e retorne true se o número for par e false caso contrário. Use bloco {} e if dentro da função.*/
const ehPar = num => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(ehPar(4));
console.log(ehPar(5));


