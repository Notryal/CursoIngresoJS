/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave= prompt("ingrese el número clave.");

	while (clave !="utn750") { //cuando el dato es falso hace verdadera la condicion
		alert("Clave incorrecta") //le sigo pidiendo hasta que entre la correcta
		clave= prompt("ingrese el número clave.");
	}
	alert("Bienvenido!")
	
}//FIN DE LA FUNCIÓN
