/* =========================================
   TOQUE INVENCÍVEL
   JAVASCRIPT PRINCIPAL
========================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });

}