/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto,
numeroIngresado,
contadorIntentos=0,
max=100,
min=1;

//declaro variables 
//genero un numero random
//ingreso un numero respuesta
//Verifico si el numero random y respuesta son lo mismo
//Cuento un intento de respuesta
//si son lo mismo, muestro un mensaje ganador y termino
//si NO son lo mismo informo si esta cerca o si se paso



function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random() * (max - min + 1) +min);
  alert("Numero Secreto generado");
  console.log(numeroSecreto);

}

function verificar()
{
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
	if(numeroIngresado == numeroSecreto){
    alert("Usted es un ganador! y en solo " + contadorIntentos + " Intentos");
    contadorIntentos=0
  } else if(numeroIngresado > numeroSecreto){
    alert("Se paso del numero secreto");
  } else {
    alert("Le falta para el numero secreto");
  }
    
}

