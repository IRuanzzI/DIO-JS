const preco = 1000

console.log(`O valor do produto é de R$ ${preco}`)

function debito(){
    console.log(`Você pagará, R$ ${ preco - (preco * 0.10)}`)
}
function avista(){
    console.log(`Você pagará, R$ ${ preco - (preco * 0.15) }`)
}
function duasVezes(){
    console.log(`Você pagará duas parcelas de R$ ${preco/2}`)
}
function maisDeDuas(){
    console.log(`Você pagará R$ ${(preco * 0.10) + preco}`)
}

maisDeDuas()