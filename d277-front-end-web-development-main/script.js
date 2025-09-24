document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
      alert("Email addresses do not match. Please re-enter.");
      event.preventDefault(); // Stop form submission
    }
  });
});