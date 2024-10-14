let currentIndex = 0;
const images = document.querySelectorAll('.cover-image img');
const totalImages = images.length;
const coverImageContainer = document.querySelector('.cover-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlide(index) {
  coverImageContainer.style.transform = `translateX(-${index * 100 / totalImages}%)`;
}


let slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlide(currentIndex);
}, 7000);

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlide(currentIndex);
  resetInterval();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlide(currentIndex);
  resetInterval();
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide(currentIndex);
  }, 10000);
}
