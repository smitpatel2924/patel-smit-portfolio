document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", function () {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.classList.remove("d-none");
    form.reset();
  });

  document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      const navbar = document.getElementById("navbarNav");
      if (navbar.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbar).hide();
      }
    });
  });
});
