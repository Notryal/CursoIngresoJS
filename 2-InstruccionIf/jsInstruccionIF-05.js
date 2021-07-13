function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//if (edad >=13 && edad <= 17) / 
	//{
	//	alert("Usted es adolescente");
	//}
	// hacemos lo opuesto al 4

	if (!(edad >=13 || edad <= 17)) // && 
	{
		alert("Usted NO es adolescente");
	}


	//if(edad<=18)
	//{
	//	alert("Usted NO es adolescente")
	//}

}//FIN DE LA FUNCIÓN