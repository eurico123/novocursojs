const pessoa1 = {
    nome: 'Henrique',
    sobrenome: 'Almeida',
    idade: 18,


    fala() {
        console.log(`Meu nome é ${pessoa1.nome} e eu tenho ${pessoa1.idade} anos`)
    }
}

pessoa1.fala()



/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Henrique', 'Almeida', 18)
const pessoa2 = criaPessoa('José', 'Gonçalves', 48)
const pessoa3 = criaPessoa('Maria', 'Almeida', 70)
const pessoa4 = criaPessoa('Claudinei', 'Pereira', 59)
const pessoa5 = criaPessoa('Aline', 'Barros', 29)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)
*/