const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Continue --> continua para próxima iteração
// Break --> sai do laço

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('pulei o 2');
        i++;
        continue;
    }

    console.log(numero)

    if (numero === 6) {
        console.log('parei no 6');
        i++;
        break;
    }
i++;
} while (i < numeros.length);