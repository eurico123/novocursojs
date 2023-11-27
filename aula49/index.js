// Declaração de função (Function hoisting)

function falaOi() {
    console.log('Oi nobre')
};

falaOi();

// First-class objects (Objetos de primeira classe)
// Function express

const dado = function () {
    console.log('Aqui está um dado');
};

dado();

// Arrow functions

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Função dentro de um objeto

const obj = {
    falar() {
        console.log('Estou a falar ora pois');
    }
};

obj.falar();