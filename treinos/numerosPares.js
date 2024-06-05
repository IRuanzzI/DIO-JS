const valores = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < valores.length; i++) {
   const numero = valores[i]
   if (numero %2 === 0 ){
    console.log(`${numero} é par`)
   }else {
    console.log(`${numero} é impar`)
   }
    
}