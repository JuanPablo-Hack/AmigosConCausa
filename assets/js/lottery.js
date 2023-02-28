let numbers = [];
let number = 0; 

let bingo = [] //numeros del 0 al 10000
let numeroE = [] //numero para seleccionar el bingo 

const newNumbers = () => {
    number = Math.floor(Math.random() * (50 - 1 )+ 1)
    let rPNumber = numbers.indexOf(number)
    if(rPNumber == -1){
        document.getElementById("number").innerHTML = "Tu numero de boleto es: "
        document.getElementById("number2").innerHTML = number
    }else{
        Swal.fire({
            title:"numero repetido, porfavor tire de nuevo"
        })
        document.getElementById("number").innerHTML = "numero repetido, porfavor tire de nuevo"
        document.getElementById("number2").innerHTML = ""
    }

}

const addNumbers = () => {
    console.log(number)
    let rPNumber = numbers.indexOf(number)
    if(rPNumber ==-1){
        Swal.fire({
            title:"Numero agregado correctamente"
        })
        numbers.push(number)
    }else{
        Swal.fire({
            title:"Numero agregado anteriormente, tire de nuevo"
        })
        document.getElementById("number").innerHTML = "numero repetido, porfavor tire de nuevo"
        document.getElementById("number2").innerHTML = ""
    }
    checkInfo();
}

const checkInfo = () => {
    let name2 = document.getElementById("name2").value;
    let email2 = document.getElementById("email2").value;
    let phone2 = document.getElementById("phone2").value;
}

for(i=0;i<10000;i++){
    bingo.push(i)
}

let createTable = function(numeros){
    let string="";

    for(let numero of numeros){
        string += `<div class='numero' id=${numero} onclick=addBingo(id)>`
        string += numero
        string += "</div>"
    }
    return string;
}

document.getElementById("containerT").innerHTML = createTable(bingo)

const addBingo = (id) => {
    let rPNumber = numeroE.indexOf(id)
    if(rPNumber === -1 && numeroE.length<4){
        numeroE.push(id)
        document.getElementById(id).style.color= "#FF0000"
    }else if(rPNumber != -1){
        numeroE.splice(rPNumber,1)
        document.getElementById(id).style.color= "#000"
    }else if(numeroE.length===4){
        Swal.fire({
            title:"El numero maximo de boletos es de 4"
        })   
    }
}

// const sendInfo = () => {
//     let name2 = document.getElementById("name2").value;
//     let email2 = document.getElementById("email2").value;
//     let phone2 = document.getElementById("phone2").value;

//     if([name2,email2,phone2].includes("")){
//         Swal.fire({
//             title:"Debes completar todos los campos para continuar"
//         })
//     }else if(numeroE.length===0){
//         Swal.fire({
//             title:"Debes escoger almenos un boleto para continuar"
//         })
//     }
//     else{
//         console.log(email2,name2,phone2)
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Form_Orden").addEventListener("submit", crearOrden);
  });

  async function crearOrden(e) {
    e.preventDefault();
    let arrayString = numeroE.join(",")
    document.getElementById("numeros").value = arrayString;
    let form = document.getElementById("Form_Orden");
    let data = new FormData(form);
    let response;
    if(numeroE.length===0){
        Swal.fire({
            title:"Escoge almenos un boleto para continuar"
        })
    }else{
        try {
            response = await fetch("admin/orden_controller.php",{
              method: "POST",
              body: data,
            });
            Swal.fire({
                title:"Tu registro se completo correctamente"
            })
        }catch (error) {
            cSwal.fire({
                title:"Algo fallo en tu registro"
            })
        }
    }
}
