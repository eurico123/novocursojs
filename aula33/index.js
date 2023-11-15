const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Almeida',
    idade: 18,
    endereco: {
        rua: 'Aníbal Benévolo',
        bairro: 'Centro',
        cidade: 'Caravelas',
        numero: 216
    }
};
// Atribuição via desestruturação
const { nome, ...resto} = pessoa;

console.log(resto)