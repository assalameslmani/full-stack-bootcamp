//step1
const parentElement = document.body;


const containerDiv = document.createElement('div');
containerDiv.className = 'container';

const loginContainerDiv = document.createElement('div');
loginContainerDiv.className = 'login__container';

const loginSigninDiv = document.createElement('div');
loginSigninDiv.className = 'login__signin';

const loginSigninNowDiv = document.createElement('div');
loginSigninNowDiv.className = 'login__signin-now';

const h1Element = document.createElement('h1');
h1Element.textContent = 'Sign up NOW!';

const h3Element = document.createElement('h3');
h3Element.textContent = 'Enter your details';

const formElement = document.createElement('form');

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.className = 'input-field';
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailLabel.appendChild(emailInput);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.className = 'input-field';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);

const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password';
const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.className = 'input-field';
confirmPasswordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.required = true;
confirmPasswordLabel.appendChild(confirmPasswordInput);

const submitButton = document.createElement('button');
submitButton.className = 'filled-btn';
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';


formElement.appendChild(emailLabel);
formElement.appendChild(passwordLabel);
formElement.appendChild(confirmPasswordLabel);
formElement.appendChild(submitButton);

loginSigninNowDiv.appendChild(h1Element);
loginSigninNowDiv.appendChild(h3Element);
loginSigninNowDiv.appendChild(formElement);

loginSigninDiv.appendChild(loginSigninNowDiv);

loginContainerDiv.appendChild(loginSigninDiv);

containerDiv.appendChild(loginContainerDiv);

parentElement.appendChild(containerDiv);

//step1.1
function checkPasswordsMatch() {
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
  
    if (passwordValue === confirmPasswordValue) {
      confirmPasswordInput.setCustomValidity('');
  
      
      submitButton.disabled = false;
    } else {
      confirmPasswordInput.setCustomValidity("Passwords don't match");
      submitButton.disabled = true;
    }
  }
  
  
  passwordInput.addEventListener('input', checkPasswordsMatch);
  
  
  confirmPasswordInput.addEventListener('input', checkPasswordsMatch);
  
  
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  
    
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    if (passwordsMatch) {
      window.location.href = 'quote.html';
    }
  });
