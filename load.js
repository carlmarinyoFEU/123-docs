document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll(".lazy-image");
    let lazyBackgrounds = document.querySelectorAll(".lazy-background");

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });

        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyBackground = entry.target;
                    lazyBackground.style.backgroundImage = 'url(' + lazyBackground.dataset.bg + ')';
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackground.style.backgroundImage = 'url(' + lazyBackground.dataset.bg + ')';
        });
    }
});