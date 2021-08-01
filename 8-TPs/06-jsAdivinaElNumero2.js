/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto,
max=100,
min=1,
numeroIngresado,
contadorIntentos=0;

//variables que voy a usar.. numero secreto, contador, numero ingresado
//verifico si numero ingresado es igual al numero secreto
//cuento un intento
//Segun la cantidad de intentos mostrar un texto

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * (max-min+1)+min);
	//Genero el número RANDOM entre 1 y 100
	alert("Numero Generado");
	console.log(numeroSecreto)	

}

function verificar()
{
	numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
	contadorIntentos++

	if(numeroIngresado==numeroSecreto){

		switch (contadorIntentos) {
			case 1:
			alert("usted es un Psíquico");
			break;
			case 2:
			alert("excelente percepción");
			break;
			case 3:
			alert("Esto es suerte");
			break;
			case 4:
			alert("Excelente técnica");
			break;
			case 5:
			alert("usted está en la media");
			break;
			case 6 && 10:
			alert("falta técnica");
			break;
			default:
			alert("afortunado en el amor!!");
		}
		contadorIntentos=0
	

	} else {

		alert("Incorrecto, intente de nuevo");
	}

	
	
	

}