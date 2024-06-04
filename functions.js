function calcularIMC(peso,altura){
    return peso / Math.pow(altura,2);
}
function classificarIMC(imc){
    if (imc < 18.5) {
        return("Abaixo do peso")
    } else if (imc <= 18.5 && imc < 25) {
        return("Peso normla")
    } else if (imc >= 25 && imc < 30) {
        return("Acima do peso")
    } else if (imc >= 30 && imc < 40) {
        return ("Obeso")
    } else if (imc > 40) {
        return("Obesidade grave")
    }
}

function main(){
    const imc = calcularIMC(120, 1.76);

    console.log(`Seu IMC é de ${imc}, ${classificarIMC(imc)}`)

}

main();
