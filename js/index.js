document.querySelector("form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let errorContainer = document.querySelector(".error-container");
    let errorMessage = document.getElementById("error-message");
  
    if (password !== confirmPassword) {
      event.preventDefault(); 
      errorMessage.textContent = "Passwords do not match!";
      errorContainer.display = "block"; 
    }else{
      errorContainer.display = "none"; 
    }
  });
  
  