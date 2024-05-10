function ingresarDatos() {

    let nombreUsuario = prompt('Ingrese el nombre de usuario:');
    let emailUsuario = prompt('Ingrese el correo electrónico:');

    document.getElementById("datosUsuario").innerHTML = "<p>Nombre de usuario: " + nombreUsuario + "</p>" +
                                                         "<p>Correo electrónico: " + emailUsuario + "</p>";
}
