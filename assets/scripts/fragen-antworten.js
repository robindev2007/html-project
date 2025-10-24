document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    // Skip toggle for the always-open item
    if (button.classList.contains("disabled")) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all items first
      faqItems.forEach((i) => {
        if (!i.querySelector(".faq-question").classList.contains("disabled")) {
          i.classList.remove("open");
          i.querySelector(".icon").textContent = "+";
        }
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add("open");
        button.querySelector(".icon").textContent = "−";
      }
    });
  });
});


const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Close other open items
    accordions.forEach((other) => {
      if (other !== btn) {
        other.classList.remove("active");
        other.nextElementSibling.classList.remove("show");
      }
    });

    // Toggle current item
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
  });
});
