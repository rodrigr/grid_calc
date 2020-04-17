const keys = document.querySelectorAll('.key')
const output = document.querySelector("#output")
const backspace = document.querySelector('#backspace')
const equal = document.querySelector('#equal')

keys.forEach(key => key.addEventListener('click',print))
backspace.addEventListener('click',clear)
equal.addEventListener('click',result)

function print(event){
	let key = event.target
	
	if(key.classList.contains('op')){
		output.innerHTML += `<span style="color:red">${key.innerText}</span>`
	}else{
		output.innerHTML += key.innerText;
	}
	
}

function clear(event){
	output.innerText = ""
}

function result(event){
	try{
		output.innerHTML = eval(output.innerText) 
	}catch(error){
		output.innerHTML = `<span style="color:red">${error.name}</span>`
	}
	
	
}