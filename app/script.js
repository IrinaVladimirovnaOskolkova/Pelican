const close = document.getElementById('close');
const modalDiv = document.getElementById('modalDiv');

function modalFunc(){
	modalDiv.style.display = 'block';
}
close.onclick = function(){
	modalDiv.style.display = 'none';
}

window.onclick = function(event){
	if (event.target === modalDiv) {
		modalDiv.style.display = 'none';
	}
}