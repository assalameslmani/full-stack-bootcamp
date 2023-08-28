const quotesArray = [
  {
    author: 'Thomas Edison',
    content: 'As a cure for worrying, work is better than whisky.',
  },
  {
    author: 'Thomas Edison',
    content: 'Everything comes to him who hustles while he waits.',
  },
  {
    author: 'Thomas Edison',
    content: "I never did a day's work in my life.  It was all fun.",
  },
  {
    author: 'Charles Dickens',
    content:
      'I do not know the American gentleman, god forgive me for putting two such words together.',
  },
  {
    author: 'Charles Dickens',
    content: 'We need never be ashamed of our tears.',
  },
  {
    author: 'Charles Dickens',
    content:
      'Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.',
  },
  {
    author: 'Charles Dickens',
    content:
      'Train up a fig tree in the way it should go, and when you are old sit under the shade of it.',
  },
  {
    author: 'Charles Dickens',
    content:
      "Subdue your appetites, my dears, and you've conquered human nature.",
  },
  {
    author: 'Thomas Edison',
    content:
      'Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.',
  },
  {
    author: 'Thomas Edison',
    content:
      'There is no expedient to which a man will not go to avoid the labor of thinking.',
  },
  {
    author: 'Charles Dickens',
    content:
      'No one is useless in this world who lightens the burdens of another.',
  },
  {
    author: 'Thomas Edison',
    content:
      "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
  },
  {
    author: 'Charles Dickens',
    content:
      'Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.',
  },
  {
    author: 'Thomas Edison',
    content:
      'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
  },
  {
    author: 'Thomas Edison',
    content:
      'The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.',
  },
  {
    author: 'Thomas Edison',
    content: "We don't know a millionth of one percent about anything.",
  },
  {
    author: 'Thomas Edison',
    content:
      'If we all did the things we are capable of doing, we would literally astound ourselves.',
  },
  {
    author: 'Thomas Edison',
    content: 'To invent, you need a good imagination and a pile of junk.',
  },
  {
    author: 'Thomas Edison',
    content:
      'I never did anything worth doing by accident, nor did any of my inventions come by accident',
  },
  {
    author: 'Thomas Edison',
    content:
      "Hell, there are no rules here-- we're trying to accomplish something.",
  },
];



const parentElement = document.body;

const blockquoteElement = document.createElement('blockquote');
blockquoteElement.textContent = `"I think that beauty can injure you to death. It can cause an injury that can
  never be cured. Or it can so traumatise you, your life changes direction. The
  beauty of the harmony of nature that is forever lost, or a daily rite that you
  perform, or diving into the sea for a swim. Those experiences are going to
  mark you."`;

const authorDiv = document.createElement('div');
authorDiv.className = 'author';

const emDash = document.createElement('span');
emDash.innerHTML = '&mdash;';

const citeElement = document.createElement('cite');
citeElement.textContent = 'Toni Servillo';


authorDiv.appendChild(emDash);
authorDiv.appendChild(citeElement);

blockquoteElement.appendChild(authorDiv);

parentElement.appendChild(blockquoteElement);




const quotes = [
  {
    text: "Quote 1 text...",
    author: "Author 1",
  },
  {
    text: "Quote 2 text...",
    author: "Author 2",
  },
  
];


quotes.forEach((quote) => {
  const blockquoteElement = document.createElement('blockquote');
  blockquoteElement.textContent = quote.text;

  const authorDiv = document.createElement('div');
  authorDiv.className = 'author';

  const emDash = document.createElement('span');
  emDash.innerHTML = '&mdash;';

  const citeElement = document.createElement('cite');
  citeElement.textContent = quote.author;

 
  authorDiv.appendChild(emDash);
  authorDiv.appendChild(citeElement);

  blockquoteElement.appendChild(authorDiv);

  parentElement.appendChild(blockquoteElement);
});





const quotess = [
  {
    text: "Quote 1 text...",
    author: "Author 1",
  },
  {
    text: "Quote 2 text...",
    author: "Author 2",
  },
  
];


function displayFilteredQuotes(filterValue) {
  parentElement.innerHTML = ''; 

  quotes.forEach((quote) => {
    if (quote.author.toLowerCase().includes(filterValue)) {
      const blockquoteElement = document.createElement('blockquote');
      blockquoteElement.textContent = quote.text;

      const authorDiv = document.createElement('div');
      authorDiv.className = 'author';

      const emDash = document.createElement('span');
      emDash.innerHTML = '&mdash;';

      const citeElement = document.createElement('cite');
      citeElement.textContent = quote.author;

      authorDiv.appendChild(emDash);
      authorDiv.appendChild(citeElement);

      blockquoteElement.appendChild(authorDiv);

      parentElement.appendChild(blockquoteElement);
    }
  });
}

const filterInput = document.getElementById('filter-input');

filterInput.addEventListener('input', (event) => {
  const filterValue = event.target.value.toLowerCase();
  displayFilteredQuotes(filterValue);
});