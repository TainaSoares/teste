console.log("Você conseguiu!!!!")

//Interpretação de código

//EXERCÍCIO 1
//10 ----> 10, 5

//EXERCÍCIO 2
//10, 10, 10

//EXERCÍCIO 3
// let p = let horasTrabalhadasDiaria
// let t = let GanhoDiario

//Escrita de código

//EXERCÍCIO 1
//a.
let nome 
//b.
let idade 
//c.
console.log(typeof(nome)) 
console.log(typeof(idade)) 
//undefined, pois não estou atribuindo valores
//e.
nome = prompt("Insira seu nome")
idade = Number(prompt("Insira sua idade"))
//f.
console.log(typeof(nome))
console.log(typeof(idade))
//nome será string e idade será number
//g.
const frase = `Olá ${nome}, você tem ${idade} anos.` //template string
//const frase1 = "Olá " +nome+ ", você tem " +idade+ " anos." //concatenação
console.log(frase)
//console.log(frase1)

//EXERCÍCIO 2

let roupa = prompt("Você está de roupa azul?Sim ou Não?")
let comida = prompt("Você gosta de pizza?Sim ou Não?")
let cor = prompt("Você gosta de rosa?Sim ou Não?")

//a.
const roupaAzul = roupa
const gostaDePizza = comida
const gostaDeRosa = cor
//b.
const fraseRoupaAzul = `Você está de roupa azul? - ${roupaAzul}`
const fraseGostaDePizza = `Você gosta de pizza? - ${gostaDePizza}`
const fraseGostaDeRosa = `Você gosta de rosa? - ${gostaDeRosa}`

console.log(fraseRoupaAzul)
console.log(fraseGostaDePizza)
console.log(fraseGostaDeRosa)

//EXERCÍCIO 3

let a = 10
let b = 25

let c = a

a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio

const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira um número"))

const soma = numero1 + numero2
const multiplicar = numero1 * numero2

const fraseSoma = `O primeiro número somado ao segundo número resulta em: ${soma}`
const fraseMultiplicacao = `O primeiro número multiplicado pelo segundo número resulta em: ${multiplicar}`

console.log(fraseSoma)
console.log(fraseMultiplicacao)
