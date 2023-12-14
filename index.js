const bookmarkButton = document.querySelector('[data-js="bookmark-icon"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__hidden");

  if (answerButton.textContent === "Hide answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});
