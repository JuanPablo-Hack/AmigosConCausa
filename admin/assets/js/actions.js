let numerosP = 0;
let numerosPA = 0;

const pagar = async (id, tel) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro de actualizar el pedido?",
      text: "¡El pedido se actualizara a pagado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, poner en pagado",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let data = new FormData();
        data.append("id", id);
        data.append("telefono", tel);
        data.append("action", "pagar");
        fetch("../controllers/orden_controller.php", {
          method: "POST",
          body: data,
        })
          .then((result) => result.text())
          .then((result) => {
            if (result == 1) {
              swalWithBootstrapButtons.fire(
                "Actualizado",
                "Su pedido ha sido cambiado a pagado",
                "success"
              );
              setTimeout(function () {
                location.reload();
              }, 3000);
            } else {
              swalWithBootstrapButtons.fire(
                "Error",
                "Hemos tenido un error a la base de datos o la conexión.",
                "error"
              );
              setTimeout(function () {
                location.reload();
              }, 3000);
            }
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "EL pedido se ha mantenido pendiente",
          "error"
        );
      }
    });
};
const cancelar = async (id, tel) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro que cancelar los números?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, liberar números",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let data = new FormData();
        data.append("id", id);
        data.append("telefono", tel);
        data.append("action", "cancelar");
        fetch("../controllers/orden_controller.php", {
          method: "POST",
          body: data,
        })
          .then((result) => result.text())
          .then((result) => {
            if (result == 1) {
              swalWithBootstrapButtons.fire(
                "Cancelado!",
                "Los números han sido liberados en la tabla del sorteo.",
                "success"
              );
              setTimeout(function () {
                location.reload();
              }, 3000);
            } else {
              swalWithBootstrapButtons.fire(
                "Error",
                "Hemos tenido un error a la base de datos o la conexión.",
                "error"
              );
              setTimeout(function () {
                location.reload();
              }, 3000);
            }
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Tu archivo ha sido salvado",
          "error"
        );
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
