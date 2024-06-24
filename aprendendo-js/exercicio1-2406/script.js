let temperaturaFahrenheit = 80;

let temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;

console.log("Temperatura em Fahrenheit:", temperaturaFahrenheit);
console.log("Temperatura em Celsius:", temperaturaCelsius.toFixed(2));

let nota1 = 7.5;
let nota2 = 6.0
let nota3 = 8.5
let nota4 = 9.0
let nota5 = 7.0

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4 + nota5 * peso5) / (peso1 + peso2 + peso3 + peso4 + peso5);

console.log("Notas:", nota1, nota2, nota3, nota4, nota5);
console.log("Pesos:", peso1, peso2, peso3, peso4, peso5);
console.log("Média ponderada:", mediaPonderada.toFixed(2));