//step 1

// Create a button element
const button = document.createElement("button");

// Add styles to the button
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

// Add the button to the body of the page
document.body.appendChild(button);

// Add event listener to change background color and text
button.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.textContent = "Clicked " + randomNumber + "!";
});
