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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slideUp");
        } else {
            entry.target.classList.remove("slideUp");
        }
    });
});

document.querySelectorAll(".service__card").forEach((card) => {
    observer.observe(card);
});

function sendEmail() {}
