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
      confirmButtonText: "Si, eliminar",
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
}

// const pagar = async (id, tel) => {
//   Swal.fire({
//     title: "¿Seguro?",
//     text: "Afectaras todo el pedido",
//     icon: "question",
//     showCancelButton: true,
//     confirmButtonText: "Estoy seguro",
//     cancelButtonText: 'No'
//   }).then((result) => {
//     let data = new FormData();
//     data.append("id", id);
//     data.append("telefono", tel);
//     data.append("action", "pagar");
//     try {
//       response = fetch("../controllers/orden_controller.php", {
//         method: "POST",
//         body: data,
//       });
//       Swal.fire({
//         title: "La informacion se actualizo correctamente",
//         icon: "success",
//       });
//       setTimeout(function () {
//         location.reload();
//       }, 3000);
//     } catch (error) {
//       Swal.fire({
//         title: "Ocurrio un error",
//         icon: "error",
//       });
//     }
//   });
// };

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
      title: "Estas seguro que deseas eliminar el blog?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
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
                "Eliminado!",
                "Su archivo ha sido eliminado.",
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
}


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
