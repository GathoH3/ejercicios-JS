function mostrarDatosEmpleado() {

    var nombreEmpleado = document.getElementById("nombre").value;
    var sueldo = parseInt(document.getElementById("sueldo").value);

    document.getElementById("datosEmpleado").innerHTML = "Nombre: " + nombreEmpleado + "<br>Sueldo: $" + sueldo;
}
/* ejercicio Realizado con ayuda Herramiento Chatgpt */