function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (inicio.value == 0 || fim.value == 0 || passo == 0){
        window.alert('[ERROR] faltam elementos!')
    }else{
        res.innerHTML = 'contando... <br>'
        let I = Number(inicio.value)
        let F = Number(fim.value)
        let P = Number(passo.value)
        if(P <= 0 ){
            window.alert('Passo invalido, considerando passo 1...')
            P = 1
        }
        if (I<F){
            //contagem crescente
            for(let c = I; c <= F; c += P){
                res.innerHTML +=  `${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c = I; c >= F; c -= P){
                res.innerHTML +=  `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`     
    }

}