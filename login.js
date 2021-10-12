let registros = [];
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

module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;