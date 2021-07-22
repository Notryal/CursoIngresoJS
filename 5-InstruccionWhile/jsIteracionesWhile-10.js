/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//1 declarar numero, sumaN, sumaP, cantP, cantN, cantC, cantPar, promP, promN
	//2- bucle hasta que el usuario quiera, do while
	//pido numero > verifico que sea un numero
	//separo positivos y negativos
	// indico el signo del positivo,negativo,cero (if elseif else)

	//positivo > acumular y cuento el numero
	//negativo > acumulo y lo cuento
	//cero > contar

	//me fijo si el numero es par
	//es par > lo cuento
	
let numero,
respuesta,
sumaNeg =0,
sumaPos=0,
contNeg=0,
contPos=0,
cont0=0,
contPar=0,
promPos=0,
promNeg=0,
diferencia;
// 1 darle valor a las variables que nesecitan valor
do {
	numero = parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero = parseInt(prompt("Incorrecto, ingrese un NUMERO"));
	}
	respuesta = prompt("Seguir ingresando numeros? s/n").toLowerCase();
	while(respuesta != "s" || respuesta != "n"){
	respuesta = prompt("INCORRECTO, seguir ingresando numeros? s/n").toLowerCase();
	}
// 2 separo negativos, positivos y ceros
	if (numero>0) {
		sumaPos+= numero;
		contPos++;
	} else if(numero<0) {
		sumaNeg+= numero;
		contNeg++;
	} else {
		cont0++;
	}

//operador modulo
// cualquier numero divido por 2 el resto es 0, si no es PAR el resto es 1
// 3 me fijo si el numero es par
//el 0 se considera como un numero par

if(numero % 2 == 0){ //el resto del numero dividido por 2 es 0
	contPar++;
}

} while (respuesta == "s");

//4 Calculo los promedios
//si el usuario no pone ningun negativo o positivo, va a dividir entre 0
//puedo poner un flag 
//O 
//en este caso ya tengo un indicador de los ej positivos y negativos, el contador
//cualquiera de los dos esta bien
if (contPos){ //no hace falta poner !=, si contador vale 0 es falso y queda descartado
	promPos = sumaPos / contPos;
}
if(contNeg){//el contador deja de ser 1, pero no importa es verdadero, el 0 SIEMPRE cae en falso
	promNeg = sumaNeg / contNeg;
}

diferencia = sumaPos - sumaNeg;

alert("La suma de los negativos es " + sumaNeg);
alert("La suma de los positivos es " + sumaPos);
alert("La cantidad de los de negativos es " + contNeg);
alert("La cantidad de los de positivos es " + contPos);
alert("La cantidad de los de ceros es " + cont0);
alert("La cantidad de los de los numeros pares es " + contPar);
alert("El promedio de los negativos es " + promNeg);
alert("El promedio de los positivos es " + promPos);

//se puede usar document.write pero no es lo correcto
}//FIN DE LA FUNCIÓN