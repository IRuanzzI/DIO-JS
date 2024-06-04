const peso = 50
const altura = 1.81

const imc = peso / (altura * altura)

console.log(`Seu IMC é de ${imc}`)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc <= 18.5 && imc < 25) {
    console.log("Peso normla")
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso")
} else if (imc >= 30 && imc < 40) {
    console.log ("Obeso")
} else if (imc > 40) {
    console.log("Obesidade grave")
}