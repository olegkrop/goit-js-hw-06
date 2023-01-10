const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const loginEmail = event.currentTarget.elements.email.value;
    const loginPassword = event.currentTarget.elements.password.value;

    if (loginEmail === '' || loginPassword === '') {
        window.alert("Всі поля мають бути заповнені!");
    } else {
        const loginFormData = { loginEmail, loginPassword };
        console.log(loginFormData);
        loginForm.reset();
    };
});

