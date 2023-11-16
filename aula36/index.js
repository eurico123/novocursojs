// For in --> lê os índices ou chaves do objeto
//                0       1        2
const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Almeida',
    idade: 18
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i])
//}

//for (let i in frutas) {
//    console.log(frutas[i])
//}