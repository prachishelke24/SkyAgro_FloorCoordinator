// script.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const loginButton = document.querySelector("#loginButton");

  loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic input validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    // Simulated login check (replace with real backend check later)
    if (username === "admin@email.com" && password === "admin123") {
      
      // Redirect to second page
      window.location.href = "floor_coordinatorwebapp.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
