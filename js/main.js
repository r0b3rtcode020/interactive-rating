const ratingState = document.getElementById("rating-state");
const thankState = document.getElementById("thanks-state");
const selectedRating = document.querySelector(".selected-rating");
const ratingForm = document.getElementById("rating-form");
const submitBtn = document.querySelector(".rating-submit");
const ratingInputs = document.querySelectorAll("input[name='rating']");

ratingInputs.forEach(input => {
  input.addEventListener("change", () => {
    submitBtn.setAttribute("aria-disabled", false);
  });
});

ratingForm.addEventListener("submit", e => {
  e.preventDefault();

  if (submitBtn.getAttribute("aria-disabled") === "true") return;

  const formData = new FormData(ratingForm);
  const ratingValue = formData.get("rating");

  if (!ratingValue) return;

  selectedRating.textContent = ratingValue;
  ratingState.hidden = true;
  thankState.hidden = false;
});
