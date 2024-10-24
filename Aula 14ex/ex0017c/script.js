function tabuada(){
   var num = document.getElementById('txtn')
   var tab = document.getElementById('seltab')
   if (num.value.length == 0){
      window.alert('[ERRO] Faltaram dados!')
   } else{
      var n = Number (num.value) 
      tab.innerHTML=''
      for(var c = 1; c <= 10; c++){
         var item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         item.value=`tab${c}`//Faz mais sentido para back end
         tab.appendChild(item)
      }
   }
}
