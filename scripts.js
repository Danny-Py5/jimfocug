const header = document.querySelector(".header");
const headerNav = header.querySelector(".header__nav");

const hamburger = header.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    if (this.classList.contains("show")) {
        this.classList.remove("show");
        this.classList.add("hide");
    } else {
        this.classList.remove("hide");
        this.classList.add("show");
        // headerNav.style.display = "none";
    }
});
// window.addEventListener("resize", function (e) {
//     if (e.target.outerWidth > 700) {
//     }
// });
