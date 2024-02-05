const btnMenu = document.getElementById("btnMenu");
const navBar = document.getElementById("navBar");
const anchorElements = document.querySelectorAll(".navbar-anchor");
const menuIconDiv1 = document.getElementById("menu-icon-div1");
const menuIconDiv2 = document.getElementById("menu-icon-div2");
const menuIconDiv3 = document.getElementById("menu-icon-div3");
const sections = document.querySelectorAll(".section");

// OBSERVER PARA QUE LAS SECTIONS SE DIFUMINEN AL ENTRAR O SALIR DEL VIEWPORT
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show-section", entry.isIntersecting);
        });
    },
    {
        threshold: 0.2,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

btnMenu.addEventListener("click", () => {
    navBar.classList.toggle("navbar-hidden");
    navBar.classList.toggle("navbar-visible");
    menuIconDiv1.classList.toggle("menu-click-style1");
    menuIconDiv2.classList.toggle("menu-click-style2");
    menuIconDiv3.classList.toggle("menu-click-style3");
});

anchorElements.forEach((el) => {
    el.addEventListener("click", () => {
        navBar.classList.toggle("navbar-hidden");
        navBar.classList.toggle("navbar-visible");
        menuIconDiv1.classList.toggle("menu-click-style1");
        menuIconDiv2.classList.toggle("menu-click-style2");
        menuIconDiv3.classList.toggle("menu-click-style3");
    });
});
