let botonaso = document.getElementById("comenzar");

let arregloMes : string[] = new Array (12) ;
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "Octubre";
arregloMes[10] = "Noviembre";
arregloMes[11] = "Diciembre";

function verificacionNumero(numLocal): boolean {
  let datoValido: boolean;
  if (numLocal == null || numLocal == "" || numLocal<1 || numLocal>=13) datoValido = false;
  else datoValido = true;
  return datoValido;
}

botonaso.addEventListener("click", () => {
  let numValido:boolean;
  let recorrido:number=Number(prompt("Por favor ingrese el mes que deseado"))
  numValido=verificacionNumero(recorrido);

  if (numValido==true)console.log(arregloMes[recorrido-1]);
  else alert("El numero ingresado no corresponde a ningun mes")
  }
});