const output = document.querySelector('.output');
const btn = document.querySelector('button');
const resetBtn = document.querySelector('.reset');

btn.addEventListener('click', () => {
    
    for (let i = 10; i >= 0; i--) {
        let para = document.createElement('p');
        if (i === 10) { 
          para.textContent = `Countdown ${i}`;
      } else if (i === 0) {
          para.textContent = `Blast off!`;
      } else { 
          para.textContent = `${i}`;
      }
    output.appendChild(para);
    }
  });

   resetBtn.addEventListener('click', () => {
    while (output.firstChild) output.removeChild(output.firstChild);
  });