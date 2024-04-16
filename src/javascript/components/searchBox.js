export const searchBox = () => {
  const searchBoxElement = document.createElement('input');
  searchBoxElement.type = 'text';
  searchBoxElement.placeholder = 'Enter location';
  return searchBoxElement;
};
