function mostrar()
{
	
	// una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
	// informar si "Se viaja" o "No se viaja" a ese lugar
	
	// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
	
	// en Verano: Se viaja a Mar del plata y Cataratas solamente
	
	// en Otoño: Se viaja a todos los destinos.
	
	// primavera: solo no se viaja a Bariloche 
	
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let flag = 1 //cualquier valor, no importa

switch (estacion) {
	case "Invierno":
		if (destino == "Bariloche"){

			flag = 0;
		}	
		break;
	case "Verano":
		if (destino == "Mar del plata" || destino == "Cataratas"){

			flag = 0;
		}
		break;
	case "Otoño":

		flag = 0;

		break;
	case "Primavera":
		if(destino != "Bariloche"){

			flag = 0;
		}
		break;
	default: //NUNCA vamos a entrar al default porque hay una opcion para todas las estaciones

		break;
}

if (flag == 1){ //le asigno una bandera que toma encuenta si viaja 0 o no 1 
	// si flag es 1 es true
	alert("No se viaja")
}
	alert("Se viaja") //le puedo sacar todos los alert y agregar uno solo
}


//FIN DE LA FUNCIÓN