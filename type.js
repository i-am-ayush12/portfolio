document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector(".nav-list");

    // Toggle navigation menu when hamburger is clicked
    // hamburger.addEventListener("click", () => {
    //     // navList.classList.toggle("active");
    // });

    // Optional: Add smooth transition effect for hover on nav links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'all 0.3s ease-out';
        });

        link.addEventListener('mouseout', () => {
            link.style.transition = 'all 0.3s ease-in';
        });
    });
});
// attached//
