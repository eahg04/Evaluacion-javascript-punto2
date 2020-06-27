alert('Punto 2')
alert (`Indica el valor sin impuestos (numérico) y el tipo de producto (número entero)`)
let valSinImp = parseInt(prompt ('valor sin impuestos: '));
let tipoProducto = parseInt(prompt ('Introduce tipo de producto: '));

function obtenerImporteConImpuestos(valSinImp, tipoProducto) {
  let impTotal=0

  switch (tipoProducto) {
		case 1:
		  impTotal = valSinImp*0.21
		break;

		case 2:
      impTotal = valSinImp*0.10
		break;

		case 3:
      impTotal = valSinImp*0.05
		break;

		default:
		break;
	}

	alert (`Para un valor sin impuestos de ${valSinImp} y tipo de producto ${tipoProducto} el resultado de importe con impuestos es ${impTotal+valSinImp}.`)

}

obtenerImporteConImpuestos(valSinImp, tipoProducto)
