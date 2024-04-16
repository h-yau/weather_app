import { searchBox } from './searchBox';
import { submitButton } from './submitButton';
import { getCurrentWeather } from '../services/getCurrentWeather';
import { clearElement } from '../utils/clearElement';
import { dataTableDiv } from './dataTable';

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const inputElement = e.target.querySelector('input[type="text"]');
  const inputtedCity = inputElement.value;
  inputElement.value = '';

  try {
    await getCurrentWeather(inputtedCity);
  } catch (error) {
    let dataTable = document.querySelector('div[data-data-id="dataTable"]');

    if (dataTable == null || dataTable == undefined) {
      dataTable = dataTableDiv();
      document.body.appendChild(dataTable);
    } else {
      clearElement(dataTable);
    }

    const erorrMessageSpan = document.createElement('span');
    erorrMessageSpan.textContent = error;
    dataTable.appendChild(erorrMessageSpan);

    console.error(error);
  }
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
