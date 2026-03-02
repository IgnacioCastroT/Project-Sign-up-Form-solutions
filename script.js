const inputPassword = document.getElementById("password_confirm");
const mensaje = document.getElementById("resultMessage");
const boton = document.querySelector(".create");

inputPassword.addEventListener("blur", comprobarClave);

function comprobarClave() {
    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password_confirm").value;

    if (clave1 === clave2 && clave1 !== "") {
        mensaje.textContent = "Las contraseñas coinciden ✅";
        mensaje.style.color = "green";

        inputPassword.classList.remove("error");
        inputPassword.classList.add("ok");

        boton.disabled = false; // habilita botón
    } else {
        mensaje.textContent = "Las contraseñas no coinciden ❌";
        mensaje.style.color = "red";

        inputPassword.classList.remove("ok");
        inputPassword.classList.add("error");

        boton.disabled = true; // deshabilita botón
    }
}