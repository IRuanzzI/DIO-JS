function meuNome(nome){
   return (`Meu nome é ${nome}`)
} 

meuNome("Ruan")

function idade(idade){
    if (idade < 18){
        console.log(`${meuNome('Ruan')}, é menor`)
    }else if (idade >= 18){
        console.log(`${meuNome('Ruan')}, é maior`)
    }
}

idade(18)