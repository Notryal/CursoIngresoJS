function mostrar(){

//tomo el mes

let mes;
mes = document.getElementById("txtIdMes").value;

//SWITCH
	
switch(mes){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno.");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frío!");
		break;
	default: // es la opcion default como un else
		alert("Ya pasamos el frío, ahora calor!");
	//no llega break por que ya estoy cerrando el switch }
}

//IF

if (mes == "Julio" || "Agosto") {

	alert("Abrigate que hace frio")
	
} else if (mes == "Enero" || "febrero" || "Marzo" || "Abril"|| "Mayo" || "Junio") {
	
	alert("Falta para el invierno");

} else {

	alert("Ya pasamos el frio, ahora calor!!");
}

/*
switch(mes){
	case "Enero":
		alert("Falta para el invierno");
		break;
	case "Febrero":
		alert("Falta para el invierno");
		break;
	case "Marzo":
		alert("Falta para el invierno");
		break;
	case "Abril":
		alert("Falta para el invierno");
		break;
	case "Mayo":
		alert("Falta para el invierno");
		break;
	case "Junio":
		alert("Falta para el invierno");
		break;
	case "Julio":
		alert("Abrigate que hace frio");
		break;
	case "Agosto":
		alert("Abrigate que hace frio");
		break;
	case "Septiembre":
		alert("Ya pasamos el frio, ahora calor!!");
		break;
	case "Octubre":
		alert("Ya pasamos el frio, ahora calor!!");
		break;
		case "Noviembre":
		alert("Ya pasamos el frio, ahora calor!!");
		break;
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!");
		break;
}

*/
}