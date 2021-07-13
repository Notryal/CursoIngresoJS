/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

let largo;
let ancho;
let perimetro;

largo = parseInt(document.getElementById("textIdLargo").value);
ancho = parseInt(document.getElementById("textIdAncho").value);

perimetro = (2 * largo + ancho * 2) * 3

alert("La cantidad de alambre es " + perimetro);

}
function Circulo () 
{

let largo;
let ancho;
let radio;
let perimetro;

largo = parseInt(document.getElementById("textIdLargo").value);
ancho = parseInt(document.getElementById("textIdAncho").value);
radio = parseInt(document.getElementById("textIdRadio").value);

perimetro = 2 * 3,14 * radio

alert("La cantidad de alembre es " + perimetro)

}
function Materiales () 
{

let largo;
let ancho;
let radio;
let perimetro;

largo = parseInt(document.getElementById("textIdLargo").value);
ancho = parseInt(document.getElementById("textIdAncho").value);
radio = parseInt(document.getElementById("textIdRadio").value);

area = largo * ancho





}