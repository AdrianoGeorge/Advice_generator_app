// Variables
const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");

// Run the showQuote function when the page is loaded
window.onload = showQuote;

// Eventlistener for dice button
dice.addEventListener("click", function () {
  showQuote();
  // console.log("Clicked");
});

// showQuote function to show random quote from API
function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNum.textContent = data.id;
      adviceText.textContent = data.advice;
      console.log(
        "Why i need to click twice or more? in order to get a new quote"
      );
      console.log("Quote: " + data.advice);
    })
    .catch((error) => {
      console.log(`Error ${error}`);
    });
}
