// smart nav bar: hide on scroll down, show on scroll up
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollY = window.scrollY;
    const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', function () {
        if (!nav) return; // safety check

        if (window.scrollY < lastScrollY) {
        // scrolling up
        nav.style.top = '0';
        } else {
        // scrolling down
        nav.style.top = '-100px';
        }

        lastScrollY = window.scrollY;
    });
});
