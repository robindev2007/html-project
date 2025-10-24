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
