/*PERGUNTA: 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */

function calcularFaturamento(faturamento) {
    let menor = Math.min(...faturamento);
    let maior = Math.max(...faturamento);
    
    let soma = faturamento.reduce((total, valor) => total + valor, 0);
    let media = soma / faturamento.length;

    let diasAcimaDaMedia = faturamento.filter(valor => valor > media).length;

    return {
        menorFaturamento: menor,
        maiorFaturamento: maior,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

// Exemplo de uso:
const faturamento = [1000, 2000, 1500, 800, 1200, 3000, 2500, 0, 500, 4500, 1300, 600];
const resultado = calcularFaturamento(faturamento);

console.log("Menor valor de faturamento:", resultado.menorFaturamento);
console.log("Maior valor de faturamento:", resultado.maiorFaturamento);
console.log("Número de dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
