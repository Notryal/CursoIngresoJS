let eleccionMaquina,
contadorDeEmpates=0,
contadorDePerdidas=0,
contadorDeGanadas=0,
min=1,
max=3,
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
	console.log(maquina)	

switch (maquina) {
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
document.getElementById("txtIdGanadas").value = contadorDeGanadas;
document.getElementById("txtIdPerdidas").value = contadorDePerdidas;
document.getElementById("txtIdEmpatadas").value = contadorDeEmpates;
}//FIN DE LA FUNCIÓN

function piedra()
{
	if (maquinaPapel=1) {
        alert("Usted perdio");
		contadorDePerdidas++
    } else if(maquinaTijera=1) {
        alert("Usted gano!");
		contadorDeGanadas++
    }else {
        alert("Empate!");
		contadorDeEmpates++
    }
    comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
	if (maquinaPapel=1) {
        alert("Empate!");
		contadorDeEmpates++

    } else if(maquinaTijera=1) {
        alert("Usted perdio");
		contadorDePerdidas++

    }else {
        alert("Usted gano!");
		contadorDeGanadas++

    }
    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (maquinaPapel=1) {
        alert("Usted gano!");
		contadorDeGanadas++

    } else if(maquinaTijera=1) {
        alert("Empate!");
		contadorDeEmpates++

    }else {
        alert("Usted perdio");
		contadorDePerdidas++

    }
    comenzar();

}//FIN DE LA FUNCIÓN




