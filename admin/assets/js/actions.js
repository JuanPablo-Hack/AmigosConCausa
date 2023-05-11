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
      // setTimeout(function () {
      //   location.reload();
      // }, 3000);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error",
        icon: "error",
      });
    }
  });
};

const verificar2 = (id, tel) => {
  Swal.fire({
    title: "¿Seguro?",
    text: "Este cambio no se podra revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Estoy seguro",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.value) {
      mensajeSMSCancelado(tel);
      cancelar(id);
    }
  });
};

const cancelar = async (id) => {
  let data = new FormData();
  data.append("id", id);
  try {
    response = await fetch("../controllers/cancelar.php", {
      method: "POST",
      body: data,
    });
    Swal.fire({
      title: "Pedido cancelado correctamente",
      icon: "success",
    });
    setTimeout(() => {
      location.href = location.href;
    }, 3000);
  } catch (error) {
    Swal.fire({
      title: "Ocurrio un error",
      icon: "error",
    });
  }
};

const mensajeSMSCancelado = async (tel) => {
  let cancelTel = new FormData();
  cancelTel.append("tel", tel);
  await fetch("../sendSMSCancel.php", {
    method: "POST",
    body: cancelTel,
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
