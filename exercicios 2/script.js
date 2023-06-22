function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var resposta = document.querySelector('div#resposta')
    if (fano.ariaValueMa == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] verifique os dados e tente novamente.')   
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'mulher' 
            if(idade >= 0 && idade < 16 ){
                //criança
                img.setAttribute('src','imagensex2/menina.png.png')

            }else if( idade < 50){
                //adulto
                img.setAttribute('src','imagensex2/mulher.png.png')
            }else{
                //idoso
                img.setAttribute('src','imagensex2/velha.png.png')
            }
            
        }else if(fsex[1].checked){
            genero = 'masculino'
            if(idade >= 0 && idade < 16 ){
                //criança
                img.setAttribute('src','imagensex2/menino.png.png')

            }else if( idade < 50){
                //adulto
                img.setAttribute('src','imagensex2/homen.png.png')
            }else{
                //idoso
                img.setAttribute('src','imagensex2/velho.png.png')
            }

        }
        resposta.innerHTML = `detectamos ${genero} com ${idade}`
        resposta.appendChild(img)
        resposta.style.textAlign = 'center'
    }
}