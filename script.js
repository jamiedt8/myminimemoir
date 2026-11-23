const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");
const siteHeader = document.querySelector(".site-header");

// Mobile navigation opens and closes from the menu button.
if (menuToggle && mainNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mainNavigation.classList.toggle("is-open", !isOpen);
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      mainNavigation.classList.remove("is-open");
    });
  });
}

// Make the green navigation bar slightly more compact after the page starts scrolling.
function updateHeaderSize() {
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 35);
}
window.addEventListener("scroll", updateHeaderSize, { passive: true });
updateHeaderSize();

// Update the copyright year automatically.
const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
