const submit = document.getElementById("btn-submit-form");
const contrasena = document.getElementById("contrasena");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");


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
    if(checkTelefono(telefono)){//acá se llama la función checkTelefono que valida el campo del telefono
    }
    if (checkNombre(nombre)){// Aca se llama la funcion checkNombre que valida el campo contraseña

    }
    if (checkApellido(apellido)){//Aca se llama la funcion checkApellido que valida el campo contraseña

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
        
    var formatoContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;   
    if(valor.value.match(formatoContraseña)){
        return true;
    }
    else{
        alert("Contraseña Inválida");
        return false;
    }
}
 
function checkTelefono(valor){      
    var formatoTelefono= /^\d{7}$/;   
    if(valor.value.match(formatoTelefono)){
        return true;
    }
    else{
        alert("Tel inválido");
        return false;
    }
}
function  checkNombre(valor){      
    var formatoNombre= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{4,30}$/ ; 

    if(valor.value.match(formatoNombre)){
        return true;
    }
    else{
        alert("Nombre inválido");
        return false;
    }
}    
function  checkApellido(valor){      
    var formatoApellido= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{4,30}$/ ;
    
    if(valor.value.match(formatoApellido)){
        return true;
    }
    else{
        alert("Apellido inválido");
        return false;
    } 

} 
//acá va la exportación para usar las funciones desde otras aplicaciones
module.exports ={checkContrasena};
module.exports={checkCorreo};
module.exports={checkTelefono};
module.exports ={checkNombre};
module.exports ={checkApellido};