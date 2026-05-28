
console.log("GSAP Loaded:", gsap.version);
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Turant move karne wala dot
    gsap.set(cursorDot, { x: posX, y: posY });

    // Halka sa piche follow karne wala outline (Smooth effect)
    gsap.to(cursorOutline, {
        x: posX,
        y: posY,
        duration: 0.5,
        ease: "power3.out"
    });
});

// Interactivity: Buttons aur Links par bada hone wala effect
const interactables = document.querySelectorAll("a, button, .project-card, .img-container");

interactables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("cursor-hover");
        gsap.to(cursorDot, { scale: 0 }); // Dot hide ho jayega
    });

    el.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("cursor-hover");
        gsap.to(cursorDot, { scale: 1 }); // Dot wapas aa jayega
    });
});





var typed = new Typed('.auto-type', {
        
        strings: ['Akash Singh', 'A Web Designer', 'thank you'],
        typeSpeed: 130,
        backSpeed: 130,
        loop: true,
      });