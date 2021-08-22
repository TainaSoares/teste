// //INTERPRETAÇÃO DE CÓDIGO

// //EXERCÍCIO 1
// //a. false, pois  um deles é false
// //b. false, pois pelo menos um deles é false
// //c.true
// //d. bolean 

// //EXERCÍCIO 2
// /*O prompt retorna string, então
// para realizar operações devemos transformar
// essa string para number. Vai aparecer
// os dois números um ao lado do outro :
// 55 e 6 = 556*/

// //EXERCÍCIO 3

// //Number(prompt) para ambos os números

// //ESCRITA DE CÓDIGO

// //EXERCÍCIO 1
// //a.
// let idade = Number(prompt("Insira sua idade"))
// //b.
// let idadeMelhorAmigo = Number(prompt("Insira a idade do melhor amigo"))
// //c.
// let idadeEhMaior = idade > idadeMelhorAmigo
// let fraseEx1 = `Sua idade é maior do que a do seu melhor amigo? ${idadeEhMaior}`
// console.log(fraseEx1)
// //d.
// let difIdade = idade - idadeMelhorAmigo
// console.log(difIdade)

// //EXERCÍCIO 2
// //a.
// let numeroPar = Number(prompt("Insira um número par"))
// //b.
// let resto = numeroPar % 2
// console.log(resto)
// //c.
// /*Todos resultarão em zero, pois para ser
// par o resto da divisão por 2 Deve ser zero*/
// //d.
// /*Vai aparecer o número(resto = 1) que falta
// para chegar perto desta divisão por 2*/

// //EXERCÍCIO 3
// const idadeEx3 = Number(prompt("Insira sua idade"))
// //a.
// const idadeEmMeses = idadeEx3 * 12
// console.log(idadeEmMeses)
// //b.
// const idadeEmDias = idadeEx3 * 365
// console.log(idadeEmDias)
// //c.
// const idadeEmHoras = idadeEx3 * (365*24)
// console.log(idadeEmHoras)

// //EXERCÍCIO 4

// const num1 = Number(prompt("Insira um número"))
// const num2 = Number(prompt("Insira um número"))

// const ehMaior = num1 > num2
// const ehIgual = num1 === num2
// const ehDivisivel1 = num1 % num2 === 0
// const ehDivisivel2 = num2 % num1 === 0

// console.log(ehMaior)
// console.log(ehIgual)
// console.log(ehDivisivel1)
// console.log(ehDivisivel2)

// //DESAFIOS

// //EXERCÍCIO 1
// //a. F --> K
// let fahrenheit = 77
// let fParak = (fahrenheit - 32)*(5/9) + 273.15
// console.log(`${fParak} K`)
// //b. C --> F
// let celsiusB = 80
// let formulaCF = celsiusB * (9/5) + 32
// console.log(`${formulaCF} ºF`)
// //c. C => F e K
// let celsiusC = 30
// let formulaCFletraC = celsiusB * (9/5) + 32
// let celsiusKelvin = (formulaCFletraC - 32)*(5/9) + 273.15

// console.log(`${formulaCFletraC} ºF`)
// console.log(`${celsiusKelvin} K`)
// //d.
// const celsiusD = Number(prompt("Insira um valor em Celsius"))
// formulaCFletraC = celsiusD * (9/5) + 32
// celsiusKelvin = (formulaCFletraC - 32)*(5/9) + 273.15
// console.log(`${formulaCFletraC} ºF`)
// console.log(`${celsiusKelvin} K`)

// //EXERCÍCIO 2
// let valorKWhora = 0.05 // em reais
// //a.
// const consumoResidencia = 280 // kW hora
// const valorPago = consumoResidencia * valorKWhora
// console.log(`O valor a ser pago é :${valorPago} kWhora`)
// //b.
// const desconto = 0.15
// const valorComDesconto = valorPago - valorPago * desconto
// console.log(`O valor a ser pago com o desconto é :${valorComDesconto} kWhora`)

//EXERCÍCIO 3
//a.
let valorLibra = 20
let libraParaQuilograma = (valorLibra / 2.205).toFixed(2)
console.log(`20lb equivalem a ${libraParaQuilograma} kg`)
//b.
let valorOnca = 10.5
let oncaParaQuilograma = (valorOnca / 35.274).toFixed(2)
console.log(`10.5oz equivalem a ${oncaParaQuilograma} kg`)
//c.
let valorMilha = 100
let milhaParaMetro = (valorMilha * 1609).toFixed(2)
console.log(`100mi equivalem a ${milhaParaMetro} m`)
//d.
let valorPés = 50
let pehsParaMetro = (valorPés / 3.281).toFixed(2)
console.log(`50ft equivalem a ${pehsParaMetro} m`)
//e.
let valorGalaoAmericano = 103.56
let galaoUSAParaLitro = (valorGalaoAmericano * 3.785).toFixed(2)
console.log(`103.56gal equivalem a ${galaoUSAParaLitro} l`)
//f.
let valorXicaraImperial = 450
let xicaraImpParaLitro = (valorXicaraImperial / 3.52).toFixed(2)
console.log(`450xic equivalem a ${xicaraImpParaLitro} l`)
//g.
let valorLibraUsuario = Number(prompt("Insira o valor em libras para converter em Kg"))

libraParaQuilograma = (valorLibraUsuario / 2.205).toFixed(2)
console.log(`${valorLibraUsuario}lb equivalem a ${libraParaQuilograma} kg`)

