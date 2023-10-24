/*
Valores Primitivos(imutáveis) =  Boolean, Undefined, String, Number, Null (Bigint, Symbol) - Valores Copiados

Valores por Referência(mutáveis) = Arrays, Objects, Functions - Passados por Referência
*/

const a = {
    nome: 'Henrique',
    sobrenome: 'Almeida',
}

const b = {...a}

a.nome = 'Afonso'
console.log(a)
console.log(b)