const preco = 100
// 1 - débito
//2 - dinheiro ou pix
// 3 - 2 vezes
// 4 - mais de 2
const formaPagamento = 4

console.log(`O valor do produto é de ${preco}. Forma de pagamento selecioanda ${formaPagamento}`)

if (formaPagamento === 2){
    console.log(`Você pagará, R$ ${ preco - (preco * 0.15) }`)
} else if (formaPagamento === 1){
    console.log(`Você pagará, R$ ${ preco - (preco * 0.10)}`)
} else if (formaPagamento === 3){
    console.log(`Você pagará duas parcelas de R$ ${preco/2}`)
} else if (formaPagamento=== 4){
    console.log(`Você pagará R$ ${(preco * 0.10) + preco}`)
}