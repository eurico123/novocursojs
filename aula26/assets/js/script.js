function calcular(){
    const peso = document.getElementById('ipeso')
    const altura = document.getElementById('ialtura')
    let imc = peso / (altura*2)

    if (imc < 18,5) {
        alert(`Seu IMC é de ${imc}, e está abaixo do peso`)
    } else if (imc >= 18,5 && imc < 25) {
        alert(`Seu IMC é de ${imc}, e está no peso normal`)
    }
}