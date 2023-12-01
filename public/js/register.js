// register.js


$(document).ready(function () {
  $("#loginPageBtn").click(function () {
      window.location.href = "/";
  });
});

function submitForm() {
  showSuccessMessage();
  setTimeout(function () {
      window.location.href = "/"; 
  }, 1000);
}

function showSuccessMessage() {
  var messageElement = document.createElement("div");
  messageElement.className = "success-message";
  messageElement.innerHTML = "Account successfully created! Redirecting to login page...";

  document.body.appendChild(messageElement);
}