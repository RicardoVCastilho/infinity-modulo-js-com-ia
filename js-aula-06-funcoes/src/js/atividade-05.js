function executarAtividade() {
    const soma = function (a, b) {
        return a + b;
    };

    const subtrair = function (a, b) {
        return a - b;
    };

    const multiplicar = function (a, b) {
        return a * b;
    };

    // Chamadas das funções com diferentes valores e exibição no console
    console.log("Soma: ", soma(5, 3));         
    console.log("Subtração: ", subtrair(10, 4)); 
    console.log("Multiplicação: ", multiplicar(7, 6)); 

    console.log("Soma: ", soma(15, 25));         
    console.log("Subtração: ", subtrair(20, 30)); 
    console.log("Multiplicação: ", multiplicar(3, 0)); 

}