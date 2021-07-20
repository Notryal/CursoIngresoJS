/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = sueldo + (sueldo * 0.1);

	console.log(aumento);

    document.getElementById("txtIdResultado").value = parseInt(aumento);
}