// User Login Interface
document.getElementById('submit-button').addEventListener('click', function () {
    // Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'user@email.com' && userPassword == 'password') {
        window.location.href = 'second.html';
    }

});