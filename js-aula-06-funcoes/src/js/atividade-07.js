function executarAtividade() {
    // Função arrow que filtra apenas os números pares de um array
    const filtrarPares = (array) => {
        return array.filter(num => num % 2 === 0);
    };

    // Função arrow que calcula a média dos números de um array
    const calcularMedia = (array) => {
        if (array.length === 0) return 0; // Evita divisão por zero
        const soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return soma / array.length;
    };

    const numeros = [3, 6, 8, 1, 10, 5, 7, 12];

    // Passo 1: Filtra os números pares
    const pares = filtrarPares(numeros);

    // Passo 2: Calcula a média dos pares
    const mediaDosPares = calcularMedia(pares);

    console.log("🔢 Array original:", numeros);
    console.log("✅ Números pares:", pares);
    console.log("📊 Média dos números pares:", mediaDosPares);

}