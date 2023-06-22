let num = document.querySelector('#txt1')
let add = document.getElementById('armazem')
let res = document.querySelector('div#res')
let vetor = []
function isnumero(n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function islista(n, l ){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adc(){
    if(isnumero(num.value) && !islista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado `
        add.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('[ERROR] verifique os dados e tente novamente')
    }
    num.value= ''
    num.focus()
}
function finalizar(){
    if(vetor.length == 0){
        window.alert('adicione valores para finalizar')
    }else{
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let media = 0
        let soma = 0
        for( let pos in vetor){
            soma+= vetor[pos]
            if (vetor[pos] > maior){
                maior = vetor[pos]
            }
            if(vetor[pos]< menor){
                menor = vetor[pos]
            }
        }
        media = soma/total
        res.innerHTML=''
        res.innerHTML+= `<p>Ao todo temos ${total} numeros cadastrados`
        res.innerHTML+= `<p>O maior valor informado e ${maior} </p>`
        res.innerHTML+= `<p>O menor valor indormado e ${menor} </p>`
        res.innerHTML+= `<p>A soma dos valores e ${soma} </p>`
        res.innerHTML+= `<p>A media dos valores e igual a ${media}`

    }
}