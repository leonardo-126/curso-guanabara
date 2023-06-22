let amigo= {nome: 'jose' ,
sexo: 'masculino' ,
peso: 84.5,
engordar(p){
    console.log('engordou')
    this.peso += p 
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)