// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Almeida'
    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Henrique'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(18, 75, 1.75);

const nome = 'zumbas'