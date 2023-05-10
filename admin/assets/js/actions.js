let numerosP = 0;
let numerosPA = 0;

const verificar = (id, tel) => {
  Swal.fire({
    title: "¿Seguro?",
    text: "Afectaras todo el pedido",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Estoy seguro",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.value) {
      mensajeSMSPagado(tel);
      pagar(id);
    }
  });
};

const pagar = async (id) => {
  let data = new FormData();
  data.append("id", id);
  try {
    response = await fetch("../controllers/pagar.php", {
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
};

const mensajeSMSPagado = async (tel) => {
  let dataTel = new FormData();
  dataTel.append("tel", tel);
  await fetch("../sendSMSPagar.php", {
    method: "POST",
    body: dataTel,
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
      cancelar(id);
      mensajeSMSCancelado(tel);
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
