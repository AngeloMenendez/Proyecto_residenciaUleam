document.getElementById("accederBtn").addEventListener("click", function () {
    const codigoAcceso = document.getElementById("codigo").value;
    const mensaje = document.getElementById("mensaje");

    // Aquí debes implementar la lógica para verificar el código de acceso
    if (codigoAcceso === "12345") {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Acceso autorizado!";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Código de acceso incorrecto. Inténtalo de nuevo.";
    }
});
