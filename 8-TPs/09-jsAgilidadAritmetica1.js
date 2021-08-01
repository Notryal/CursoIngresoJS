/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

//mostrar dos numeros

let respuesta, 
max=10,
min=1,
numero1,
numero2,
resta,
division,
multiplicacion,
suma,
operador,
resultado;

function comenzar()
{

numero1=Math.floor(Math.random() * (max-min+1)+min);
numero2=Math.floor(Math.random() * (max-min+1)+min);
operador=Math.floor(Math.random() * (4-1+1)+1); // suma 4/ resta 3/ division 2/ multiplicacion 1/

document.getElementById("txtIdPrimerNumero").value = numero1;
document.getElementById("txtIdSegundoNumero").value= numero2;

switch (operador) {
    case 4:
        document.getElementById("txtIdOperador").value = "Suma"
        suma = numero1 + numero2;
        break;
    case 3:
        document.getElementById("txtIdOperador").value = "Resta"
        resta = numero1-numero2;
        break;
    case 2:
        document.getElementById("txtIdOperador").value = "Division"
        division = numero1/numero2;
        break;
    case 1:
        document.getElementById("txtIdOperador").value = "Multiplicacion"
        multiplicacion = numero1*numero2;
        break;
}

}//FIN DE LA FUNCIÓN
function Responder()
{
	resultado = document.getElementById("txtIdRespuesta").value;
    if(resultado == suma || resultado == resta || resultado == division || resultado == multiplicacion){
        alert("Resultado Correcto!");
    }else{
        alert("Resultado Incorrecto");
    }

}//FIN DE LA FUNCIÓN
