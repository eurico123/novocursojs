//Factory Function (função fábrica)
//Constructor Function (função construtora)

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre o mundo de hj em dia') {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Henrique', 'Almeida', 1.75, 75);
p1.nomeCompleto = "Henrique Almeida Soares";
console.log(p1.nome);
console.log(p1.fala());

