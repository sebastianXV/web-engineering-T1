function validateForm(event) {

    event.preventDefault(); // Detener el comportamiento predeterminado de envío del formulario

    var nameInput = document.querySelector('input[name="name"]');
    var priceInput = document.querySelector('input[name="price"]');
    var name = nameInput.value.trim();
    var price = priceInput.value.trim();

    var nameError = document.getElementById('name-error');
    var priceError = document.getElementById('price-error');

    // Limpiar mensajes de error anteriores
    nameError.textContent = '';
    priceError.textContent = '';

    var isValid = true;

    if (name === '') {
        nameError.textContent = 'Por favor, ingresa un nombre.';
        isValid = false;
    }

    if (price === '') {
        priceError.textContent = 'Por favor, ingresa un precio.';
        isValid = false;
    }

    // Validación adicional si es necesario
    // ...

    if (isValid) {

        var successMessage = document.getElementById('success-message');
        successMessage.textContent = 'El formulario se ha enviado correctamente.';

        // Restablecer valores del formulario
        nameInput.value = '';
        priceInput.value = '';
    }
}