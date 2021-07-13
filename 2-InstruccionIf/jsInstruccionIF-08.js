function mostrar()
{
	let edad;
	let estado;


	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;

	// if (edad<18 && estado != "Soltero") {

	// 	//no hago nada

	// } else {
		
	// 	if(edad>18 && estado == "Soltero"){

	// 		alert("Es soltero y no es menor");

	// 	}

	// } Mal, con una sola condicion puedo resolverlo 

	if(edad>18 && estado == "Soltero"){

		alert("Es soltero y no es menor");
	
		}


}//FIN DE LA FUNCIÓN