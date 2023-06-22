var agora = new Date()
var diasemana = agora.getDay()
diasemana = 6
console.log(`hoje e o dia equivalente a computacionalmente ${diasemana}`)
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
switch(diasemana){
    case 0:
        console.log('hoje e domingo')
        break
    case 1:
        console.log('hoje e segunda')
        break
    case 2:
        console.log('hoje e terça')
        break
    case 3:
        console.log('hoje e quarta')
        break
    case 4:
        console.log('hoje e quinta')
        break
    case 5:
        console.log('hoje e sexta')
        break
    case 6:
        console.log('hoje e sabado')
        break
    default:
        console.log('dia invalido')
        break
}