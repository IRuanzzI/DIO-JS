const N = [38, 15, 92, 47, 8, 64, 23, 71, 56, 19]

let i= 0 

function gets(){
   const valores = N[i]
   i++
   return valores
}


function print(texto){
    console.log(texto)
}









module.exports= {gets: gets, print: print}