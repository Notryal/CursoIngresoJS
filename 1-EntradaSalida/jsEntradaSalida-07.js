/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// let numero1 
// let numero2 
// let resultado
//numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
//numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

//las variables de arriba son variables GLOBALES nosotros vamos a usar LOCALES adentro de cada funcion

function sumar()
{	
	let numero1 
	let numero2 
	let resultado

	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2

	alert(resultado);	

}

function restar()
{
	let numero1 
	let numero2 
	let resultado
	
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2

	alert(resultado);		
}

function multiplicar()
{ 
	let numero1 
	let numero2 
	let resultado
	
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2

	alert(resultado);	
}

function dividir()
{
	let numero1 
	let numero2 
	let resultado
	
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2

//tendriamos que agregar algo para evitar que cualquiera de los dos numeros dividan 0

	alert(resultado);		
}

