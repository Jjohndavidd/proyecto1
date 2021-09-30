
var arrayGlobal= []

    var agregarRegistro = () => { // creacion de las variables
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var telefono = document.getElementById("telefono").value;   
        var email = document.getElementById("email").value;
        var contrasena= document.getElementById("contrasena").value;
    
    var arrayRegistro=[];

        var checkRegistrarNombre = checkNombre(nombre);
        var checkRegistrarApellido = checkApellido(apellido);
        var checkRegistrarTelefono = checkTelefono(telefono);
        var checkRegistrarEmail = checkEmail(email);
        var checkRegistrarContrasena = checkContrasena(contrasena);
        
    if (
        checkRegistrarNombre &&
        checkRegistrarApellido &&
        checkRegistrarTelefono &&
        checkRegistrarEmail &&
        checkRegistrarContrasena
    ) { 
        
         arrayRegistro.push= (nombre, apellido, telefono, email, contrasena);
        //console.log(arrayRegistro);
        arrayGlobal.push (arrayRegistro);
        //console.log(arrayForm);
       
    }  else {
        console.log("Error en el Formulario");
        if (!checkRegistrarNombre) {
            console.log("Error en el nombre");
        }
        if (!checkRegistrarApellido) {
            console.log("Error en el apellido");
        }
        if (!checkRegistrarTelefono) {
            console.log("Error en el telefono");
        }
        if (!checkRegistrarEmail) {
            console.log("Error en el email");
        }
        if (!checkRegistrarContrasena) {
            console.log("Error en el contraseña");
        }
    }


}
function agregarRegistro(){
    console.log(arrayGlobal);

}


module.exports.agregarRegistro=agregarRegistro; 
