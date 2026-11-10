function validateLogin() {
    let p = document.getElementById("password").value;

    if (p.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Login successful!");
    return true;
}

function validateRegister() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("regpassword").value;

    if (u.length < 3) {
        alert("Username must have 3 characters");
        return false;
    }

    if (p.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Registration successful!");
    return true;
}