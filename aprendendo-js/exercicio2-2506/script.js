console.log("Exercício 1: Tabuada completa");

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); // Linha em branco para separar as tabuadas
}

console.log("Exercício 2: Série de Fibonacci até o décimo termo");

let fib1 = 0, fib2 = 1;
console.log(fib1);
console.log(fib2);

for (let i = 3; i <= 10; i++) {
    let nextFib = fib1 + fib2;
    console.log(nextFib);
    fib1 = fib2;
    fib2 = nextFib;
}

console.log("Exercício 3: Números de 10 a 1 (ordem decrescente)");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Exercício 4: Cálculo do fatorial de 5");

let num = 5;
let fatorial = 1;

for (let i = num; i > 0; i--) {
    fatorial *= i;
}

console.log(`${num}! = ${fatorial}`);

console.log("Exercício 5: Números múltiplos de 7 de 1 a 100");

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

console.log("Exercício 6: Soma dos números de 50 até 100");

let soma = 0;

for (let i = 50; i <= 100; i++) {
    soma += i;
}

console.log("A soma dos números de 50 até 100 é:", soma);

console.log("Exercício 7: Mostrar figura com utilização de laços");

let figura = "";

for (let i = 1; i <= 5; i++) {
    figura += "*";
    console.log(figura);
}
