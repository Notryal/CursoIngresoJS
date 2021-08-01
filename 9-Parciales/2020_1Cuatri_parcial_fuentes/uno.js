/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------------------------------
Estrategia de resolucion
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces(van dentro del bucle)
 datos del producto
 2.1.1- pido tipo y valido
 2.1.2- pido precio y valido
 2.1.3- pido cantidad y valido
 2.1.4- pido marca y valido
 2.1.5- pido fabricante y valido
 -------------------------------
 a) me fijo si el producto es de tipo alcohol y si es asi la primer vez que 
 ingresa alcohol guardo el precio en precio barato y las siguientes veces
 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)
 b) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
 c) si es de tipo jabon acumulo la cantidad(ya lo hice en el punto b)
-------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador
y sacar el promedio para ese tipo

3.2 muestro los resultados

*/
/*
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / cantAlBarato / fabAlBarato, flagA para saber si se ingreso un alcohol o no
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b
*/
function mostrar() 
{

let tipo, 
cantidad,
precio,
marca,
fabricante,
precioMinAl=0,
cantAlBarato,
fabAlBarato,
flagA=1,
contadorA=0,
contadorB=0,
contadorJ=0,
maxUnidades,
acumA=0,
acumB=0,
acumJ=0,
promedio;

for (let i = 0; i < 5; i++) {
	tipo = prompt("Ingrese tipo de producto (barbijo/jabón/alcohol)").toLowerCase();
	while (!(tipo == "barbijo" || tipo ==  "jabón" || tipo ==  "alcohol")) { // !=
		tipo = prompt("Incorrecto, ingresar barbijo , jabón o alcohol : ").toLowerCase();
	}
	precio = parseInt(prompt("Ingrese precio del producto (Entre 100 y 300)"));
	while (!(precio <=300 && precio>=100)) {
		precio = parseInt(prompt("Incorrecto, precio debe estar entre 100 y 300. Ingrese precio: "));
	}
	cantidad = parseInt(prompt("Ingrese cantidad del producto (numero real y menor a 1000)"));
	while(!(cantidad<=1000 && cantidad>=1)){
		cantidad = parseInt(prompt("Incorrecto, cantidad tiene que ser un numero y menor a 1000 :"));
	}
	marca = prompt("Ingresar marca : ").toLocaleLowerCase();
	while (!(isNaN(marca)) && marca.length == 0){
		marca = prompt("Incorrecto. Ingresar marca : ").toLocaleLowerCase();
	}
	fabricante= prompt("Ingresar fabricante : ").toLocaleLowerCase();
	while (!(isNaN(fabricante)) && marca.length == 0){
		fabricante = prompt("Incorrecto. Ingresar marca : ").toLocaleLowerCase();
	}

if (tipo == "alcohol"){

	if(flagA || precio<precioMinAl ){
		precioMinAl = precio;
		cantAlBarato = cantidad;
		fabAlBarato = fabricante;
		flagA=0;
	}
acumA+= cantidad;
contadorJ;
}else if (tipo=="barbijo"){
		acumB+= cantidad;
		contadorB++;
} else {//tipo == "jabon"
		acumJ+= cantidad;
		contadorJ++;
	}
}// fin for

if (acumJ> acumA && acumJ>acumB){
	maxUnidades = "Jabon";
	promedio = acumJ / contadorJ;

} else if (acumA>=acumJ && acumA>acumB){
	maxUnidades = "Alcohol";
	promedio = acumA / contadorA;

}else {
	maxUnidades = "Barbijo"
	promedio = acumB / acumB;
}

document.write("a)Precio alcohol barato : "+precioMinAl+" fabricante: "+fabAlBarato+" cantidad: " + cantAlBarato + "<br>");

document.write("b)Tipo con mas unidades : "+maxUnidades(" promedio : "+promedio+"<br>"));

document.write("c)Cantidad de jabones : "+contadorJ+"<br>");

} // Fin
