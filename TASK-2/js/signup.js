// Validate form input before submission
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous error messages
  document.getElementById("email-error").innerText = "";
  document.getElementById("password-error").innerText = "";
  document.getElementById("confirm-password-error").innerText = "";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  let valid = true;

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerText =
      "Please enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    document.getElementById("password-error").innerText =
      "Password must be at least 6 characters long.";
    valid = false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirm-password-error").innerText =
      "Passwords do not match.";
    valid = false;
  }

  // If everything is valid, submit the form (simulating here with a success message)
  if (valid) {
    alert("Sign up successful!");
    // Here you can redirect the user to the login page or homepage.
    // Example: window.location.href = 'login.html';
  }

  return valid;
}
