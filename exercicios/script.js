function carregar(){
    var text = window.document.getElementById('text')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
    text.innerHTML = `Agora sao exatamente ${hora} horas.`
    if(hora >=6 && hora < 12){
        //bom dia
        imagem.src = 'imagens/dia.png'
        document.body.style.backgroundColor = '#d3e4c5'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        imagem.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#24c0eb'
    }else{
        //boa noite
        imagem.src = 'imagens/img.png'
        document.body.style.backgroundColor = '#031634'
    }
}