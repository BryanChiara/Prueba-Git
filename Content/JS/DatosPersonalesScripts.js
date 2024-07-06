document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        $('#registroExitosoModal').modal('show');
    });

    // Manejador de eventos para el cierre del modal
    $('#registroExitosoModal').on('hidden.bs.modal', function (e) {
      // Redirige al usuario a Opciones.html
    window.location.href = "Opciones.html";
    });
});