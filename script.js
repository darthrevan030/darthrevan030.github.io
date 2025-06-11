function throttle(func, limit) {
    let inThrottle;
    return function () {
        if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollY = window.scrollY;
    const nav = document.getElementById('mainNav');

    const handleScroll = function () {
        if (!nav) return;

        if (window.scrollY < lastScrollY) {
            nav.style.top = '0';
            } else {
            nav.style.top = '-100px';
            }

        lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', throttle(handleScroll, 1000));
});
