const array = [
    [27, 4, 20, 13, 14],   //? Índice 0 - Jogador 1
    [11, 15, 12, 8, 9],    //? Índice 1 - Jogador 2
    [5, 5, 12, 16, 4],     //? Índice 2 - Jogador 3
    [20, 33, 11, 12, 19],  //? Índice 3 - Jogador 4
    [3, 3, 4, 5, 10]       //? Índice 4 - Jogador 5
]

//? Laço in / of

// let j  //? j de jogadores

// let g  //? g de gols

// for(j in array){  //? for in percorre índice

//     let comprovante

//     comprovante = `Jogador${Number(j)+1}: `

//     for(g of array[j]){  //? for of percorre valores

//         comprovante += `${g} `

//     }
   
//     console.log(comprovante)

// }

//? Laço in direto

for (i = 0; i < array.length; i++){

    console.log(`Jogador ${i+1}: ${array[i]}`);

}