/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = 10 * sueldo / 100;
	
	resultado = aumento + sueldo;
	
    document.getElementById("textIdResultado").value = resultado;
}

