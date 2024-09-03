/*PERGUNTA: 
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53 */

function calcularParticipacaoPorEstado(faturamentoPorEstado) {
    // Calcula o faturamento total
    let faturamentoTotal = 0;
    for (let estado in faturamentoPorEstado) {
        faturamentoTotal += faturamentoPorEstado[estado];
    }

    // Calcula a porcentagem de cada estado
    let participacaoPorEstado = {};
    for (let estado in faturamentoPorEstado) {
        let participacao = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
        participacaoPorEstado[estado] = participacao.toFixed(2) + "%";
    }

    return participacaoPorEstado;
}

// Dados de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const resultado = calcularParticipacaoPorEstado(faturamentoPorEstado);

console.log("Participação por Estado no Faturamento Total:");
for (let estado in resultado) {
    console.log(`${estado}: ${resultado[estado]}`);
}