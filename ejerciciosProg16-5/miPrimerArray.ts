let botonaso = document.getElementById("comenzar");

let miArray: number = new Array(7);

miArray[0] = 20;
miArray[1] = 14;
miArray[2] = 8;
miArray[3] = 0;
miArray[4] = 5;
miArray[5] = 19;
miArray[6] = 24;

botonaso.addEventListener("click", () => {
  for (let recorrido: number = 0; recorrido < 7; recorrido++) {
    console.log(miArray[recorrido]);
  }
});

function invertirArreglo(v: number[]) {
  let tamañoArreglo: number = v.length - 1;
  for (let indice: number = 0; indice <= tamañoArreglo / 2; indice++) {
    let aux: number = v[indice];
    v[indice] = v[tamañoArreglo - indice];
    console.log("ahora pos:" + indice + "vale " + v[indice]);
    v[tamañoArreglo - indice] = aux;
  }
}

function calculoProductoEscalar(array1: number[], array2: number[]) {
  let productoEscalar: number = 0;
  let nElementos: number = array1.length;
  let arrayResultado: number = new Array(nElementos - 1);

  for (let elemento: number = 0; elemento < nElementos; elemento++) {
    arrayResultado[elemento] = array1[elemento] * array2[elemento];
  }

  for (let elemento: number = 0; elemento < nElementos; elemento++) {
    productoEscalar = productoEscalar + arrayResultado[elemento];
  }

  console.log(productoEscalar);
}

//problema entre merge y codigo sin subir.
//hice merge con las correciones de irina, mientras tenia en otra
//pestaña codigo sin subir a github, que hacer en ese caso?
