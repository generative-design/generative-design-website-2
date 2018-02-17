var slides = document.querySelectorAll('.slides .slide');
slides[0].classList.add('slide--visible');
if (slides.length > 1) {
    var currentSlideIndex = 0;
    var slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[currentSlideIndex].classList.remove('slide--visible');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('slide--visible');
    }
}
