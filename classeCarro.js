class carro {
    marca
    cor
    kml

    constructor(marca, cor, kml){
        this.marca = marca
        this.cor = cor
        this.kml = kml
    }

    gastoKm(){
        const dist = 47
        const gasto = (dist/this.kml * 6.20) 
        console.log(`Este carro gastrá ${gasto}, para fazer o percurso informado.`)
    }

}

const veiculo = new carro('Ford-k', "Vermelho", 5)

console.log(veiculo)
veiculo.gastoKm()