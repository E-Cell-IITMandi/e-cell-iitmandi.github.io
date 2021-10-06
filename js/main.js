document.querySelector("#mobile-toggle-btn").addEventListener("click" , () => {
    console.log("Toggle");

    const headerMenu = document.querySelector("#header-menu");
    const mobileToggleIcon = document.querySelector("#mobile-toggle-icon");

    if (headerMenu.classList.contains("menu-show")) {
        mobileToggleIcon.classList.add("fa-bars");
        mobileToggleIcon.classList.remove("fa-times");
        headerMenu.classList.remove("menu-show");
    } else {
        mobileToggleIcon.classList.add("fa-times");
        mobileToggleIcon.classList.remove("fa-bars");
        headerMenu.classList.add("menu-show");
    }
});

$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop()+$(this).innerHeight();
        $("section").each(function () {
            var objectBottom = $(this).offset().top;
            if(objectBottom < windowBottom-200) {
                if($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            } else {
                if($(this).css("opacity") == 1) {
                    $(this).fadeTo(500, 0);
                }
            }
        });
    }).scroll();
});
