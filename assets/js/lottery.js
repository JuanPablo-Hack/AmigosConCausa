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
    console.log(name2,email2,phone2,number)
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
        console.log(numeroE)
        document.getElementById(id).style.color= "#FF0000"
    }else if(rPNumber != -1){
        numeroE.splice(rPNumber,1)
        document.getElementById(id).style.color= "#000"
        console.log(numeroE)
    }else if(numeroE.length===4){
        Swal.fire({
            title:"El numero maximo de boletos es de 4"
        })   
    }
}

