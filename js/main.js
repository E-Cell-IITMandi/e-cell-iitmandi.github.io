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