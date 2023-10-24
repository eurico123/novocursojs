function juntar(){
    const form = document.querySelector('.form')
    let res = document.getElementById('res')

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        let nome = document.getElementById('inome')
        let snome = document.getElementById('isobrenome')
        let peso = document.getElementById('ipeso')
        let altura = document.getElementById('ialtura')

        pessoas.push({
            nome: nome.value,
            snome: snome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas)

        res.innerHTML += `<p> ${nome.value} ${snome.value} ${peso.value} ${altura.value} </p>`
    };
    
    form.addEventListener('submit', recebeEventoForm);
}
