//? laço for

// let numeros = Number(prompt('Digite um número de 1 a 10'))

// for(i = 0; i <= 10; i++){

//     console.log(numeros*i)

// }

//? laço for in

// let numeros = Number(prompt('Digite um número de 1 a 10'))

// let array = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// //*          0   1   2   3   4   5   6   7   8    9

// console.log(`A tabuada do ${numeros} é: `)

// for(i in array){

//     i = Number(i)

//     console.log(`${numeros} x ${i+1} = ${numeros*(i+1)}`)
    
// }

// PARAMETRO DE MULTIPLICAÇÃO ATRAVÉS DO INDICE DA ARRAY

//? laço for in desafio

const numero = Number(prompt('Qual número da tabuada você deseja:'))

const numeroMax = Number(prompt('Até qual valor sua tabuada escolhida deverá ser multiplicada?'))

let tabuada = []

for(i = 0 ; i < numeroMax ; i++){

    tabuada[i] = i+1

}

for (i in tabuada){

    i = Number(i)

    console.log(`${numero}x${i+1} = ${numero*Number(tabuada[i])}`)

}

//* Exercício desafio realizado e cedido a aula de revisão por Léo Carrati