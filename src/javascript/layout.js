import { apiKey } from './apiKey';

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

const getCurrentWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const weatherData = await fetch(url);
    const weatherDataJson = await weatherData.json();
    console.log(weatherDataJson);
  } catch (error) {
    console.error('Error: ', error);
  }
};

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

const setupPageElements = () => {
  const bodyElement = document.querySelector('body');

  bodyElement.appendChild(form());
};

export { setupPageElements as default };