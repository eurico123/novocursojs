// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados)

















// Retorne as pessoas que tem 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a letra 'a'

const pessoas = [
    { nome:'Luis' , idade:62 },
    { nome:'Maria' , idade:23 },
    { nome:'Eduardo' , idade:55 },
    { nome:'Letícia' , idade:19 },
    { nome:'Rosana' , idade:32 },
    { nome:'Wallace' , idade:47 },
];

const pessoasNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
const pessoasMaisCinquenta = pessoas.filter(valor => valor.idade > 50);
const pessoasTerminaComA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a')
});

console.log(pessoasTerminaComA);