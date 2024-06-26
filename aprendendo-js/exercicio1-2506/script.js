console.log("Exercício 1: Números pares de 2 a 10");

let num = 2;

while (num <= 10) {
    console.log(num);
    num += 2; // Incrementa de 2 em 2 para obter os números pares
}

console.log();

console.log("Exercício 2: Tabuada do 7");

let multiplicador = 1;
const tabuadaNumero = 7;

while (multiplicador <= 10) {
    let resultado = tabuadaNumero * multiplicador;
    console.log(`${tabuadaNumero} x ${multiplicador} = ${resultado}`);
    multiplicador++;
}

console.log();

console.log("Exercício 3: Soma de números ímpares de 1 até 999");

let numero = 1;
let somaImpares = 0;

while (numero <= 999) {
    if (numero % 2 !== 0) {
        somaImpares += numero;
    }
    numero++;
}

console.log("A soma dos números ímpares de 1 até 999 é:", somaImpares);
console.log();

console.log("Exercício 4: Números divisíveis por 9 entre 1 e 1000");

let contador = 1;
let totalDivisiveisPor9 = 0;

while (contador <= 1000) {
    if (contador % 9 === 0) {
        console.log(contador);
        totalDivisiveisPor9++;
    }
    contador++;
}

console.log(`Total de números divisíveis por 9 entre 1 e 1000: ${totalDivisiveisPor9}`);
