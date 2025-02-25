const inputText = document.getElementById("review-input");
const submitBtn = document.getElementById("submit-btn");
const reviewList = document.getElementById("review-list");

const addReview = () => {
  const review = inputText.value;

  if (review === "") {
    alert("Please enter a valid review");
    return;
  }

  const reviewItem = document.createElement("li");
  reviewItem.innerText = review;

  reviewList.appendChild(reviewItem);
  inputText.value = "";
};

submitBtn.addEventListener("click", addReview);
