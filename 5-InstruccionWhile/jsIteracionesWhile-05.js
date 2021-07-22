/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m .").toLowerCase();

	while (sexo !="f" && sexo !="m") {
		alert("sexo desconocido, ingrese denuevo");
		sexo = prompt("ingrese f o m").toLowerCase();
	}

	document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN