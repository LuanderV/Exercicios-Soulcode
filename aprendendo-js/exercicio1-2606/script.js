//Exercício 1: Inverter uma string
function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "JavaScript";
let reversedString = reverseString(originalString);

console.log("String Original:", originalString);
console.log("String Reversa:", reversedString);


//Exercício 2: Remover uma palavra específica da frase e trocar por "###"

let frase = "Eu comi arroz, feijão, batata e carne.";
let palavra = "carne";
let novaFrase = frase.replace(palavra, "###");

console.log("Frase Original:", frase);
console.log("Nova Frase:", novaFrase);


//Exercício 3: Verificar se o email é do domínio soulcode.com
function isSoulcodeEmail(email) {
    return email.endsWith("@soulcode.com");
}

let email = "usuario@soulcode.com";
let email2 = "usuario@outrodominio.com";

console.log(`O email ${email} é do domínio soulcode.com?`, isSoulcodeEmail(email));
console.log(`O email ${email2} é do domínio soulcode.com?`, isSoulcodeEmail(email2));
