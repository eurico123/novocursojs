function retornaFuncao (nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Henrique');
const funcao2 = retornaFuncao('Almeida');

console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())