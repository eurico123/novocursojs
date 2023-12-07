const nome = 'Henrique';

function falaNome () {
    console.log(nome)
}

function usaFalaNome () {
    const nome = 'Almeida'
    falaNome()
}

usaFalaNome()