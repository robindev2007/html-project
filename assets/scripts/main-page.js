const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
let timer;

function showSlide(i) {
  slides.forEach((s, j) => {
    s.classList.toggle("active", j === i);
    dots[j].classList.toggle("active", j === i);
  });
  index = i;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetTimer();
  });
});

function autoSlide() {
  timer = setInterval(nextSlide, 4000);
}

function resetTimer() {
  clearInterval(timer);
  autoSlide();
}

autoSlide();
