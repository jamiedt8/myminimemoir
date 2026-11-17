// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");

if (menuToggle && mainNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mainNavigation.classList.toggle("is-open", !isOpen);
  });

  // Close the mobile menu after a navigation link is selected.
  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      mainNavigation.classList.remove("is-open");
    });
  });
}

// Update the copyright year automatically.
const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reveal sections as they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
