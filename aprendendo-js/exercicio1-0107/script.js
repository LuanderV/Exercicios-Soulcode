// 1° Função arrow que recebe dois números e retorna o maior deles:
const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(maiorNumero(10, 20));

// 2° Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula:
const palavras = ['javascript', 'react', 'node', 'flutter'];

palavras.forEach(palavra => {
  console.log(palavra.charAt(0).toUpperCase() + palavra.slice(1));
});

// 3° Use map para transformar um array de números, multiplicando cada número por 5:
const numeros = [1, 2, 3, 4, 5];
const multiplicadosPorCinco = numeros.map(numero => numero * 5);

console.log(multiplicadosPorCinco);

// 4° Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18:
const idades = [12, 17, 18, 21, 30, 15];
const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade);

// 5° Dado um objeto representando um livro, acesse o nome da editora:
const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    publicacao: {
      editora: 'Allen & Unwin',
      ano: 1954
    }
  };
  
  const nomeEditora = livro.publicacao.editora;
  
  console.log(nomeEditora);

// 6° Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas:
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
const [primeiraFruta, segundaFruta] = frutas;

console.log(primeiraFruta);
console.log(segundaFruta);

// 7° Adaptando exercícios da semana 3.
// 1° Filtrar o array original para retornar apenas os números pares:
const filtrarPares = arr => arr.filter(num => num % 2 === 0);

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));

// 2° Utilizar a função reduce para somar todos os números no array:
const somarNumeros = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(somarNumeros([1, 2, 3, 4, 5]));

// 3° Comparar a string original com a sua versão invertida:
const verificarPalindromo = str => {
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
  }
  
  console.log(verificarPalindromo("arara"));
  console.log(verificarPalindromo("javascript"));
  
// 4° Verificar cada caractere da string e contar se for uma vogal:
const contarVogais = str => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contagem = 0;
    str.toLowerCase().split('').forEach(char => {
      if (vogais.includes(char)) {
        contagem++;
      }
    });
    return contagem;
  }
  
  console.log(contarVogais("Javascript"));
  
// 5° Utilizar a função Math.min com o operador spread para encontrar o menor número:
const menorNumero = arr => Math.min(...arr);

console.log(menorNumero([5, 1, 8, 3, 2]));

// 6° Calcular a soma dos números e dividir pelo número de elementos no array:
const calcularMedia = arr => {
    const soma = arr.reduce((acc, num) => acc + num, 0);
    return soma / arr.length;
  }
  
console.log(calcularMedia([7.0, 8.0, 9.0]));

// 7° Utilizar um objeto para contar a frequência de cada caractere na string:
const contarFrequencia = str => {
    const frequencia = {};
    str.split('').forEach(char => {
      frequencia[char] = (frequencia[char] || 0) + 1;
    });
    return frequencia;
  }
  
console.log(contarFrequencia("javascript"));

// 8° Substituir parte do endereço de email por asteriscos:
const ofuscarEmail = email => {
    const [user, domain] = email.split('@');
    const parteVisivel = user[0];
    const parteOfuscada = user.slice(1).replace(/./g, '*');
    return `${parteVisivel}${parteOfuscada}@${domain}`;
  }
  
  console.log(ofuscarEmail("luander.vargas@dev.com"));