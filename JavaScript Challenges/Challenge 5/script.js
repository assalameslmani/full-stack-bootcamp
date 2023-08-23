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