function retornaHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval (function () {
    console.log(retornaHora())
}, 1000);

setTimeout (function () {
    clearInterval(timer)
}, 3000);

setTimeout (function () {
    console.log('bento me empresta 100 reais?')
}, 5000);

setTimeout (function () {
    console.log('UUUQUEEEEE CEMM REAAAAAAIS????')
}, 10000)