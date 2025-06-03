// Atividade 01
function verificar() {
    const numero1 = Number(prompt('Digite o primeiro número:'));
    const numero2 = Number(prompt('Digite o segundo número:'));

    const ambosPositivos = numero1 > 0 && numero2 > 0;
    const umPositivo = numero1 > 0 || numero2 > 0;
    const nenhumPositivo = !(numero1 > 0 || numero2 > 0);

    const resultado = `
        <p>Ambos são positivos: <strong>${ambosPositivos}</strong></p>
        <p>Pelo menos um é positivo: <strong>${umPositivo}</strong></p>
        <p>Nenhum é positivo: <strong>${nenhumPositivo}</strong></p>
    `;

    document.getElementById('resultado').innerHTML = resultado;

    console.log('Ambos são positivos:', ambosPositivos);
    console.log('Pelo menos um é positivo:', umPositivo);
    console.log('Nenhum é positivo:', nenhumPositivo);
}

// Atividade 02 
function comparar() {
    const numero3 = Number(prompt("Digite o primeiro número:"));
    const numero4 = Number(prompt("Digite o segundo número:"));

    const resultado = document.getElementById('resultadoComparacao');
    resultado.innerHTML =
        `<p><strong>Primeiro número:</strong> ${numero3}</p>
        <p><strong>Segundo número:</strong> ${numero4}</p>
        <hr>
        <p>numero3 == numero4 ➝ <strong>${numero3 == numero4}</strong></p>
        <p>numero3 === numero4 ➝ <strong>${numero3 === numero4}</strong></p>
        <p>numero3 != numero4 ➝ <strong>${numero3 != numero4}</strong></p>
        <p>numero3 !== numero4 ➝ <strong>${numero3 !== numero4}</strong></p>
        <p>numero3 > numero4 ➝ <strong>${numero3 > numero4}</strong></p>
        <p>numero3 >= numero4 ➝ <strong>${numero3 >= numero4}</strong></p>
        <p>numero3 < numero4 ➝ <strong>${numero3 < numero4}</strong></p>
        <p>numero3 <= numero4 ➝ <strong>${numero3 <= numero4}</strong></p>
        `;

    console.log("Atividade 02:");
    console.log(`numero1 == numero2 ➝ ${numero1 == numero2}`);
    console.log(`numero1 === numero2 ➝ ${numero1 === numero2}`);
    console.log(`numero1 != numero2 ➝ ${numero1 != numero2}`);
    console.log(`numero1 !== numero2 ➝ ${numero1 !== numero2}`);
    console.log(`numero1 > numero2 ➝ ${numero1 > numero2}`);
    console.log(`numero1 >= numero2 ➝ ${numero1 >= numero2}`);
    console.log(`numero1 < numero2 ➝ ${numero1 < numero2}`);
    console.log(`numero1 <= numero2 ➝ ${numero1 <= numero2}`);
}

// Atividade 03
function verificarNumero() {
    const numero = Number(prompt("Digite um número:"));

    if (numero > 0) {
        console.log("O número é positivo.");
        alert("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
        alert("O número é negativo.");
    } else {
        console.log("O número é zero.");
        alert("O número é zero.");
    }
}

function calculadora() {
    const numero5 = Number(prompt("Digite o primeiro número:"));
    const numero6 = Number(prompt("Digite o segundo número:"));
    const operacao = prompt("Digite a operação: (+ | - | * | /)");

    let resultado;

    switch (operacao) {
        case "+":
            resultado = numero5 + numero6;
            break;
        case "-":
            resultado = numero5 - numero6;
            break;
        case "*":
            resultado = numero5 * numero6;
            break;
        case "/":
            if (numero5 === 0) {
                resultado = "Divisão por zero não é permitida.";
            } else {
                resultado = numero5 / numero6;
            }
            break;
            default: 
            resultado = "Operação inválida";
            break;
    }

    console.log("Resultado: ", resultado);

    document.getElementById("resultado04").innerHTML = `<strong>Resultado:</strong> ${resultado}`;
}