function mostrar()
{
	let nota;

	nota = Math.floor(Math.random() * 10 + 1);

	if (nota >= 9){

		alert("Excelente " + nota);

	} else if (nota>=4 && nota<=8){
				
				alert(`Aprobo ${nota}`); // ` ` estas comillas me dejan poner variables y que sea un dato ${}

			} else{

				alert("Vamos, la proxima se puede " + nota);

			}

}
	
// Alt + 96 ``````
// alert(`Excelente! ${nota}`);
// Es lo mismo que:
// alert("Excelente!" + nota);

//FIN DE LA FUNCIÓN