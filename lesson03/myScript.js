var bttn =document.getElementById("submitButton");

   
function showAlert() {
     var name = document.getElementById("fullName").value;
     alert("Привет, " + name + "!");
}

function showWelcomeMessage() {
     var name = document.getElementById("fullName").value;
     alert("Welcome, " + name + "!");
} 


bttn.addEventListener("click", showAlert);
//bttn.addEventListener("click", showWelcomeMessage);