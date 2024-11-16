const passwordFeild = document.getElementById("password");
const toggleButton = document.getElementById("toggleIcon");

toggleButton.addEventListener("click", () => {
    if (passwordFeild.type === "password") {
        passwordFeild.type = "text";
        toggleButton.textContent = ("🙈");

    } else {
        passwordFeild.type = "password";
        toggleButton.textContent = "👁️";
    }
})