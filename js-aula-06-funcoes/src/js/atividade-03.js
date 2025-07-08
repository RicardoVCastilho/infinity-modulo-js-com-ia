function executarAtividade() {
    function calcularSoma(...numeros) {
        let soma = 0;

        for (let num of numeros) {
            soma += num;
        }
        return soma;
    }

    console.log("Soma 1:", calcularSoma(1, 2, 3));               
    console.log("Soma 2:", calcularSoma(10, 20));                
    console.log("Soma 3:", calcularSoma(5, 15, 25, 35));         
    console.log("Soma 4:", calcularSoma());                      
    console.log("Soma 5:", calcularSoma(100, 200, 300, 400, 500));

}