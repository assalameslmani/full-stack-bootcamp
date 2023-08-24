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



//step 2
// Create h1 element
const h1 = document.createElement("h1");

// Add the h1 element to the body of the page
document.body.appendChild(h1);

// Add border to the h1 element
h1.style.border = "10px dotted green";

// Add keydown event listeners
document.addEventListener("keydown", function(event) {
  if (event.key === "a") {
    h1.style.backgroundColor = "red";
  } else if (event.key === "s") {
    h1.style.left = (parseInt(h1.style.left) || 0) + 10 + "px";
  } else if (event.key === "d") {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Key D was pressed!";
    document.body.appendChild(paragraph);
  } else if (event.key === "w") {
    h1.style.visibility = h1.style.visibility === "visible" ? "hidden" : "visible";
  } else if (event.key === " ") {
    const currentFontSize = parseInt(window.getComputedStyle(h1).fontSize);
    h1.style.fontSize = currentFontSize + 1 + "px";
  }
});