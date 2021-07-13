/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let Centígrados;
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    Centígrados = (temperatura - 32) * 5/9 ;

    alert("La temperatura es " + Centígrados + "C");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let Fahrenheit;
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    Fahrenheit = (temperatura * 9/5) + 32;

    alert("La temperatura es " + Fahrenheit + "F");

}
