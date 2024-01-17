//your JS code here. If required.
const input = document.getElementById("fname")
input.addEventListener('blur', (e)=>{
	e.target.value  = e.target.value.toUpperCase()
})