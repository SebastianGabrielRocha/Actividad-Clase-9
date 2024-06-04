
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('fullName').addEventListener('input', updateGreeting);

function updateGreeting() {
    const fullName = document.getElementById('fullName').value;
    document.querySelector('h1').textContent = 'HOLA ' + fullName.toUpperCase();
}

function validateForm() {
    let valid = true;

    const fullName = document.getElementById('fullName').value;
    if (fullName.length <= 6 || !fullName.includes(' ')) {
        valid = false;
        document.getElementById('errorFullName').textContent = 'Debe tener más de 6 letras y al menos un espacio.';
    } else {
        document.getElementById('errorFullName').textContent = '';
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('errorEmail').textContent = 'Debe tener un formato de email válido.';
    } else {
        document.getElementById('errorEmail').textContent = '';
    }

    const password = document.getElementById('password').value;
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        valid = false;
        document.getElementById('errorPassword').textContent = 'Al menos 8 caracteres, formados por letras y números.';
    } else {
        document.getElementById('errorPassword').textContent = '';
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('errorConfirmPassword').textContent = 'Ambas contraseñas deben ser iguales.';
    } else {
        document.getElementById('errorConfirmPassword').textContent = '';
    }

    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18) {
        valid = false;
        document.getElementById('errorAge').textContent = 'Número entero mayor o igual a 18.';
    } else {
        document.getElementById('errorAge').textContent = '';
    }

    const phone = document.getElementById('phone').value;
    if (phone.length < 7 || /\D/.test(phone)) {
        valid = false;
        document.getElementById('errorPhone').textContent = 'Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.';
    } else {
        document.getElementById('errorPhone').textContent = '';
    }

    const address = document.getElementById('address').value;
    if (address.length < 5 || !/\s/.test(address)) {
        valid = false;
        document.getElementById('errorAddress').textContent = 'Al menos 5 caracteres, con letras, números y un espacio en el medio.';
    } else {
        document.getElementById('errorAddress').textContent = '';
    }

    const city = document.getElementById('city').value;
    if (city.length < 3) {
        valid = false;
        document.getElementById('errorCity').textContent = 'Al menos 3 caracteres.';
    } else {
        document.getElementById('errorCity').textContent = '';
    }

    const postalCode = document.getElementById('postalCode').value;
    if (postalCode.length < 3) {
        valid = false;
        document.getElementById('errorPostalCode').textContent = 'Al menos 3 caracteres.';
    } else {
        document.getElementById('errorPostalCode').textContent = '';
    }

    const dni = document.getElementById('dni').value;
    if (!/^\d{7,8}$/.test(dni)) {
        valid = false;
        document.getElementById('errorDni').textContent = 'Número de 7 u 8 dígitos.';
    } else {
        document.getElementById('errorDni').textContent = '';
    }

    if (valid) {
        alert('Formulario enviado correctamente.');
    } else {
        alert('Hay errores en el formulario.');
    }
}
