// ================= SCROLL REVEAL =================

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ================= MOBILE NAV TOGGLE =================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// ================= EDUCATION TIMELINE ANIMATION =================

const timeline = document.querySelector(".timeline");
const timelineItems = document.querySelectorAll(".timeline-item");

function animateTimeline() {

    if (!timeline) return; // prevent error on other pages

    const triggerPoint = window.innerHeight * 0.8;
    const timelineTop = timeline.getBoundingClientRect().top;

    if (timelineTop < triggerPoint) {

        timeline.classList.add("active");

        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("active");
            }, index * 300);
        });

    }
}

window.addEventListener("scroll", animateTimeline);
animateTimeline();