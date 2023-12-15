function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert ('Conta Inválida!');
                    return;
                };

                this.display.value = conta;
            } catch (e) {
                alert ('Conta Inválida!');

                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        inicia() {
            this.clicaBotoes();
            this.pressionaEnter();
        },

        clicaBotoes() {
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                };

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()