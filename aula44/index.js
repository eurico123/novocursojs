
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números números')
    }

    return x + y;
}
try {
    console.log(soma(1, 3))
    console.log(soma('2', 3))
} catch (error) {
    //console.log(error)
    console.log('Alguma coisa pampas pro usuário')
}