function inverterString(str) {
    let stringInvertida = "";

    // Itera pela string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Exemplo de uso com uma string definida no código:
const minhaString = "Distribuidora";
const resultado = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", resultado);