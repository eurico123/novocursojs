//função construtora -> objetos
function Pessoa(nome, sobrenome) {
    // Atributos ou Métodos privados
    const ID = 123456;

    const metodoInterno = function() {

    };

    // Atributos ou Métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${nome}: sou um método`)
    }
}

const p1 = new Pessoa('Henrique', 'Almeida');
const p2 = new Pessoa('José', 'Santos');

p2.metodo();