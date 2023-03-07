const verificar = (id) => {
    Swal.fire({
        title:"¿Seguro?",
        text:"Afectaras todo el pedido",
        icon:"question",
        showCancelButton: true,
        confirmButtonText:"Estoy seguro",
        cancelButtonColor:"#d33"
    }).then((result) => {
        if(result.value){
            pagar(id);
        }
    })
}

const pagar = async (id) => {
    let form = document.getElementById("formInfo");
    document.getElementById("estado").value = "2";
    document.getElementById("id").value = id;
    let data = new FormData(form)
    try {
        response = await fetch("../controllers/pagar.php",{
            method:"POST",
            body:data
        });
        Swal.fire({
            title:"La informacion se actualizo correctamente",
            icon:"success"
        });
        setTimeout(()=>{
            location.href = location.href
        },3000);
    } catch (error) {
        Swal.fire({
            title:"Ocurrio un error",
            icon:"error"
        });
    }
}

const verificar2 = (id) => {
    Swal.fire({
        title:"¿Seguro?",
        text:"Este cambio no se podra revertir",
        icon:"warning",
        showCancelButton: true,
        confirmButtonText:"Estoy seguro",
        cancelButtonColor:"#d33"
    }).then((result) => {
        if(result.value){
            cancelar(id)
        }
    })
}

const cancelar = async (id) => {
    let form = document.getElementById("formInfo");
    document.getElementById("estado").value = "3";
    document.getElementById("id").value = id;
    let data = new FormData(form)
    try {
        response = await fetch("../controllers/cancelar.php",{
            method:"POST",
            body:data
        });
        Swal.fire({
            title:"Pedido cancelado correctamente",
            icon:"success"
        });
        setTimeout(()=>{
            location.href = location.href
        },3000);
    }catch (error) {
        Swal.fire({
            title:"Ocurrio un error",
            icon:"error"
        });
    }
}