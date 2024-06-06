const {gets, print} = require ('./funcoes-auxiliares.js')

/*const numerosSorteados = [];     //1 forma de fazer

for (let i = 0; i < 5; i++) {
  const numeroSorteados = gets()
  numerosSorteados.push(numeroSorteados);
}

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteados = numerosSorteados[i]
    if(numeroSorteados > maiorValor){
        maiorValor = numeroSorteados
    }
}

print(maiorValor)*/

let maiorValorEncontrado = 0;  //forma simplificada de fazer, aqui basicamente o processo é derivado das informações do gets, sem precisar de outra lista.

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets()
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
    
}

print(maiorValorEncontrado)