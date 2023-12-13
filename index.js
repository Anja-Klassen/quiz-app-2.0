const bookmarkButton = document.querySelector('[data-js="bookmark-icon"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
