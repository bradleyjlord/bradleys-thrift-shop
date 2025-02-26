document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")
  const coverImageContainer = document.querySelector(".cover-image")
  const prevButton = document.querySelector(".prev")
  const nextButton = document.querySelector(".next")

  let currentIndex = 0
  const totalImages = document.querySelectorAll(".cover-image img").length
  let slideInterval

  function toggleNav() {
    nav.classList.toggle("active")
    burger.classList.toggle("active")
    document.body.classList.toggle("nav-open")
  }

  function closeNav() {
    nav.classList.remove("active")
    burger.classList.remove("active")
    document.body.classList.remove("nav-open")
  }

  burger.addEventListener("click", toggleNav)

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav)
  })

  function updateSlide(index) {
    coverImageContainer.style.transform = `translateX(-${(index * 100) / totalImages}%)`
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages
    updateSlide(currentIndex)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages
    updateSlide(currentIndex)
  }

  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 7000)
  }

  function resetInterval() {
    clearInterval(slideInterval)
    startSlideInterval()
  }

  nextButton.addEventListener("click", () => {
    nextSlide()
    resetInterval()
  })

  prevButton.addEventListener("click", () => {
    prevSlide()
    resetInterval()
  })

  startSlideInterval()
})

