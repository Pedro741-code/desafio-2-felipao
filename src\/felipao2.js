function outcome(win,loses){
    let rank = win - loses
    return rank
}
let result = outcome(83,2)
let nivel =""
if (result <=10){
    nivel ="Ferro"
}else if (result>10 && result<=20){
    nivel ="Bronze"
}else if (result >20 && result <=50){
    nivel = "Prata"
}else if (result>50 && result <= 80){
    nivel = "Ouro"
}else if (result>80 && result<=90){
    nivel = "Diamante"
}else if( result>90 && result<=100){
    nivel="Lendário"
}else if (result>=101){
    nivel= "irmortal"
}
console.log(`O Herói tem de saldo de ${result}. Está no nível de ${nivel}`)
