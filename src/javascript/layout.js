const searchBox = () => {
  const searchBoxElement = document.createElement('input');
  searchBoxElement.type = 'text';
  searchBoxElement.placeholder = 'Enter location';
  return searchBoxElement;
};

const submitButton = () => {
  const buttonElement = document.createElement('button');
  buttonElement.type = 'submit';
  buttonElement.textContent = 'Submit';
  return buttonElement;
};

const form = () => {
  const formElement = document.createElement('form');
  formElement.appendChild(searchBox());
  formElement.appendChild(submitButton());
  return formElement;
};

const setupPageElements = () => {
  const bodyElement = document.querySelector('body');

  bodyElement.appendChild(form());
};

export { setupPageElements as default };
