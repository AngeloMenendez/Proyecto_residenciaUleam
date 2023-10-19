document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var cedula = document.getElementById("cedula").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var institucion = document.getElementById("institucion").value;
    var numeroresi = document.getElementById("numeroresi").value;
    // Crear una nueva fila en la tabla con los datos del cliente
    var table = document.getElementById("clientesTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = nombre;
    cell2.innerHTML = fecha;
    cell3.innerHTML = cedula;
    cell4.innerHTML = email;
    cell5.innerHTML = telefono;
    cell6.innerHTML = institucion;
    cell7.innerHTML = numeroresi;

    // Limpiar el formulario después de enviar los datos
    document.getElementById("clienteForm").reset();
});