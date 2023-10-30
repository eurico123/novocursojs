const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const iPeso = document.getElementById('ipeso')
    const iAltura = document.getElementById('ialtura')

    const peso = Number(iPeso.value)
    const altura = Number(iAltura.value)

    if (!peso) {
        setResultado('Peso Inválido!', false)
        return
    }

    if (!altura) {
        setResultado('Altura Inválida!', false)
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP() {
    const p = document.createElement('p')
    return p 
}

function setResultado (msg, isValid) {
    const res = document.getElementById('res')
    res.innerHTML = ''
    
    const p = criaP()

    if (isValid) {
        p.classList.add('p-res');
    } else {
        p.classList.add('p-bad')
    }

    p.innerHTML = msg
    res.appendChild(p)
}