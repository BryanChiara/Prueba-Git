document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        var dni = document.getElementById("dni").value;
        var errorMensaje = document.getElementById("error-dni");

        // Validación del DNI
        if (dni.length !== 8 || isNaN(dni)) {
            errorMensaje.textContent = "Debe contener exactamente 8 dígitos numéricos";
            errorMensaje.style.color = "#8b0000";
        } else {
            errorMensaje.textContent = ""; // Limpiar mensaje de error si la validación es exitosa
            window.location.href = "../Views/Opciones.html"; // Redirigir manualmente a la página Opciones.html
        }
    });
});
