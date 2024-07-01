//Função para identificar alunos que faltaram:
function alunosFaltaram(alunos, presenca) {
    return alunos.filter(aluno => !presenca.includes(aluno));
}

const alunos = ["João", "Maria", "Ana", "Carlos"];
let presenca = ["João", "Carlos"];
console.log(alunosFaltaram(alunos, presenca));


//Função que eleva ao quadrado os valores de um array:
function quadrados(array) {
    return array.map(num => num**2);
}

const numeros = [5, 9, 12, 2];
console.log(quadrados(numeros));


//Função que retorna arquivos de uma extensão específica:
function filtrarPorExtensao(arquivos, extensao) {
    return arquivos.filter(arquivo => arquivo.endsWith(extensao));
}

const arquivos = ["documento.txt", "imagem.jpg", "video.mp4", "script.js"];
console.log(filtrarPorExtensao(arquivos, ".js"));


// Exibir números de 1 a 10 no console com for-of e for comum:
const numeros1 = Array.from({ length: 10 }, (_, i) => i + 1);

// Usando for-of
for (const numero of numeros1) {
    console.log(numero);
}

// Usando for comum
for (let i = 0; i < numeros1.length; i++) {
    console.log(numeros1[i]);
}


//Função que retorna strings com mais de 5 caracteres:
function stringsLongas(array) {
    return array.filter(str => str.length > 5);
}

const strings = ["curto", "muito longo", "médio", "enorme"];
console.log(stringsLongas(strings));


//Encontrar o maior número em um array:
function maiorNumero(array) {
    return Math.max(...array);
}

const numeros2 = [4, 7, 1, 9, 2];
console.log(maiorNumero(numeros2));


//Função que extrai dígitos verificadores de um CPF:
function extrairDigitosVerificadores(cpf) {
    return cpf.slice(-2);
}

const cpf = "056.985.990-23";
console.log(extrairDigitosVerificadores(cpf));


//Função que inverte uma string:
function inverterString(str) {
    return str.split('').reverse().join('');
}

const palavra = "javascript";
console.log(inverterString(palavra));


//Função que repete uma palavra um número específico de vezes:
function repetirPalavra(palavra, vezes) {
    let resultado = '';
    for (let i = 0; i < vezes; i++) {
        resultado += palavra;
    }
    return resultado;
}

console.log(repetirPalavra("luander", 3));


//Função que verifica se duas strings são iguais:
function saoIguais(str1, str2) {
    return str1 === str2;
}

console.log(saoIguais("teste", "teste"));
console.log(saoIguais("teste", "diferente"));


//Função que formata uma data:
function formatarData(dataArray, separador) {
    return dataArray.join(separador);
}

const data = [20, 6, 2000];
console.log(formatarData(data, '/'));


//Função que busca um valor no array ou retorna um valor padrão:
function busca(array, valor, padrao) {
    return array.includes(valor) ? valor : padrao;
}

const itens = ["maçã", "banana", "laranja"];
console.log(busca(itens, "banana", "não tem banana"));
console.log(busca(itens, "uva", "não tem uva"));

function contarFrequencia(str) {
    const frequencia = {};
    for (let char of str) {
        if (frequencia[char]) {
            frequencia[char]++;
        } else {
            frequencia[char] = 1;
        }
    }
    return frequencia;
}

console.log(contarFrequencia("javascript")); 

// Linha de raciocínio: Utilizar um objeto para contar a frequência de cada caractere na string.

// Exemplo: Crie um objeto para representar um aluno:
    // nome
    // serie
    // materias (nome da materia, nome do professor)
    // notas

// 10 min
function testarNota(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;

    if (media >= 7.0) {
        console.log('Parabéns, você passou.');
    } else {
        console.log('Tente novamente.');
    }
}

const aluno = {
    nome: "João Silva",
    serie: "8ª série",
    materias: [
        {
            nome: "Matemática",
            professor: "Professor Carlos",
            notas: [8.5, 9.0, 7.5]
        },
        {
            nome: "Português",
            professor: "Professora Ana",
            notas: [7.0, 8.5, 9.0]
        },
        {
            nome: "Ciências",
            professor: "Professor Marcos",
            notas: [8.0, 8.5, 9.5]
        }
    ]
};

console.log(aluno);

// Testar notas de cada matéria
aluno.materias.forEach(materia => {
    console.log(`Verificando notas de ${materia.nome}:`);
    testarNota(materia.notas);
});
