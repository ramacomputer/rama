console.log("Header Loaded Successfully!");

// Custom JS (optional, for extra control if needed)
const carouselElement = document.querySelector('#collegeCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // 3 seconds auto slide
    ride: 'carousel'
});






const zoomImages = document.querySelectorAll('.zoom-img');
const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
zoomImages.forEach(img => {
  imgObserver.observe(img);
});

const counters = document.querySelectorAll('.counter');
function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = target / (duration / stepTime);
    const update = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(update);
      } else {
        counter.innerText = Math.floor(count);
      }
    }, stepTime);
  });
}
const counterSection = document.querySelector('.counters');
const counterObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    runCounters();
    counterObserver.disconnect();
  }
}, { threshold: 0.4 });
counterObserver.observe(counterSection);
console.log("Footer Loaded Successfully!");




// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }





//footer section//
 const topBtn = document.getElementById("topBtn");
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });


