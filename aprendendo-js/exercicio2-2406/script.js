//1° Calcular média das notas e determinar status do aluno
let nota1 = 8;
let nota2 = 6;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Reforço");
} else {
    console.log("Reprovação");
}

//2° Calcular IMC e determinar status
let peso = 70; // em kg
let altura = 1.75; // em metros

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

//3° Comparar dois números
let a = 10;
let b = 15;

if (a > b) {
    console.log("a é maior que b");
} else if (a < b) {
    console.log("a é menor que b");
} else {
    console.log("a e b são iguais");
}

//4° Ajuste salarial baseado em dependentes
let salario = 2000;
let quantidadeDependentes = 3;

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    salario *= 1.30; // aumento de 30%
} else if (quantidadeDependentes > 5) {
    salario *= 1.40; // aumento de 40%
}

console.log("Salário ajustado: " + salario);

//5° Verificar se é dia útil ou final de semana
let diaSemana = 1; // 1-Domingo, 2-Segunda, ..., 7-Sábado

if (diaSemana == 1 || diaSemana == 7) {
    console.log("Final de semana");
} else if (diaSemana >= 2 && diaSemana <= 6) {
    console.log("Dia útil");
} else {
    console.log("Dia inválido");
}

//6° Verificar se um ano é bissexto
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Ano bissexto");
} else {
    console.log("Ano não é bissexto");
}

//7° Verificar idade válida
let idade = 135;

if (idade < 0 || idade > 130) {
    console.log("Idade inválida");
} else {
    console.log("Idade válida");
}

//8° Mensagem baseada no turno de aula
let turno = 'M'; // 'M' para Matutino, 'V' para Vespertino, 'N' para Noturno

switch (turno) {
    case 'M':
        console.log("Bom Dia!");
        break;
    case 'V':
        console.log("Boa Tarde!");
        break;
    case 'N':
        console.log("Boa Noite!");
        break;
    default:
        console.log("Valor Inválido!");
}
