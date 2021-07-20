function mostrar()
{
// 	si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;
	
	//Con if


	if (mes == "Enero"){
		alert("Que comiences bien el año!");

	} else if (mes=="Julio"){
		alert("Se vienen las vacaciones!");

    } else if (mes=="Diciembre"){
		alert("Felices Fiestas!");
	}

    
	//Con Switch

	switch(mes){
		case "Enero":
			alert("Que comiences bien el año!");
			break;
		case "Marzo":
			alert("A clases!")	
			break;
		case "Julio":
			alert("Se vienen las vacaciones!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!");
			break;

	} //default es lo que quiero poner si no pasa nada de estos casos, es como else


}//FIN DE LA FUNCIÓN