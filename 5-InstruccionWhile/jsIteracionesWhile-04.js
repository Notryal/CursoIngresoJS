/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt("ingrese un número entre 0 y 9.");
	
	while (numero>9 ) {
		alert("Numero incorrecto");
		numero=prompt("ingrese un número entre 0 y 9.");
	}

	document.getElementById("txtIdNumero").value = numero;


}//FIN DE LA FUNCIÓN