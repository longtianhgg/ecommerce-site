const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const cartCount = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".add-cart");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

let cartItems = Number(cartCount?.textContent || 0);

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    if (cartCount) {
      cartCount.textContent = String(cartItems);
    }
    button.textContent = "已加入";
    button.disabled = true;
  });
});
