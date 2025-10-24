// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById('menu-btn');
const sheet = document.getElementById('sheet');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sheet.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sheet.classList.remove('open');
});

// Close sheet when clicking on menu links
document.querySelectorAll('.sheet-content a').forEach(link => {
  link.addEventListener('click', () => {
    sheet.classList.remove('open');
  });
});



const testimonials = [
  {
    image: "assets/women1.jpg",
    quote:
      '"Lorem ipsum dolor sit amet consectetur. Vulputate amet urna amet semper sed vitae molestie varius leo."',
    author: "Gertrud Maltz–Schwarzfischer, Oberbürgermeisterin",
  },
  {
    image: "assets/women2.jpg",
    quote:
      '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."',
    author: "Max Müller, Bürgermeister",
  },
  {
    image: "assets/women3.png",
    quote:
      '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."',
    author: "Anna Schmidt, Stadträtin",
  },
];

let index = 0;

const imageEl = document.getElementById("desktopImage");
const quoteEl = document.getElementById("desktopQuote");
const authorEl = document.getElementById("desktopAuthor");
const counterEl = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateTestimonial() {
  const t = testimonials[index];
  imageEl.src = t.image;
  quoteEl.textContent = t.quote;
  authorEl.textContent = t.author;
  counterEl.textContent = `${index + 1} / ${testimonials.length}`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
});

updateTestimonial();



