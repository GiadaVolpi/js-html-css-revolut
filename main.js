/*$ (document).ready (function () {
    $ (".menu-item").click (function () {
        $ (this).children (".dropdown-menu").toggle ();
    })
});*/

$ (document).ready (function () {

    // cliccando su un menu item
    $ (".menu-item").click (function () {
        // se ho già un dropdown-menu visibile
        if ($ (this).children (".dropdown-menu").is(":visible")) {
            // lo nascondo
            $ (".dropdown-menu").slideUp (100);
        } else {
            $ (".dropdown-menu").slideUp (100);
            $ (this).children (".dropdown-menu").slideToggle (500);
        }
    });
});
