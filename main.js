$ (document).ready (function () {
    $ (".menu-item").click (function () {
        $ (this).children (".dropdown-menu").toggle ();
    });
});
