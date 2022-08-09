const result1 = document.querySelector('[data-result-sum]');
const result2 = document.querySelector('[data-result-pow]');
const result3 = document.querySelector('[data-result-factorial]');
const result4 = document.querySelector('[data-result-value-check]');
const result5 = document.querySelector('[data-result-product]');
const result6 = document.querySelector('[data-result-object-search]');
const result7 = document.querySelector('[data-result-multi-dimension]');
const result8 = document.querySelector('[data-result-squares-sum]');
const result9 = document.querySelector('[data-result-replicate]');

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');

function sumRange(n) {
    let n = parseInt(prompt("Enter a Number", "1"))
    return (n == 1) ? n : (n + sumRange(n - 1)); //ternary operator
}

function pow(x, n) {



    return (n == 1) ? x : (x * pow(x, n - 1)); //ternary operator
}
  

button1.addEventListener('click', sumRange);