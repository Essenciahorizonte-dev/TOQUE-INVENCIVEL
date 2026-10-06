/* =========================================
   TOQUE INVENCÍVEL
   JAVASCRIPT PRINCIPAL
========================================= */

const CART_KEY = "toqueInvencivelCart";


/* =========================================
   MENU MOBILE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const menuButton =
            document.getElementById("menuButton");

        const mainNav =
            document.getElementById("mainNav");


        if (
            menuButton &&
            mainNav
        ) {

            menuButton.addEventListener(
                "click",
                function () {

                    mainNav.classList.toggle("open");

                }
            );

        }

    }
);


/* =========================================
   LER CARRINHO
========================================= */

function getToqueInvencivelCart() {

    try {

        const savedCart =
            localStorage.getItem(
                CART_KEY
            );


        const cart =
            JSON.parse(
                savedCart || "[]"
            );


        return Array.isArray(cart)
            ? cart
            : [];

    } catch (error) {

        console.error(
            "Erro ao ler o carrinho:",
            error
        );


        return [];

    }

}


/* =========================================
   CONTADOR GLOBAL DO CARRINHO
========================================= */

function updateToqueInvencivelCartCount() {

    const cart =
        getToqueInvencivelCart();


    const count =
        cart.reduce(
            function (
                total,
                item
            ) {

                return (
                    total +
                    Number(
                        item.quantity || 0
                    )
                );

            },
            0
        );



    /*
     * Aceita tanto:
     *
     * id="cartCount"
     *
     * como:
     *
     * class="cart-count"
     *
     * Assim todas as páginas podem
     * utilizar o mesmo contador.
     */

    const cartCounters =
        document.querySelectorAll(
            "#cartCount, .cart-count"
        );


    cartCounters.forEach(
        function (counter) {

            counter.textContent =
                count;

        }
    );

}


/* =========================================
   ATUALIZAR AO ABRIR QUALQUER PÁGINA
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateToqueInvencivelCartCount();

    }
);


/* =========================================
   ATUALIZAR QUANDO O STORAGE MUDA
========================================= */

window.addEventListener(
    "storage",
    function () {

        updateToqueInvencivelCartCount();

    }
);