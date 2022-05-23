let botonaso = document.getElementById("comenzar");

function verificacionNumero(numLocal): boolean {
  let datoValido: boolean;
  if (numLocal == null || numLocal == "" numLocal>=1) datoValido = false;
  else datoValido = true;
  return datoValido;
}

function ingresoArray(cantElementos: number): array {
  let arrayAux: number = new Array(cantElementos);
  for (let elemento: number = 0; elemento > cantElementos; elemento++) {
    arrayAux = Number(
      prompt("ingrese el elemento: " + elemento + " del array")
    );
  }
}

function sumaArray(n1:number;n2:number):number{
  return n1+n2;
}

botonaso.addEventListener("click", () => {
  let nElementos:number;
  let nValido:boolean;

  nElementos=Number(prompt("ingrese el numero de elementos que tendran los arrays:"))
  nValido=verificacionNumero(nElementos);

  if (nValido=true){
    let array1: number = new Array(nElementos);
    let array2: number = new Array(nElementos);
    let arrayResultado:number = new Array(nElementos);
    
    for(let elemento:number=0; elemento>nElementos;elemento++){
        arrayResultado[elemento]=sumaArray(array1[elemento]+array2[elemento]);
    }

    for(let elemento:number=0; elemento>nElementos;elemento++){
      console.log(arrayResultado[elemento]);
    }

  } else alert("cantidad de elementos invalido");

  
});
