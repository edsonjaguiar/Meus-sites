function tabuada(){
		var num = document.getElementById('txtn')
		var tab = document.getElementById('seltab')
		
		if(num.value.length == ""){
			alert('Por Favor, Digite um número!')
		} else{
			var n = Number(num.value)
			var c = 1
			tab.innerHTML = ""
			while(c <= 10){
				var item = document.createElement('option')
				item.text = `${n} x ${c} = ${n*c}`
				item.value = `tab{c}`
				tab.appendChild(item)
				c++
			}
	}
}
var fundo = document.body
fundo.style.background = "rgb(70, 142, 236)";
fundo.style.font = "Normal 15pt Arial";