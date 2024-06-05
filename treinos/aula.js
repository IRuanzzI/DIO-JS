/*const notas=[]

notas.push(3)
notas.push(7)
notas.push(4)
notas.push(8)

const soma = notas[0]+notas[1]+notas[2]+notas[3]
console.log(soma/notas.length)*/

/*for (let i = 1; i <= 100; i++) {
    console.log(i)
}*/

/*const nome = 'Ruan Pablo Carvalho de Oliveira'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
    
}*/


const notas = []

notas.push(4)
notas.push(7)
notas.push(10)
notas.push(5)
notas.push(3)
notas.push(2)
notas.push(8)
notas.push(7)

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
    
}
const media = soma/notas.length
console.log(soma)
console.log(media)