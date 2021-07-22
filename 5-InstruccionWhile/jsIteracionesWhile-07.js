/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()

// do while si quiero por lo menos una vez
//while si quiero que se repita x veces
//confirm puedo hacer true o false para preguntar
{
	let contador=0,
	acumulador = 0
	,respuesta
	,suma,
	promedio;

	numero = parseInt(prompt("Ingrese su numero porfavor"));
	acumulador = numero
	contador++
	respuesta = prompt("Quiere seguir pidiendo numeros?");

	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese su numero porfavor"));
		suma = acumulador + numero
		contador++
	respuesta = prompt("Quiere seguir pidiendo numeros?");
	}

	promedio= suma/contador;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN