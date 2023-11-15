const verdadeira = true;

// let tem escopo de bloco {...bloco}
// var só tem escopo de função

let nome = 'henrique'; //criando
var nome2 = 'almeida';

if (verdadeira) {
    let nome = 'soares' //criando
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'almeida'
        //console.log(nome, nome2)
    }
}