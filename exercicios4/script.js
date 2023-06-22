function caucular(){
    let num = document.getElementById('txt1')
    let tab = document.getElementById('settab')
    if(num.value == 0 ){
        window.alert('Por favor digite um numero!')
    }else{
        let t = Number(num.value)
        tab.innerHTML= ''
        for(let c = 1; c<= 10 ; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = ` ${t} x ${c} = ${t*c}`
            tab.appendChild(item)
        } 
    }
}