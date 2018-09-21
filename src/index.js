const form = document.querySelector("form");
const submitBtn = form.querySelector("input[type=submit]");
const errorMessage = document.querySelector(".error-message");
const errorBox = document.querySelector(".error-box-container");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

// Suppress default validation bubbles from username and password fields
form.addEventListener(
  "invalid",
  function(event) {
    event.preventDefault();
  },
  true
);

// Support Safari, iOS Safari, and Android browser
form.addEventListener("submit", function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
  }
});

// Make error message visible if password is not the required length
submitBtn.addEventListener("click", function(event) {
  if (!form.checkValidity()) {
    if (!username.value) {
      errorMessage.innerHTML = "<p>please enter a username</p>";
    }
    if (
      username.value &&
      (password.value.length < 6 || password.value.length > 24)
    ) {
      errorMessage.innerHTML =
        "<p>password must be between 8 and 24 characters</p>";
    }
    errorBox.classList.add("active");
  }
});

username.addEventListener("click", function(event) {
  submitBtn.value = "lskdslkn";
});
