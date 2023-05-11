let numerosP = 0;
let numerosPA = 0;

const pagar = async (id, tel) => {
  Swal.fire({
    title: "¿Seguro?",
    text: "Afectaras todo el pedido",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Estoy seguro",
    cancelButtonColor: "#d33",
  }).then((result) => {
    let data = new FormData();
    data.append("id", id);
    data.append("telefono", tel);
    data.append("action", "pagar");
    try {
      response = fetch("../controllers/orden_controller.php", {
        method: "POST",
        body: data,
      });
      Swal.fire({
        title: "La informacion se actualizo correctamente",
        icon: "success",
      });
      setTimeout(function () {
        location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error",
        icon: "error",
      });
    }
  });
};

const cancelar = async (id, tel) => {
  Swal.fire({
    title: "¿Seguro?",
    text: "Esta accion no se podra revertir",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Estoy seguro",
    cancelButtonColor: "#d33",
  }).then((result) => {
    let data = new FormData();
    data.append("id", id);
    data.append("telefono", tel);
    data.append("action", "cancelar");
    try {
      response = fetch("../controllers/orden_controller.php", {
        method: "POST",
        body: data,
      });
      Swal.fire({
        title: "El pedido se cancelo correctamente",
        icon: "success",
      });
      setTimeout(function () {
        location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error",
        icon: "error",
      });
    }
  });
};

const numerosPPT = async () => {
  try {
    await fetch("../controllers/numerosPT.php")
      .then((res) => res.json())
      .then((data) => (numerosP = data.length));
    document.getElementById("numerosPT").textContent = numerosP;

    await fetch("../controllers/numerosPA.php")
      .then((res) => res.json())
      .then((data) => (numerosPA = data.length));
    document.getElementById("numerosPA").textContent = numerosPA;
  } catch (error) {}
};

numerosPPT();
