let txtprdt = document.getElementById('inpro')
let lista = document.getElementById('fprodt')
let cdg = document.getElementById('incodg')
let mrc = document.getElementById('inmarc')
let valores = []

function nulo (n){
  if( n == 0){
   return true
  } else{
   return false
  }
}
function number (n){
   if( Number(n) >= 1){
      return true
     } else{
      return false
     }
}
function nulo1 (n){
   if(n ==0){
      return true
   }else{
      return false
   }
}
function inLista(n,l){
   if(l.indexOf(n) != -1){
      return true
   }else{
      return false
   }
}
function inListau(n,l){
   if(l.indexOf(Number(n)) != -1){
      return true
   }else{
      return false
   }
}
function inListad(n,l){
   if(l.indexOf(n) != -1){
      return true
   }else{
      return false
   }
}

function incluir(){
   if ( !nulo(txtprdt.value) && !inLista(txtprdt.value, valores) && number(cdg.value) && !inListau(cdg.value,valores) && !inListad(mrc.value,valores) && !nulo1(mrc.value) ){
      valores.push(txtprdt.value)
      valores.push(Number(cdg.value))
      valores.push(mrc.value)
      let item = document.createElement('option')
      let itemd = document.createElement('option')
      let itemt = document.createElement('option')
      item.text = `${txtprdt.value} foi adicionado`
      itemd.text = `${cdg.value} foi adicionado`
      itemt.text = `${mrc.value} foi adicionado`
      lista.appendChild(item,itemd,itemt)
      res.innerHTML = ''
   }else{
      window.alert('Produto inválido ou já encontrado na lista')
   }
   txtprdt.value = ''
   cdg.value = ''
   mrc.value = ''
   cdg.focus()
}