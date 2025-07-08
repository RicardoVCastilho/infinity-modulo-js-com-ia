function executarAtividade() {
    function calcularDesconto(preco, desconto) {
        const valorDesconto = preco * (desconto / 100);
        const precoFinal = preco - valorDesconto;
        return precoFinal;
    }

    console.log("Produto 1:", calcularDesconto(100, 10)); // 10% de 100 = 90
    console.log("Produto 2:", calcularDesconto(250, 20)); // 20% de 250 = 200
    console.log("Produto 3:", calcularDesconto(80, 5));   // 5% de 80 = 76
    console.log("Produto 4:", calcularDesconto(50, 0));   // 0% de desconto = 50
    console.log("Produto 5:", calcularDesconto(300, 100)); // 100% = 0
}