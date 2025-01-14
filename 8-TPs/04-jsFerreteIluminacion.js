/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
 y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
 se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
 en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad,
    marca,
    descuento,
    costofinal,
    impuesto,
    costo =35;

    // la variable costo la sabes en la compilacion

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
   // costo = 35;


    switch (cantidad) {
        case 5:
        if(marca == "ArgentinaLuz"){
            descuento = costo * 0.4;
            } else {
                descuento = costo * 0.3;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = costo * 0.25;    
            } else {
            descuento = costo * 0.2;
            }
        break;
        case 3:
            if(marca == "ArgentinaLuz"){
            descuento = costo * 0.15;    
            }else if(marca == "FelipeLamparas"){
            descuento = costo * 0.10;
            } else {
                descuento = costo * 0.05;
            }
            break;
        case 2:
        case 1:
                descuento = 0;
            break;
        default:
            if (cantidad>=6){
            descuento = costo * 0.5;
            }
    }
    
    console.log(descuento);
    console.log(cantidad);
    costofinal = cantidad * costo - descuento;
    
    if (costofinal>=120) {
        impuesto = costofinal * 0.1;
        alert("Usted pago " + impuesto + " de IIBB");
        alert(`Su costo total (impuesto incluido) es `  + (impuesto+costofinal));
    } else {
        document.getElementById("txtIdprecioDescuento").value = costofinal;

    }
    

}
