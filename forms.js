const submit = document.getElementById("btn-submit-form");
const contrasena = document.getElementById("contrasena");
const email = document.getElementById("email");
//se crea un evento de botón desde donde se va a envíar el email
submit.addEventListener('click', validacion);
//esta es la función en el botón que va a verificar los datos en el formulario. Es acá adentro donde debería ponerse la función que verifique cada campo específico
//dentro de un if
function validacion(e){
    e.preventDefault();

    if(checkCorreo(email)){//acá se llama la función checkCorreo que valida el campo del correo
    }

    if(checkContrasena(contrasena)){//acá se llama la función checkContrasena que valida el campo de la contraseña

    }
    //si pasa todas las validaciones devuelve true
    return true
  
}
//acá se crean las funciones específicas para cada campo
function checkCorreo(valor){
    var formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(valor.value.match(formatoEmail)){
    return true;
    }
    else{
        alert("Email inválido");
        return false;
    }
}
function checkContrasena(valor){
    let password = valor;    
    let regExp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;   
    if (regExp.test(password)){
        return true;
    }
    else{
        alert("Verifique su contraseña");
        return false;
    }
}
//acá va la exportación para usar las funciones desde otras aplicaciones
module.exports ={checkContrasena};
module.exports={checkCorreo}