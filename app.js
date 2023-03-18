const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

formulario.addEventListener('submit', (event)=>{
	event.preventDefault();
	emailValidate();
	passwordValidator();

})

function setError(index) {
	inputs[index].style.border = '2px solid #ED3A5A'
	spans[index].style.display = 'block'
}

function removeError(index){
	inputs[index].style.border = '1px solid #E2E8F0'
	spans[index].style.display = 'none'
}

function emailValidate(){
	let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
	if (emailPattern.test(inputs[0].value)) {
		removeError(0)
	}else{
		setError(0)
	}
}

function passwordValidator(){
	if(inputs[1].value.length < 8){
		setError(1)
	}else{
		removeError(1)
	}
}