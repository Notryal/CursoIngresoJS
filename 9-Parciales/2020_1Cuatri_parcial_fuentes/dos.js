/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas, (positivo y numero)
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 

*/
function mostrar()
{

let tipo,
cantidad,
precio,
maxcantidad,
seguir, 
importeNeto,
importe,
importeBruto=0, //la voy a usar como un acumulador
descuento,
mayorTipo,
mayorPrecio,
acumBolsas=0,
acumC=0,
acumA=0,
acumCal=0,
tipoMaxBolsas,
flag=1,
cantMaxBolsas;

do {

  tipo = prompt("Ingresar tipo! cal arena o cemento").toLowerCase();
  while (!(tipo == "cal" || tipo== "arena" || tipo =="cemento") && tipo.length!=0) {
    tipo=prompt("Incorrecto! Ingresar tipo! cal arena o cemento").toLowerCase();
  }
  cantidad = parseInt(prompt("Ingresar cantidad! numero y positivo").toLowerCase());
  while (!(cantidad>0)) {
    cantidad = parseInt(prompt("Incorrecto! Ingresar cantidad! numero y positivo").toLowerCase());
  }
  precio = prompt("Ingresar precio!").toLowerCase();
  while (!(precio>0)) {
  precio = prompt("Incorrecto! Ingresar precio!").toLowerCase();
  }
  seguir = prompt("Quiere ingresar otro producto? s/n").toLowerCase();

  acumBolsas+= cantidad; //o sumar todos los acumuladores
  importe=precio*cantidad;
  importeBruto+=importe; //acumulador de importe sin nada

  if (tipo == "cal") {
    acumCal+=cantidad;
  } else if(tipo == "arena") {
    acumA+=cantidad;
  } else { //tipo==cemento 
    acumC+=cantidad;
  }

  if(flag || mayorPrecio<precio){
    flag=0; 
    mayorTipo=tipo
    mayorPrecio=precio
  }

} while (seguir == "s")

if(acumBolsas>10){
  descuento = importeBruto * .15;
}else if(acumBolsas>30){
  descuento = importeBruto * .25;

}

importeNeto = importeBruto-descuento


if(acumA>acumC && acumA>acumCal){
tipoMaxBolsas = "Arena";
cantMaxBolsas = acumA;

}else if (acumC<=acumA || acumC){
  tipoMaxBolsas = "Cemento";
  cantMaxBolsas = acumC;

}else{
  tipoMaxBolsas = "Cal";
  cantMaxBolsas = acumCal;

}
/*
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 
*/

document.write("El importe total a pagar es : "+importeBruto+ "<br>");
document.write("El importe total a pagar es : "+importeNeto+ "<br>");
document.write("El tipo es: " +tipoMaxBolsas+ " || unidades: "+ cantMaxBolsas +"<br>");
document.write("El tipo mas caro es " +mayorTipo+ " || precio : " + mayorPrecio + "<br>");

}




