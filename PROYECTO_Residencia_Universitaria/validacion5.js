document.getElementById("buscarBtn").addEventListener("click", function () {
    const numeroCuarto = document.getElementById("numeroCuarto").value;
    const resultado = document.getElementById("resultado");

    // Aquí debes implementar la lógica para buscar la información del residente
    // Puedes utilizar AJAX para buscar en una base de datos o una API.

    // Ejemplo: Si el residente con número de cuarto 101 existe, muestra su información.
    if (numeroCuarto === "5") {
        resultado.style.color = "green";
        resultado.innerHTML = "<p>Información del Residente:</p>" +
            "<ul>" +
            "<li><strong>Nombre:</strong> Angelo Menendez Vega</li>" +
            "<li><strong>Fecha de Nacimiento:</strong> 12/02/2003</li>" +
            "<li><strong>Cédula:</strong> 1314533496</li>" +
            "<li><strong>Correo Electrónico:</strong> angelo@gmail.com.com</li>" +
            "<li><strong>Número de Teléfono:</strong> 0999525562</li>" +
            "<li><strong>Institución:</strong> ULEAM</li>" +
            "</ul>";
    } else {
        resultado.style.color = "red";
        resultado.textContent = "Residente no encontrado. Verifica el número de cuarto e inténtalo de nuevo.";
    }
});    
