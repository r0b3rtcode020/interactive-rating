const ratingState = document.getElementById("rating-state");
const thankState = document.getElementById("thanks-state");
const selectedRating = document.querySelector(".selected-rating");
const ratingForm = document.getElementById("rating-form");
const ratingGroup = document.querySelector(".rating-group");
const submitBtn = document.querySelector(".rating-submit");
const ratingInputs = document.querySelectorAll("input[name='rating']");

ratingInputs.forEach(input => {
  input.addEventListener("change", () => {
    submitBtn.setAttribute("aria-disabled", false);
  });
});

ratingForm.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(ratingForm);
  const ratingValue = formData.get("rating");

  if (!ratingValue) {
    ratingGroup.classList.remove("shake");
    void ratingGroup.offsetWidth;
    ratingGroup.classList.add("shake");

    ratingGroup.addEventListener(
      "animationend",
      () => {
        ratingGroup.classList.remove("shake");
      },
      { once: true },
    );

    return;
  }

  selectedRating.textContent = ratingValue;
  ratingState.hidden = true;
  thankState.hidden = false;
});
