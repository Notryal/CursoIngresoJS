function mostrar()
{
	
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	

	if (edad<13) { //pregunto si es menor a 13, pregunto denuevo si NO es menor a 13.
		
		alert("Usted es nino");
		
	} else { // } else if (x)
		
		if (edad <= 17 && edad >=13) { //si esta entre 13-17 entonces es adolescente, sino, es un adulto

			alert("Usted es adolescente");
			

		} else {

			alert("Usted es adulto");


		}
		
	}


}