/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// 1 declaro variables 
		// numero capturo el numero que ingresa, acumulador de numeros positivos y negativos
	// 2 generar un bucle del usuario mientras que el usuario quiera
		//cosas que tengo que hacer dentro del bucle (pedir numero)
		//identificar si es positivo o negativo (scope para + y -)
	//3 mostrar resultados

	let numero,
	acumuladorpositivo = 0,
	acumuladornegativo = 1,
	respuesta,
	flag=1; // que pasa si solo pone numeros positivos?

// negativo inicio con 1 por que va a multiplicar constantemente por 0

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero > 0) {
			acumuladorpositivo += numero; // acumlador = acumulador + numero
		} else {
			acumuladornegativo *= numero; // acumulador = acumulador * numero
			flag = 0
		}
		
		respuesta = prompt("Quiere ingresar otro numero?");

	} while (respuesta == "si");

	if (flag) { //si la flag es 0, nunca va a entrar al true del if
		acumuladornegativo = 0
	} // si el usuario pone numeros positivos, el resultado negativo inmediatamente es 0

	document.getElementById("txtIdSuma").value = acumuladorpositivo;
	document.getElementById("txtIdProducto").value = acumuladornegativo;
}//FIN DE LA FUNCIÓN


//isNaN(numero) -> is not a number("pepe")? true / is not a number(1) false