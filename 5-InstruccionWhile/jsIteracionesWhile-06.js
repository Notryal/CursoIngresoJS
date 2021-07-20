function mostrar()
{
	
	//caso sin while
/*
	let suma;
	let promedio;
	let numero1,
	numero2,
	numero3,
	numero4,
	numero5;

	numero1 = parseInt(prompt("Numero?"));
	numero2 = parseInt(prompt("Numero?"));
	numero3 = parseInt(prompt("Numero?"));
	numero4 = parseInt(prompt("Numero?"));
	numero5 = parseInt(prompt("Numero?"));

	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = suma/5

	document.getElementById("txtIdSuma").value = suma
	document.getElementById("txtIdPromedio").value = promedio
*/
	//caso con while
	
	let numero;
	let contador = 0;
	let acumulador = 0;


	while (contador <= 5) {
		contador = contador+ 1;
		numero = parseInt(prompt("Numero?"));
		acumulador = acumulador + numerol
	}

	promedio = acumulador / 5 
	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio

}//FIN DE LA FUNCIÓN