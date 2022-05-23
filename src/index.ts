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
  }
});
