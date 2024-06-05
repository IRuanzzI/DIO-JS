const etanolPreco = 3.42
const gasoPreco = 6.21
const kmlEtanol = 7
const kmlGaso = 10

var distViagem = 357

let gastoGaso = (distViagem/kmlGaso * gasoPreco)
let gastoEtanol = (distViagem/kmlEtanol * etanolPreco)

console.log (`De acordo com a distância da viagem, você gastara R$ ${gastoGaso}, se for utilizando gasolina e R$ ${gastoEtanol}, se for utilizando etanol.`)