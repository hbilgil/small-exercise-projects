const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans', 'white beans'];
const list = document.createElement('ul');

const section = document.querySelector('.preview');
section.appendChild(list);

myArray.forEach(myFunction);

function myFunction(value) {
  const listItem = document.createElement('li');
  list.appendChild(listItem);
  listItem.textContent = `${value}`;
}
