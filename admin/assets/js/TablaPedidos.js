$(document).ready(function () {
  //   var nCloneTh = document.createElement("th");
  //   var nCloneTd = document.createElement("td");
  //   nCloneTd.innerHTML = '<img src="./assets/images/details_open.png">';
  //   nCloneTd.className = "center";

  //   $("#hidden-table-info thead tr").each(function () {
  //     this.insertBefore(nCloneTh, this.childNodes[0]);
  //   });

  //   $("#hidden-table-info tbody tr").each(function () {
  //     this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
  //   });
  $("#hidden-table-info").dataTable({
    aoColumnDefs: [
      {
        bSortable: false,
        aTargets: [0],
      },
    ],
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });

  //   $("#hidden-table-info tbody td img").live("click", function () {
  //     var nTr = $(this).parents("tr")[0];
  //     if (oTable.fnIsOpen(nTr)) {
  //       this.src = "./assets/images/details_open.png";
  //       oTable.fnClose(nTr);
  //     } else {
  //       this.src = "./assets/images/details_close.png";
  //       oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), "details");
  //     }
  //   });
});
