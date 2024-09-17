//page-1

document.getElementById("hello").addEventListener("mouseover", e => {
	e.target.innerHTML = "About"
})

document.getElementById("hello").addEventListener("mouseleave", e => {
	e.target.innerHTML = "Hello"
})
document.getElementById("i").addEventListener("mouseover", a => {
	a.target.innerHTML = "Works"
})

document.getElementById("i").addEventListener("mouseleave", a => {
	a.target.innerHTML = "I am"
})
document.getElementById("esra").addEventListener("mouseover", b => {
	b.target.innerHTML = "Contact"
})

document.getElementById("esra").addEventListener("mouseleave", b => {
	b.target.innerHTML = "Esra"
})

//
window.addEventListener('load', fg_load)

function fg_load() {
	document.getElementById('loading').style.display = 'none'
}
//
