function calcular(){
   var num = parseInt(document.getElementById("txtn").value);
   var resposta = document.getElementById('res');
   var tabuada ='';
   /*if (num == 0){
      window.alert(`[ERRO] Faltou dados!`)
      resposta.innerHTML = `impossivel contar!`
      } */
          for(var c = 1; c<=10;c++)
    tabuada += num+ " x " +c+ " = " +
      num*c+"<br />";
   resposta.innerHTML = tabuada;

   
}

