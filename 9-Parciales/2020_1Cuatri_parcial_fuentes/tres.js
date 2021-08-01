function mostrar()
{
/*
En el ingreso a un viaje en avion 
nos solicitan 
nombre , edad, sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo")y
temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. 

1- variables 
nombre, 
edad, 
sexo("f" o "m"),
estado civil("soltero", "casado" o "viudo"),
temperatura corporal,
nombreMaxTemp,
maxTemp,
cantEdadViudo,
contEdadViudo,
cantSolteroViudo, 
cantTerceraEdadEnfermo,
contadorSolteroViudo
contadorTerceraEdadEnfermo
promedioSoltero;

2-un bucle do while

*/

 
let nombre, 
edad, 
sexo,
estado,
temperatura,
seguir,
nombreMaxTemp,
maxTemp,
cantEdadViudo=0,
contEdadViudo=0,
cantSolteroViudo=0, 
cantTerceraEdadEnfermo=0,
contadorSolteroViudo=0,
contadorTerceraEdadEnfermo=0,
promedioSoltero,
flag=1;

do {
	nombre=prompt("Ingrese nombre : ").toLowerCase();

	edad = parseInt(prompt("Ingresar edad! numero y positivo").toLowerCase());
  while (!(edad>0)) {
    edad = parseInt(prompt("Incorrecto! Ingresar edad! numero y positivo").toLowerCase());
  }

	sexo = prompt("Ingresar genero f/m").toLowerCase();
  while (!(sexo == "m" || sexo== "f" ) && sexo.length!=0) {
    sexo=prompt("Incorrecto! f/m").toLowerCase();
  }
  	estado = prompt("Ingresar estado soltero,casado, viudo").toLowerCase();
  while (!(estado == "soltero" || estado == "casado" ||estado== "viudo" ) && estado.length!=0) {
    estado=prompt("Incorrecto! soltero,casado, viudo").toLowerCase();
  }
  	temperatura = parseFloat(prompt("Ingresar temperatura! numero y positivo").toLowerCase());
  while (!(temperatura>=30 && temperatura<=45)) {
    temperatura = parseFloat(prompt("Incorrecto! Ingresar temperatura! numero y positivo").toLowerCase());
  }

  seguir = prompt("Quiere ingresar otro producto? s/n").toLowerCase();

  if(flag || maxTemp<temperatura){
	  flag=0;
	  maxTemp=temperatura;
	  nombreMaxTemp=nombre;
  }
  if () {
	  
  }
  if (condition) {
	  
  }
if (condition) {
	  
  }
	
} while (condition);



}
