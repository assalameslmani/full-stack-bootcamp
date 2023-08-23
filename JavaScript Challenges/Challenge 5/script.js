//challenge 5
//step 1

const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

console.log(menuDiv);
console.log(headerElement);
console.log(footerElement);

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';

containerDiv.appendChild(paragraph);

containerDiv.style.backgroundColor = 'blue';
paragraph.style.color = 'white';
paragraph.style.fontSize = '24px';
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.border = '1px solid black';

const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(heading => {
  heading.style.fontStyle = 'italic';
});

document.body.appendChild(containerDiv);


//step 2
const button = document.createElement("button");
button.innerText = "Hover Me";

button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "blue";
});

button.addEventListener("mouseout", function() {
  button.style.backgroundColor = "initial";
});

document.body.appendChild(button);

const container = document.getElementById("original");

container.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
});


const form = document.createElement("form");

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Name:", nameInput.value);
  console.log("Email:", emailInput.value);
});

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

document.body.appendChild(form);


//step 3




const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove Header";

// Add event listener to the button
removeBtn.addEventListener("click", function() {
  const header = document.querySelector("h1");
  if (header) {
    header.remove();
  }
});
document.body.appendChild(removeBtn);

function insertBeforeFooter(element) {
    const footer = document.querySelector("footer");
    footer.parentNode.insertBefore(element, footer);
  }

  const newElement = document.createElement("div");
newElement.textContent = "This is a new element";
insertBeforeFooter(newElement);
