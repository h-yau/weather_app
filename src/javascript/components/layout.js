import { searchBox } from './searchBox';
import { submitButton } from './submitButton';
import { getCurrentWeather } from '../services/getCurrentWeather';

const handleFormSubmit = (e) => {
  e.preventDefault();
  const inputElement = e.target.querySelector('input[type="text"]');
  const inputtedCity = inputElement.value;
  inputElement.value = '';

  getCurrentWeather(inputtedCity);
};

const form = () => {
  const formElement = document.createElement('form');
  formElement.appendChild(searchBox());
  formElement.appendChild(submitButton());
  formElement.addEventListener('submit', handleFormSubmit);
  return formElement;
};

export const setupPageElements = () => {
  const bodyElement = document.querySelector('body');

  bodyElement.appendChild(form());
};
