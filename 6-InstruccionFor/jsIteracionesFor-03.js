function mostrar()
{

	let  repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

	//valido el numero
	while (isNaN(repeticiones) || repeticiones<0) {
		repeticiones = parseInt(prompt("ingrese el número ENTERO y REAL de repeticiones"));
	}

	for (let alert=0; alert<repeticiones ; alert++) {
		console.log("Hola UTN FRA")
		
	}


}//FIN DE LA FUNCIÓN