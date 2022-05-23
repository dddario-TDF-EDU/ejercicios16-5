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
