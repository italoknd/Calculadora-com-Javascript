var nome = "Italo"
var nota1 = 5
var nota2 = 6
var nota3 = 4
var nota4 = 8
var mediaFinal

mediaFinal = (nota1 + nota2 + nota3 + nota4)/4

console.log(`Olá ${nome}! Sua média final é: ${mediaFinal.toFixed(1)}`)

if(mediaFinal.toFixed(1) < 5){
  console.log("Reprovado!")
}else{
  console.log("Aprovado!")
}