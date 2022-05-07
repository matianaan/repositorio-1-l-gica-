// La funcion suma valida que los numeros de entrada no sean en blanco como tambien los convierte a numero
function resta(){
    var PNumero  = document.getElementById("PNumero").value;
    var SNumero =  document.getElementById("SNumero").value;
    var Resultado = parseFloat(PNumero) - parseFloat(SNumero);
    if (PNumero !== "" && SNumero !== "") {
        var lResultado = document.getElementById("Resultado");
        lResultado.innerHTML= Resultado;
    }
    else{
        alert("Se necesitan llenar los campos");
    } 
}
