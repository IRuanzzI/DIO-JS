const {gets, print} = require('./funcoes-auxiliaresEX1.js')

let soma = 0    //calcular a media das notas de um aluno e exibir se ele está de recuperação, aprovado ou reprovado.

for (let i = 0; i < 4 ; i++) {
    const media = gets()
    soma = soma + media
    
   
}

const resultado = soma/4

if(resultado <5){
    console.log('Reprovado')
}else if(resultado >= 5 && resultado < 7){
    console.log('Recuperação')
}else if (resultado >= 7){
    console.log('Passou!')
}

print(resultado)