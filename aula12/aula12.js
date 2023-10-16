let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

//Solução 1


const aTemp = a
a = b
b = c
c = aTemp

console.log(a, b, c)


//Solução 2

/*
[a, b, c] = [b, c, a]

console.log(a, b, c)
*/