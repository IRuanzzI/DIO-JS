const conjuntodeEntradas = [5, 50, 10, 98, 23]

let i = 0; 


function gets(){
    const valor = conjuntodeEntradas[i]
    i++
    return  valor

}

function print(texto){
    console.log(texto)
}

module.exports = {gets : gets ,print: print}