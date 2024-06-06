const notas = [10,10,3,10]

 let i = 0

function gets(){
    const nota = notas[i]
    i++
    return nota
}


function print(texto){
    console.log(texto)
}


module.exports = {gets : gets ,print: print}