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
