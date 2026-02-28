
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Sticky Navbar ---------- */
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ---------- Mobile Menu Toggle ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  /* ---------- Smooth Scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ---------- Fade-In on Scroll (Intersection Observer) ---------- */
  const fadeElements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  /* ---------- Contact Form Validation ---------- */
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.style.display = "none";

    // Name validation
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    // Email validation
    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    }

    // Message validation
    if (!messageInput.value.trim()) {
      messageError.textContent = "Message is required.";
      valid = false;
    }

    // If valid, show success and reset
    if (valid) {
      successMsg.style.display = "block";
      form.reset();
    }
  });
});
