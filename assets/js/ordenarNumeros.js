document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Form_Orden").addEventListener("submit", crearOrden);
});

async function crearOrden(e) {
  e.preventDefault();
  let arrayString = numeroE.join(",");
  document.getElementById("numeros").value = arrayString;
  let form = document.getElementById("Form_Orden");
  let data = new FormData(form);
  let response;
  if (numeroE.length == 5 || numeroE.length == 10 || numeroE.length == 20) {
    response = await fetch("controllers/orden_controller.php", {
      method: "POST",
      body: data,
    });
    Swal.fire({
      title: "Felicidades has conseguido tus números",
      icon: "success",
    });
  }
  if (numeroE.length < 5) {
    Swal.fire({
      title: "Escoge almenos 5 boletos para participar en el sorteo",
      icon: "warning",
    });
  }
  if (numeroE.length > 5 && numeroE.length < 10) {
    Swal.fire({
      title: "Escoge 10 boletos para participar en el sorteo",
      icon: "warning",
    });
  }
  if (numeroE.length > 10 && numeroE.length < 20) {
    Swal.fire({
      title: "Escoge 20 boletos para participar en el sorteo",
      icon: "warning",
    });
  }
}
