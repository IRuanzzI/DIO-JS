class Pessoa {
    nome
    idade
    anoNascimento

    constructor(nome, idade, anoNascimento){     //torna obrigatorio a pessoa informar o nome e idade
        this.nome = nome
        this.idade = idade
        this.anoNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log('Ambos(as) tem a mesma idade')
    }
}

const ruan = new Pessoa ('Ruan', 19)
const maria = new Pessoa ('Mara', 21)

compararPessoas(ruan,maria)