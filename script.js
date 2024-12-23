const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

window.addEventListener('load', () => {
    if (password.value != confirmPassword.value || password.value == '' || confirmPassword.value == '') {
        showError();
    }
})

password.addEventListener('input', () => {
    if (password.value != confirmPassword.value) {
        showError();
    } else {
        passwordError.textContent = '';
        password.className = '';
        confirmPassword.className = '';
    }
});

confirmPassword.addEventListener('input', () => {
    if (password.value != confirmPassword.value) {
        showError();
    } else {
        passwordError.textContent = '';
        password.className = '';
        confirmPassword.className = '';
    }
});

function showError() {
    passwordError.textContent = '* Passwords do not match.';
    password.className = 'invalid';
    confirmPassword.className = 'invalid';
}

form.addEventListener('submit', (event) => {
    if (password.value != confirmPassword.value) {
        event.preventDefault();
    }
})