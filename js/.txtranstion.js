document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("page-loaded");

    document.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function (event) {

            const url = new URL(link.href, window.location.href);

            if (
                url.origin !== window.location.origin ||
                url.pathname === window.location.pathname ||
                link.target === "_blank" ||
                link.hasAttribute("download") ||
                link.getAttribute("href").startsWith("#")
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-exit");

            setTimeout(function () {
                window.location.href = url.href;
            }, 500);

        });

    });

});