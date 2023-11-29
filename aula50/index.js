// arguments: Sustenta todos os argumentos enviados
const conta = (...args) => {
    console.log(args);
};

conta('*', 1, 20, 30, 40, 50)