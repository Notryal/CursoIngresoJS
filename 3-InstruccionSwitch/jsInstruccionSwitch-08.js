function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Usuahia":
			alert("Frio");
			break;
		case "Cataratas":
		case "Mar de Plata":
			alert("Calor");
			break;
	}
}//FIN DE LA FUNCIÓN