const {gets, print} = require ('./funcoes-auxiliaresEX2')

let maiorPar = 0
let maiorImpar = 0 
 
for (let i = 0; i < 10; i++) {
    const algarismo = gets()

    if(algarismo %2 ===0){
            console.log(`${algarismo}, é par.`)
        if(algarismo > maiorPar){
            maiorPar = algarismo
        }
    }else if(algarismo %2 != 0){
            console.log(`${algarismo}, é impar.`)
        if(algarismo > maiorImpar){
        maiorImpar = algarismo
        }
    }
    
}

print(`O maior número par é ${maiorPar}`)
print(`O maior número impar é ${maiorImpar}`)