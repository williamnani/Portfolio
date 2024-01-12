let currentSlide = 0

function changeSlide(n) {
  currentSlide = (currentSlide + n + 5) % 5 // 5 é o número total de slides

  const slidesList = document.querySelector(".slides-list")
  const slideWidth = document.querySelector(".slide").offsetWidth

  slidesList.style.transform = `translateX(${-currentSlide * slideWidth}px)`

  const slideControllers = document.querySelectorAll(".slide-controller")
  slideControllers.forEach((controller, index) => {
    controller.checked = index === currentSlide
  })
}
