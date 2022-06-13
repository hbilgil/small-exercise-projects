
function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let k=500; k>=2; k--) {

const para = document.createElement('p');

    if (isPrime(k) == false) {
        continue;
    } else {
      para.textContent = `${k}`;
    }

const section = document.querySelector('section');
section.appendChild(para);
}



