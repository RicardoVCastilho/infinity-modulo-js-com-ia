/*Crie uma pequena aplicação em JavaScript que analise um conjunto de dados utilizando métodos auxiliares de arrays (forEach(), map(), filter(), reduce(), some(), find(), every()). O projeto deve incluir operações como filtragem
de dados, transformação de informações e cálculo de estatísticas.

Escolha dos Dados: Defina um array com dados fictícios, representando produtos, usuários,
ou transações.

Análise de Dados: Utilize métodos auxiliares de arrays para:

- Filtrar itens que atendem a certos critérios.
- Transformar dados para facilitar a análise (ex.: calcular o preço com desconto).
- Somar valores ou calcular médias utilizando reduce().
- Verificar condições gerais ou específicas com some(), every(), ou find().*/

const produtos = [
  { id: 1, nome: "Camiseta", preco: 30, categoria: "Roupas", estoque: 10, desconto: 0.1 },    // 10% desconto
  { id: 2, nome: "Calça", preco: 80, categoria: "Roupas", estoque: 0, desconto: 0 },
  { id: 3, nome: "Tênis", preco: 150, categoria: "Calçados", estoque: 5, desconto: 0.2 },    // 20% desconto
  { id: 4, nome: "Boné", preco: 25, categoria: "Acessórios", estoque: 15, desconto: 0 },
  { id: 5, nome: "Meia", preco: 10, categoria: "Acessórios", estoque: 50, desconto: 0.05 }   // 5% desconto
];

// Filtrar
const produtosEmPromocao = produtos.filter(p => p.desconto > 0);


const produtosComPrecoFinal = produtosEmPromocao.map(p => ({
  ...p,
  precoFinal: +(p.preco * (1 - p.desconto)).toFixed(2)
}));

// Analisar
const totalEstoque = produtos.reduce((total, p) => total + p.estoque, 0);

const somaPrecos = produtos.reduce((total, p) => total + p.preco, 0);
const mediaPreco = +(somaPrecos / produtos.length).toFixed(2);

const temProdutoEsgotado = produtos.some(p => p.estoque === 0);

const todosComPrecoValido = produtos.every(p => p.preco > 0);

const primeiroProdutoCaro = produtos.find(p => p.preco > 100);

// 2.8 Exibir informações de produtos em promoção (forEach)
console.log("Produtos em promoção:");
produtosComPrecoFinal.forEach(p => {
  console.log(`${p.nome}: preço original R$${p.preco}, preço com desconto R$${p.precoFinal}`);
});

// 2.9 Exibir resumo das análises
console.log("\nResumo das análises:");
console.log(`Total do estoque: ${totalEstoque} unidades`);
console.log(`Preço médio dos produtos: R$${mediaPreco}`);
console.log(`Existe produto esgotado? ${temProdutoEsgotado ? "Sim" : "Não"}`);
console.log(`Todos os produtos têm preço válido? ${todosComPrecoValido ? "Sim" : "Não"}`);
console.log(`Primeiro produto caro encontrado: ${primeiroProdutoCaro ? primeiroProdutoCaro.nome : "Nenhum"}`);

