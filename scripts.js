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

const submitPreload = document.querySelector(".submit-preload");
const modal = document.getElementById("myModal");
function sendEmail() {
    submitPreload.style.display = "block";
    const firstName =
        document.getElementById("first-name").value || "Anonymous ";
    const lastName = document.getElementById("last-name").value || "";
    const param = {
        name: firstName + lastName,
        email: document.getElementById("email").value,
        title: "Message from a client",
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_2dh578j", "template_hff8tol", param)
        .then(() => {
            submitPreload.style.display = "none";
            modal.showModal();
        })
        .catch((error) => {
            submitPreload.style.display = "none";
            alert("Email not sent");
        });
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("form").reset();
    document.getElementById("myModal").close();
});
