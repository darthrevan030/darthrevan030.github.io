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
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    let lastScrollY = window.scrollY;

    const handleScroll = function () {
        const currentScrollY = window.scrollY; 

        if (currentScrollY > lastScrollY && currentScrollY > 100){
        // hide on scroll down
        nav.classList.add('hidden');
        } else {
        // show on scroll up
        nav.classList.remove('hidden');
        }
    
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', throttle(handleScroll, 100));
});