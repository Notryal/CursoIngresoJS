/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	/*
1 declaro variables > numero/maximo / minimo / seguir
2 generar un bucle del tipo mientras el usuario quiera do while
pido un numero
valido en dato que se a un numero ianan

3 me fijo si es la primera vez
si  es la primera vez asigno el numero a maxmimo y minimo
si no es la primera vez 
me fijo si el numero es un nuevo maximo o un nuevo minimo y
de ser asi actualizar las variables minimo o maximo
despues del bucle
4 muestro resultados

*/

let numero,
maximo,
minimo,
seguir,
flag=1;

do {
	numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)){ //verificar el numero 
			numero=parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}
		
		if (flag || numero> maximo) { //entra en falso PERO hay un OR flag es 1, es verdadero
			numero = maximo;
		} 
		if( flag || numero< minimo) { //baja la bandera, el numero SOLO entra si el numero<minimo
		numero = minimo;
		flag=0;
		}
		//Uso el flag para verificar si entra por primera vez, y se traba en 0, y corre la otra condicion
	seguir= prompt("Quiere ingresar otro numero? s/n ").toLowerCase();	
	
}while(seguir == "s")

document.getElementById("txtIdMaximo").value=maximo;
document.getElementById("txtIdMinimmo").value=minimo;

}

/*
Si no quiero usar flag
Le doy valores a minimo(grande) y maximo(chico)
El numero ingresa por primera vez, paso los if
El numero le da valores a minimo y maximo

termina el bucle y pregunta por otro numero
*/

//////En ESTE CASO ya que le asigno numero a max y min 2 veces, busca la forma para hacerlo 1 vez
// if(flag){ // 1 true 0 false
// 	alert("primera vez");
// 	numero = maximo;
// 	numero = minimo;
// }else{
	
// 	alert("No es la primera vez");
//hay 3 opciones, no puede ser solo else, el numero puede estar en el medio