const currentYear = document.getElementById('year');
const revealItems = document.querySelectorAll('.reveal');
const testimonialTrack = document.querySelector('.testimonials__track');

currentYear.textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (testimonialTrack) {
  const testimonialCards = testimonialTrack.querySelectorAll('.testimonial-card');
  const totalSlides = testimonialCards.length;
  let currentSlide = 0;
  let slideInterval = null;

  const updateSlidePosition = () => {
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  };

  const startAutoplay = () => {
    if (slideInterval || totalSlides <= 1) return;
    slideInterval = window.setInterval(nextSlide, 3000);
  };

  const stopAutoplay = () => {
    if (!slideInterval) return;
    window.clearInterval(slideInterval);
    slideInterval = null;
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  updateSlidePosition();
  startAutoplay();
}
