let numbers = [];
let number = 0; 

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
    document.getElementById("submit2").style.display = "none"
}


