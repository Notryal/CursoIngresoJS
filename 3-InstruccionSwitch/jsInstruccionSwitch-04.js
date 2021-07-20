function mostrar()
{
// 	al seleccionar un mes informar.
// si tiene 28 días.
// si tiene 30 días.
// si tiene 31 días. 
	//tomo el mes
	let mes =txtIdMes.value;

switch (mes) {
	case "Febrero":
		alert("Tiene 28 dias");
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Tenie 30 dias");
	default:
		alert("Tiene 31 dias");
}



}//FIN DE LA FUNCIÓN