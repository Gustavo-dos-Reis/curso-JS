function calcular(){
    var início = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo= document.getElementById('txtpa')
    var res = document.getElementById('res')

     if(início.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert(`[ERRO] Faltou dados!`)
        res.innerHTML = `Impossível contar!`
     } else {
    res.innerHTML = 'Contando: '
         var i = Number(txtini.value)
         var f = Number(txtfim.value)
         var p = Number(txtpa.value)
         if (p<=0) {
            window.alert('Passo inválido! Considerando PASSO: 1')
            p = 1
         }
        if (i < f){
            //Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c}  \u{1F449}	`        
        }
        }else{
            //Contagem regresiva
            for(var c = i;c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`

            }
        }
                   res.innerHTML += `\u{1F3C1}`

    }
}