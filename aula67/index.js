// Some todos os números (Reduce)
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, inidce, array) {
    acumulador += valor;
    return acumulador
}, 0);

//console.log(total);





// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador
    return valor;
});

console.log(maisVelha);