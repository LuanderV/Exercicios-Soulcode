//1° Exercício: Função para calcular e retornar o IMC.
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const imc = calcularIMC(70, 1.75);
console.log("IMC:", imc);

function indicarStatusIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30) {
        console.log("Obesidade");
    } else {
        console.log("IMC inválido");
    }
}

indicarStatusIMC(imc);

//2° Exercício:Função que recebe um número de 0 a 1 e retorna em porcentagem.
function percentual(numero) {
    return (numero * 100).toFixed(1) + '%';
}

console.log("Percentual:", percentual(0.456));

//3° Exercício: Função que verifica se um número é negativo.
function ehNegativo(numero) {
    return numero < 0;
}

console.log("É negativo?", ehNegativo(-2));
console.log("É negativo?", ehNegativo(3));

//4° Exercício: Função que conta até um número passado por parâmetro.
function contar(numero) {
    for (let c = 1; c <= numero; c++) {
        console.log(c);
    }
}

contar(5);

//5° Exercício: Função que recebe um nome e sobrenome e retorna o nome completo.
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

console.log("Nome completo:", nomeCompleto("João", "Silva"));

//6° Exercício: Função para calcular a área de um círculo.
function calcularAreaCirculo(raio) {
    const PI = 3.14;
    return PI * raio * raio;
}

const area = calcularAreaCirculo(3);
console.log("Área do círculo:", area);

//7° Exercício: Função que recebe a área de um círculo e mostra o nível.
function nivelAreaCirculo(area) {
    if (area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if (area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

nivelAreaCirculo(area);

//8° Exercício: Função que recebe uma string e retorna a mesma string em letras minúsculas.
function paraMinusculas(str) {
    return str.toLowerCase();
}

console.log("Minúsculas:", paraMinusculas("Olá Mundo!"));

//9° Exercício: Função que recebe uma string e um caractere e retorna o número de ocorrências desse caractere na string.
function contarOcorrencias(str, char) {
    let contador = 0;
    str = str.toLowerCase();
    char = char.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}

console.log("Ocorrências:", contarOcorrencias("BANANA", "a"));
