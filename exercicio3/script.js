const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

for(i in maioresPaises){

    let ranking

    ranking = (`${Number(i)+1} - `)

    for(j of maioresPaises[i]){

        ranking += j

    }

    console.log(ranking)
    
}


// for(i of maioresPaises){
//     console.log(`${Number(maioresPaises[i])+1} - ${i}`)
// }