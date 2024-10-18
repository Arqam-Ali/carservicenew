

// Ninth Section Counter 
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.ninth-sec-innerwrap-txt2, .third-sec-inner-wrap2-head span');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateCount = (el) => {
        const countTo = parseInt(el.getAttribute('data-count'), 10);
        const duration = 2000; // duration in milliseconds
        const frameRate = 60; // frames per second
        const totalFrames = Math.round(duration / (1000 / frameRate));
        let currentFrame = 0;
        const increment = countTo / totalFrames;
        const suffix = el.innerHTML.includes('K') ? ' K' : el.innerHTML.includes('+') ? ' +' : '';

        const counter = setInterval(() => {
            currentFrame++;
            const progress = Math.round(increment * currentFrame);
            el.innerHTML = progress + suffix;
            if (currentFrame >= totalFrames) {
                clearInterval(counter);
                el.innerHTML = countTo + suffix;
            }
        }, 1000 / frameRate);
    };

    const handleScroll = () => {
        elements.forEach(el => {
            if (isElementInViewport(el) && !el.classList.contains('counted')) {
                el.classList.add('counted');
                animateCount(el);
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check in case elements are already in view
    handleScroll();
});
// Ninth Section counter end 

// Animition JS
var scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
};

var elementsToShow = document.querySelectorAll(".container-animition");

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("active");
        } else {
            element.classList.remove("active"); // Corrected class name
        }
    });

    scroll(loop);
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

loop(); // Initial call to set up the loop
window.addEventListener('scroll', loop); // Call on scroll
window.addEventListener('resize', loop); // Call on resize
