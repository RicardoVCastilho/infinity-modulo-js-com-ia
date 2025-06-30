function executarCinema() {
    // Parte 1: Verificar desconto por idade 
    const idade = 15;

    if (idade < 12 || idade >= 60) {
        console.log(`Idade: ${idade} anos - Você tem direito ao desconto!`);
    } else {
        console.log(`Idade: ${idade} anos - Você paga o valor normal.`);
    }

    // Parte 2: Verificar se a bilheteria está aberta 
    const horaAtual = new Date().getHours();  // Utilizando os objetos para capturar o dia e o horário atual
    const abertura = 14; 
    const fechamento = 22; 

    if (horaAtual >= abertura && horaAtual < fechamento) {
        console.log(`Agora são ${horaAtual}h - A bilheteria está aberta.`);
    } else {
        console.log(`Agora são ${horaAtual}h - A bilheteria está fechada.`);
    }

    //  Parte 3: Verificar se o filme está em exibição 
    const horarioFilme = 16; 
    const duracaoFilme = 2; 
    const fimFilme = horarioFilme + duracaoFilme;

    if (horaAtual >= horarioFilme && horaAtual < fimFilme) {
        console.log(`Agora são ${horaAtual}h - O filme está em exibição.`);
    } else if (horaAtual < horarioFilme) {
        console.log(`Agora são ${horaAtual}h - O filme ainda não começou.`);
    } else {
        console.log(`Agora são ${horaAtual}h - O filme já terminou.`);
    }
}
