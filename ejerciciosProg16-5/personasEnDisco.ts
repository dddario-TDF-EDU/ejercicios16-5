let botonaso = document.getElementById("comenzar");

function clienteEsMenor(edad: number): boolean {
  let esMenor: boolean;
  if (edad < 21 && edad > 17) {
    esMenor = true;
  } else {
    esMenor = false;
  }
  return esMenor;
}

function edadAleatoria(): number {
  let edad: number = Math.floor(Math.random() * (41 - 18) + 18);
  return edad;
}

function verificacionNumero(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (numLocal < 1 && datoValido === true) {
    datoValido = false;
  }
  return datoValido;
}

botonaso.addEventListener("click", () => {
  let cantidadClientesValido: boolean;

  let cantidadClientes: number;
  let cantidadMenor21: number = 0;
  let cantidadMayorIgual21: number = 0;

  cantidadClientes = Number(
    prompt("Ingrese la cantidad de personas en puerta")
  );

  cantidadClientesValido = verificacionNumero(cantidadClientes);

  if (cantidadClientesValido === true) {
    let arrayClientes: number[] = new Array(cantidadClientes);
    for (let nClientes = 0; nClientes < cantidadClientes; nClientes++) {
      arrayClientes[nClientes] = edadAleatoria();
      console.log(arrayClientes[nClientes]);
    }
    for (let nClientes = 0; cantidadClientes > nClientes; nClientes++) {
      let menor21 = clienteEsMenor(arrayClientes[nClientes]);
      if (menor21 === true) {
        cantidadMenor21++;
      } else {
        cantidadMayorIgual21++;
      }
    }
    console.log("Los que ingresaron fueron: " + cantidadClientes);
    console.log("Los menores de 21 fueron: " + cantidadMenor21);
    console.log("Los mayores fueron: " + cantidadMayorIgual21);
  } else {
    alert("Numero invalido, por favor intente nuevamente");
  }
});

//Tener los datos de personas en la disco.

//17>ingresantes<41

//crear funcion aleatorio que vaya de 18 a 40
//existen un total de 270 personas.
//mostrar, cuantos son menores de 21
//mostrar, cuantos son mayores o igual 21
