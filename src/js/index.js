(function(){
	var boton = document.getElementById('boton');
	var lista = document.getElementById('lista');

	boton.addEventListener('click', onclick);

	function onclick (){
		lista.classList.toggle('header-listaMenu--show')
	}
}());