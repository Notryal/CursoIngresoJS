function mostrar()
{
	//no esperar a codear a todo el ej para debug
	//escribir y testear 
	let precio = 15000;
	let destino;
	let estacion;
	let preciofinal;
	let aumento = 0;
	let descuento = 0;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//se puede hacer switch(destino)

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				//preciofinal = precio + precio * 0.20
				aumento = precio * 0.20;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				descuento = precio * 0.10;
			} if (destino == "Mar del plata") {
				descuento = precio * 0.20;
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				descuento = precio * 0.20;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				aumento = precio * 0.10;
			} if (destino == "Mar del plata") {
				aumento = precio * 0.20;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba") {
				aumento = precio * 0.10
			break
			}
	}

	preciofinal = precio + aumento - descuento;
	alert("El precio es " + preciofinal);

}

//antes del alert quiero calcular el precio final


/*
let x = 10;

x = x+3;
x += 3;

x = x * 5
x *= 5
*/





//FIN DE LA FUNCIÓN