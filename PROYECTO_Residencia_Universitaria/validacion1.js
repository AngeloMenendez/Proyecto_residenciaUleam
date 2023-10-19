function validarFormulario() {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("contrasena").value;
    const mensajeValidacion = document.getElementById("mensajeValidacion");


    if (usuario === "Angelo_Menendez" && password === "12345") {
        mensajeValidacion.style.color = "green";
        mensajeValidacion.textContent = "¡Inicio de sesión exitoso!";
        mensajeValidacion.style.display = "block";
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    } else {
        mensajeValidacion.style.color = "red";
        mensajeValidacion.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
        mensajeValidacion.style.display = "block";
    }
    return false; 
}

