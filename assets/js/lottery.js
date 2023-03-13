let numbers = [];
let number = 0; 

let bingo = []; //numeros del 0 al 10000
let numeroE = []; //numero para seleccionar el bingo 

let numerosP = []; 
let numerosPi = []

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
            title:"Numero agregado correctamente",
            icon:"success"
        })
        numbers.push(number)
    }else{
        Swal.fire({
            title:"Numero agregado anteriormente, tire de nuevo",
            icon:"error"
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



const numeros_seleccionado = async () => {
    
    for(i=0;i<10000;i++){
        bingo.push(i);
    }

    try {
        await fetch("controllers/numeros_pendientes.php")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                numerosP.push(element.numeros_seleccionado.split(','));
            });
        });

        numerosP.forEach(element => {
            element.forEach(element => {
                numerosPi.push(parseInt(element))
            })
        });

        numerosPi.forEach(element => {
            let rPNumber = bingo.indexOf(element);
            if(rPNumber != -1){
                bingo.splice(rPNumber,1)
            }
        });    
        document.getElementById("containerT").innerHTML = createTable(bingo)
    } catch (error) {
        console.log(error)
    }
}

numeros_seleccionado()

let createTable = function(numeros){
    let string="";

    for(let numero of numeros){
        string += `<div class='numero' id=${numero} onclick=addBingo(id)>`
        string += numero
        string += "</div>"
    }
    return string;
}


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
            title:"El numero maximo de boletos es de 4",
            icon:"error"
        })   
    }
}


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
            title:"Escoge almenos un boleto para continuar",
            icon:"error"
        })
    }else{
        try {
            response = await fetch("controllers/orden_controller.php",{
              method: "POST",
              body: data,
            });
            Swal.fire({
                title:"Tu registro se completo correctamente",
                icon:"success"
            });
            setTimeout(()=>{
                location.href = location.href
            },2000);
        }catch (error) {
            cSwal.fire({
                title:"Algo fallo en tu registro",
                icon:"error"
            })
        }
    }
}
