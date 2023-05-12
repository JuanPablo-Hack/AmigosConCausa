function fnFormatDetails(oTable, nTr) {
  var aData = oTable.fnGetData(nTr);
  var sOut =
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
  sOut += "<tr><td>Fecha del pedido:</td><td>" + aData[7] + "</td></tr>";
  sOut += "<tr><td>Números seleccionados:</td><td>" + aData[2] + "</td></tr>";
  sOut += "<tr><td>Estado de la compra:</td><td>" + aData[8] + "</td></tr>";
  sOut += "</table>";

  return sOut;
}
$(document).ready(function () {
  var nCloneTh = document.createElement("th");
  var nCloneTd = document.createElement("td");
  nCloneTd.innerHTML = '<img src="./assets/images/details_open.png">';
  nCloneTd.className = "center";

  $("#hidden-table-info thead tr").each(function () {
    this.insertBefore(nCloneTh, this.childNodes[0]);
  });

  $("#hidden-table-info tbody tr").each(function () {
    this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
  });

  var oTable = $("#hidden-table-info").dataTable({
    aoColumnDefs: [
      {
        bSortable: false,
        aTargets: [0],
      },
    ],
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });

  $("#hidden-table-info tbody td img").on("click", function () {
    var nTr = $(this).parents("tr")[0];
    if (oTable.fnIsOpen(nTr)) {
      this.src = "./assets/images/details_open.png";
      oTable.fnClose(nTr);
    } else {
      this.src = "./assets/images/details_close.png";
      oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), "details");
    }
  });
});
const reiniciarNumeros = async () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro que deseas liberar los números de nuevo?",
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
        data.append("action", "reiniciar");
        fetch("../controllers/orden_controller.php", {
          method: "POST",
          body: data,
        })
          .then((result) => result.text())
          .then((result) => {
            if (result == 1) {
              swalWithBootstrapButtons.fire(
                "Los números han sido liberados!",
                "Se ha reiniciado el juego de nuevo.",
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
          "El juego sigue en su curso",
          "error"
        );
      }
    });
}
const cerrarSesion = async () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro que deseas cerrar sesión?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, cerrar sesión",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let data = new FormData();
        data.append("action", "logout");
        fetch("../controllers/loginController.php", {
          method: "POST",
          body: data,
        })
          .then((result) => result.text())
          .then((result) => {
            swalWithBootstrapButtons.fire(
              "Correcto",
              "Se ha cerrado tu sesión, para ingresar inicia sesión de nuevo.",
              "success"
            );
            setTimeout(function () {
              location.reload();
            }, 3000);
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Tu sesión está a salvo",
          "error"
        );
      }
    });
}