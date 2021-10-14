let registros = [];
let rescaptcha = 100;
let valor = document.getElementById('captcha').value;

function agregarRegistro(){
    let registro = document.getElementsByTagName("input");
        
    let datosUsuario = {
        'nombre' : registro[0].value,
        'apellido' : registro[1].value,
        'telefono' : registro[2].value,
        'correo' : registro[3].value,
        'password' : registro[4].value
    }
    registros.push(datosUsuario); 
    console.log(registros);
} 
function login(){
    const correo = document.getElementById("correo").value; 
    const contrasena = document.getElementById("contrasena").value;
    let email;
    let pass;
    if(email= registros.find(e => e.correo == correo)){

        if(pass = registros.find(e => e.contrasena == contrasena)){
          
            if(validarCAPTCHA(valor)){

            
            }         
        } 

    }
    
} 



function validarCAPTCHA(valor){
    valor = document.getElementById('captcha').value;
    valor=Number(valor);
    if(valor===rescaptcha){
      return true;
    } 
    return false;
  }

module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;
module.exports.validarCAPTCHA=validarCAPTCHA;
module.exports.login=login