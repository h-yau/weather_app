export const clearElement = (htmlElement) => {
  while (htmlElement.lastElementChild) {
    htmlElement.removeChild(htmlElement.lastElementChild);
  }
};
