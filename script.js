// Get references to form elements
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

// Add event listener to the form for the submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  let error = [];

  // Check if the name field exists (indicating a signup form)
  if (name) {
    error = getSignupFormError(
      name.value,
      email.value,
      password.value,
      confirm_password.value
    );
  } else {
    // If the name field doesn't exist, it's a login form
    error = getLoginFormError(email.value, password.value);
  }

  // If there are any errors, display them
  if (error.length > 0) {
    event.preventDefault(); // Prevent form submission if there are errors
    errorMessage.innerText = error.join("."); // Display error messages
  }
});

// Function to validate signup form fields
function getSignupFormError(name, email, password, confirm_password) {
  let error = [];

  // Check if the name field is empty
  if (name === "" || name == null) {
    error.push("Name is Required");
    name.parentElement.classList.add("incorrect");
  }

  // Check if the email field is empty
  if (email === "" || email == null) {
    error.push("Email is Required");
    email.parentElement.classList.add("incorrect");
  }

  // Check if the password field is empty
  if (password === "" || password == null) {
    error.push("Password is Required");
    password.parentElement.classList.add("incorrect");
  }

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    error.push("Password must contain at least 8 characters");
  }

  // Check if the password and confirm password fields match
  if (password !== confirm_password) {
    error.push("Password does not match");
    password.parentElement.classList.add("incorrect");
    confirm_password.parentElement.classList.add("incorrect");
  }

  return error;
}   

// Get references to all input fields
const allInput = [name, email, password, confirm_password];

// Add event listeners to input fields to remove error styles on input
allInput.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMessage.innerText = ""; // Clear error message
    }
  });
});
