let botonaso = document.getElementById("redireccionar");

botonaso?.addEventListener("click", () => {
  let direccion: number = Number(seleccion.value);

  switch (direccion) {
    case 1:
      location.href = "../ejerciciosProg16-5/miPrimerArray.html";
      break;
    case 2:
      location.href = "../ejerciciosProg16-5/arrayMeses.html";
      break;
    case 3:
      location.href = "../ejerciciosProg16-5/suma2Array.html";
      break;
    case 4:
      location.href = "../ejerciciosProg16-5/personasEnDisco.html";
      break;
  }
});
