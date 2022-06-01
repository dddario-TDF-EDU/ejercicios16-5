let botonaso = document.getElementById("comenzar");

function verificacionNumero(numLocal: number): boolean {
  let datoValido: boolean;
  if (numLocal < 1) {
    datoValido = false;
  } else {
    datoValido = true;
  }
  return datoValido;
}

function ingresoArray(cantElementos: number): number {
  let arrayAux: number = new Array(cantElementos);
  for (let elemento: number = 0; elemento < cantElementos; elemento++) {
    arrayAux[elemento] = Number(
      prompt("ingrese el elemento: " + elemento + " del array")
    );
  }
  return arrayAux;
}

botonaso.addEventListener("click", () => {
  let nElementos: number;
  let nValido: boolean;

  nElementos = Number(
    prompt("ingrese el numero de elementos que tendran los arrays:")
  );

  nValido = verificacionNumero(nElementos);

  if (nValido === true) {
    let array1: number = new Array(nElementos);
    let array2: number = new Array(nElementos);
    let arrayResultado: number = new Array(nElementos);

    array1 = ingresoArray(nElementos);
    array2 = ingresoArray(nElementos);

    for (let elemento: number = 0; elemento < nElementos; elemento++) {
      arrayResultado[elemento] = array1[elemento] + array2[elemento];
      console.log(arrayResultado[elemento]);
    }
  } else {
    alert("cantidad de elementos invalido");
  }
});
