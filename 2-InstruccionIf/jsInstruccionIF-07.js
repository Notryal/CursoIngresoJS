function mostrar()
{
	
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;

	if (edad<18 && estado != "Soltero") {
		
		alert("Es muy pequeno para NO ser soltero");

	} else {
		
	}

}//FIN DE LA FUNCIÓN