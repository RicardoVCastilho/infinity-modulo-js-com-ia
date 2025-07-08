function executarAtividade() {
    // Função principal que recebe um array e uma função de callback
    function processarArray(array, callback) {
        return array.map(callback);
    }
    // Função callback que dobra um número
    function dobrarNumero(numero) {
        return numero * 2;
    }
    // Função callback que retorna a raiz quadrada
    function raizQuadrada(numero) {
        return Math.sqrt(numero);
    }
    // Array base de números
    const numeros = [4, 9, 16, 25, 36];
    // Usando a função com o callback 'dobrarNumero'
    const arrayDobrado = processarArray(numeros, dobrarNumero);
    // Usando a função com o callback 'raizQuadrada'
    const arrayRaiz = processarArray(numeros, raizQuadrada);

    console.log("🔢 Array original:", numeros);
    console.log("📈 Array dobrado:", arrayDobrado);
    console.log("🧮 Array com raiz quadrada:", arrayRaiz);

}