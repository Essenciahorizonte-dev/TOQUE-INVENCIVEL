/* =========================================
   TOQUE INVENCÍVEL
   JAVASCRIPT PRINCIPAL
========================================= */

const CART_KEY = "toqueInvencivelCart";


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });

}


/* =========================================
   CONTADOR GLOBAL DO CARRINHO
========================================= */

function getToqueInvencivelCart() {

    try {

        const cart =
            JSON.parse(
                localStorage.getItem(CART_KEY) || "[]"
            );

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        console.error(
            "Erro ao ler o carrinho:",
            error
        );

        return [];

    }

}


function updateToqueInvencivelCartCount() {

    const cart =
        getToqueInvencivelCart();

    const count =
        cart.reduce(
            (total, item) => {

                return total +
                    Number(item.quantity || 0);

            },
            0
        );


    const cartCounters =
        document.querySelectorAll("#cartCount");


    cartCounters.forEach((counter) => {

        counter.textContent = count;

    });

}


/* Atualizar quando a página abre */

document.addEventListener(
    "DOMContentLoaded",
    updateToqueInvencivelCartCount
);


/* Atualizar quando o carrinho muda */

window.addEventListener(
    "storage",
    updateToqueInvencivelCartCount
);