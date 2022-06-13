const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

container.appendChild(para);

const headings = document.createElement('h3');
headings.classList.add('h3');
headings.textContent = 'I\'m a blue h3!';
headings.style.color = 'blue';

container.appendChild(headings);

const Alt_content = document.createElement('div');
Alt_content.classList.add('Alt-content');
Alt_content.setAttribute('style', 'border: solid; background: pink;');

container.appendChild(Alt_content);

const Alt_headings = document.createElement('h1');
Alt_headings.classList.add('h1');
Alt_headings.textContent = 'I\'m in a div';

Alt_content.appendChild(Alt_headings);

const Alt_para = document.createElement('p');
Alt_para.classList.add('Alt-p');
Alt_para.textContent = 'ME TOO!';

Alt_content.appendChild(Alt_para);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
