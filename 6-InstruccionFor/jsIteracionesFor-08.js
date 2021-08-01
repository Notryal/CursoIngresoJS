function mostrar()
{
	let numero,
	cont=0;
	numero =parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero) || numero<0) {
		numero = parseInt(prompt("Incorrecto, ingrese un número ENTERO y REAL: "));
	}

	for (let i = 1; i<=numero; i++) {
		if (i / 1 ==0 || i/i ==0){ 
			alert(i + " Es un numero Impar!");
		}
	}

	alert(i + " Es un numero Impar!");


	alert("ok");

}//FIN DE LA FUNCIÓN