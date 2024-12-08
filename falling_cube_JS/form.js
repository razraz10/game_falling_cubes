// form.js

function saveUserInfo(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const user = {
        name,
        email
    };
    let storage = localStorage.getItem("users");
    const users = storage ? JSON.parse(storage) : {};
    users[name] = user;
    storage = JSON.stringify(users);
    localStorage.setItem("users", storage);

    // Redirect to the cubeGame.html page
    // window.location.href = "/pages/cubeGame.html";
}
