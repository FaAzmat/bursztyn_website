const handleMobileMenuButton = (() => {
  const button = document.querySelector(".menu-button");

  button.addEventListener("click", () => {
    document.body.classList.toggle("show-menu");
  });
})();
