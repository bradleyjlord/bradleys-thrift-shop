document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

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
})

