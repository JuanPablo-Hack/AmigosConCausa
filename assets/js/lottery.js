let numbers = [];
let number = 0;

let bingo = []; //numeros del 0 al 10000
let numeroE = []; //numero para seleccionar el bingo

let numerosP = [];
let numerosPi = [];

const newNumbers = () => {
  number = Math.floor(Math.random() * (50 - 1) + 1);
  let rPNumber = numbers.indexOf(number);
  if (rPNumber == -1) {
    document.getElementById("number").innerHTML = "Tu numero de boleto es: ";
    document.getElementById("number2").innerHTML = number;
  } else {
    Swal.fire({
      title: "numero repetido, porfavor tire de nuevo",
    });
    document.getElementById("number").innerHTML =
      "numero repetido, porfavor tire de nuevo";
    document.getElementById("number2").innerHTML = "";
  }
};

const addNumbers = () => {
  console.log(number);
  let rPNumber = numbers.indexOf(number);
  if (rPNumber == -1) {
    Swal.fire({
      title: "Numero agregado correctamente",
      icon: "success",
    });
    numbers.push(number);
  } else {
    Swal.fire({
      title: "Numero agregado anteriormente, tire de nuevo",
      icon: "error",
    });
    document.getElementById("number").innerHTML =
      "numero repetido, porfavor tire de nuevo";
    document.getElementById("number2").innerHTML = "";
  }
  checkInfo();
};

const checkInfo = () => {
  let name2 = document.getElementById("name2").value;
  let email2 = document.getElementById("email2").value;
  let phone2 = document.getElementById("phone2").value;
};

let createTable = function (numeros) {
  let string = "";

  for (let numero of numeros) {
    string += `<div class='numero' id=${numero} onclick=addBingo(id)>`;
    string += numero;
    string += "</div>";
  }
  return string;
};

const numeros_seleccionado = async () => {
  let a = "000";
  let b = "00";
  let c = "0";

  for (i = 0; i < 10000; i++) {
    if (i < 10) {
      let format = a + i;
      bingo.push(format);
    } else if (i < 100) {
      let format = b + i;
      bingo.push(format);
    } else if (i < 1000) {
      let format = c + i;
      bingo.push(format);
    } else {
      bingo.push(i);
    }
  }
  document.getElementById("containerT").innerHTML = createTable(bingo);

  try {
    await fetch("controllers/numeros_pendientes.php")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          numerosP.push(element.numeros_seleccionado.split("-"));
        });
      });

    numerosP.forEach((element) => {
      element.forEach((element) => {
        if (parseInt(element) < 10) {
          let format = a + parseInt(element);
          numerosPi.push(format);
        } else if (parseInt(element) < 100) {
          let format = b + parseInt(element);
          numerosPi.push(format);
        } else if (parseInt(element) < 1000) {
          let format = c + parseInt(element);
          numerosPi.push(format);
        } else {
          numerosPi.push(parseInt(element));
        }
      });
    });

    numerosPi.forEach((element) => {
      let rPNumber = bingo.indexOf(element);

      if (rPNumber != -1) {
        bingo.splice(rPNumber, 1);
      }
    });
  } catch (error) {
    console.log(error);
  }

  document.getElementById("containerT").innerHTML = createTable(bingo);
};

numeros_seleccionado();

const addBingo = (id) => {
  let rPNumber = numeroE.indexOf(id);
  if (rPNumber === -1 && numeroE.length < 20) {
    numeroE.push(id);
    document.getElementById(id).style.color = "#FF0000";
    console.log(numeroE.length);
  } else if (rPNumber != -1) {
    numeroE.splice(rPNumber, 1);
    document.getElementById(id).style.color = "#000";
  } else if (numeroE.length === 20) {
    Swal.fire({
      title: "20 boletos es el maximo",
      icon: "error",
    });
  }
};

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
  if (numeroE.length < 5) {
    Swal.fire({
      title: "Escoge almenos 5 boletos para participar en el sorteo",
      icon: "error",
    });
  } else if (numeroE.length === 5) {
    try {
      response = await fetch("controllers/orden_controller.php", {
        method: "POST",
        body: data,
      });
      Swal.fire({
        title: "Tu registro se completo correctamente",
        icon: "success",
      });
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Algo fallo en tu registro",
        icon: "error",
      });
    }
  } else if (numeroE.length === 10) {
    try {
      response = await fetch("controllers/orden_controller.php", {
        method: "POST",
        body: data,
      });
      Swal.fire({
        title: "Tu registro se completo correctamente",
        icon: "success",
      });
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Algo fallo en tu registro",
        icon: "error",
      });
    }
  } else if (numeroE.length < 10) {
    Swal.fire({
      title:
        "La cantidad escogida no es valida, escoga 10 boletos para continuar",
      icon: "error",
    });
  } else if (numeroE.length < 20) {
    Swal.fire({
      title:
        "La cantidad escogida no es valida, escoga 20 boletos para continuar",
      icon: "error",
    });
  } else if (numeroE.length === 20) {
    try {
      response = await fetch("controllers/orden_controller.php", {
        method: "POST",
        body: data,
      });
      Swal.fire({
        title: "Tu registro se completo correctamente",
        icon: "success",
      });
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Algo fallo en tu registro",
        icon: "error",
      });
    }
  }
}
