function checkContraseña(valor){
    debugger;
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
module.exports ={checkContraseña};