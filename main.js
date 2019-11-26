// attendere che l'HTML sia completamente caricato
$ (document).ready (function () {

    // cliccando su un menu item
    $ (".menu-item").click (function () {
        // se ho già il suo dropdown-menu aperto
        if ($ (this).children (".dropdown-menu").is(":visible")) {
            // lo chiudo
            $ (".dropdown-menu").slideUp (100);
        } else {
            // altrimenti chiudo gli altri eventualmente aperti e poi apro quello su cui ho cliccato
            $ (".dropdown-menu").slideUp (100);
            $ (this).children (".dropdown-menu").slideToggle (500);
        }
    });
});
