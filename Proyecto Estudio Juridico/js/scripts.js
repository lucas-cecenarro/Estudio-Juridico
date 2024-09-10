// Obtén el elemento del menú laboral y el menú desplegable
const laboralMenu = document.getElementById("laboral-menu");
const submenu = laboralMenu.querySelector("submenu");

// Agrega un evento de clic al elemento del menú laboral
laboralMenu.addEventListener("click", function () {
    // Toggle (mostrar/ocultar) el menú desplegable al hacer clic en "Laboral"
    if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
    } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
});


  