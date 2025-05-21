// Validate form input before submission
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous error messages
  document.getElementById("email-error").innerText = "";
  document.getElementById("password-error").innerText = "";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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

  // If everything is valid, submit the form (simulating here with a success message)
  if (valid) {
    alert("Login successful!");
    // Here you can redirect the user to the homepage or a dashboard.
    // Example: window.location.href = 'home.html';
  }

  return valid;
}
