/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let maquina,
max=3,
min=1,
maquinaPapel,
maquinaPiedra,
maquinaTijera;
//variables numerorandom, piedra, papel, tijera, imagenRespuesta
//generar numero y asignar a piedra o papel o tijera
//ingresar Imagen respuesta
//verificar si gano, empato o perdio
//informar respuesta
function comenzar()
{
    maquina = Math.floor(Math.random() * (max-min+1)+min);
	//Genero el número RANDOM entre 1 y 100
	console.log(numeroSecreto)	
switch (numeroSecreto) {
    case 1: 
    maquinaPiedra=1
    break;
    case 2:
    maquinaTijera=1
    break;
    case 3:
    maquinaPapel=1
    break;
}

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (maquinaPapel=1) {
        alert("Usted perdio");
    } else if(maquinaTijera=1) {
        alert("Usted gano!");
    }else {
        alert("Empate!");
    }
    comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
	if (maquinaPapel=1) {
        alert("Empate!");
    } else if(maquinaTijera=1) {
        alert("Usted perdio");
    }else {
        alert("Usted gano!");
    }
    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (maquinaPapel=1) {
        alert("Usted gano!");
    } else if(maquinaTijera=1) {
        alert("Empate!");
    }else {
        alert("Usted perdio");
    }
    comenzar();

}//FIN DE LA FUNCIÓN

