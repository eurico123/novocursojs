//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
/*
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia);// 01/01/1970 timestemp unix ou época unix
*/
//const data = new Date(2023, 10, 14)// ano, mês, dia, hora, minuto, segundo, milisegundo
/*
const data = new Date(1699363699330)
console.log('dia: ', data.getDate())
console.log('mês: ', data.getMonth())// mês começa do zero
console.log('ano: ', data.getFullYear())
console.log('horas: ', data.getHours())
console.log('minutos: ', data.getMinutes())
console.log('segundos: ', data.getSeconds())
console.log('milisegundos: ', data.getMilliseconds())
console.log('dia semana: ', data.getDay())// 0 = Domingo   6 = Sábado
console.log(data.toString())
*/
//console.log(Date.now())

function zero (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    const sgd = zero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sgd}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)

