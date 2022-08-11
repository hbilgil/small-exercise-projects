const result1 = document.querySelector('[data-result-sum]');
const result2 = document.querySelector('[data-result-pow]');
const result3 = document.querySelector('[data-result-factorial]');
const result4 = document.querySelector('[data-result-value-check]');
const result5 = document.querySelector('[data-result-product]');
const result6 = document.querySelector('[data-result-object-number]');
const result7 = document.querySelector('[data-result-object-string]');
const result8 = document.querySelector('[data-result-squares-sum]');
const result9 = document.querySelector('[data-result-replicate]');
const result10 = document.querySelector('[data-result-fibonacci]');
const result11 = document.querySelector('[data-result-merge-sort]');

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button10 = document.getElementById('10');
const button11 = document.getElementById('11');

/*---SUM of RANGE FUNCTIONS---*/

function getNValue() {
    let value = prompt("Enter a Number");
    let n = parseInt(value);
    sumRange(n);
}

function sumRange(n) {
    let Sum;
    if(n == 1) {
    Sum = 1;
    } else {
	Sum = n + sumRange(n - 1);
    }
    result1.textContent = Sum;
    return Sum;
}

button1.addEventListener('click', getNValue);
window.addEventListener('load', () => {
    sumRange(6);
})

/*---POWER of a NUMBER FUNCTIONS---*/

function getValues() {
    let baseValue = prompt("Enter a Number");
    let exponentialValue = prompt("Enter a Number as an exponential value")
    let x = parseInt(baseValue);
    let n = parseInt(exponentialValue);
    power(x, n);
}

function power(x, n) {
    let pow;
    if(n == 0) {
    pow = 1
    } else {
	pow = x * power(x, n - 1)
    }
    result2.textContent = pow;
    return pow;
}

button2.addEventListener('click', getValues);
window.addEventListener('load', () => {
    power(6, 3);
});


/*---FACTORIAL of a NUMBER FUNCTIONS---*/

function getFactorialValue() {
    let value = prompt("Enter a Number");
    let n = parseInt(value);
    nFact(n);
}

function nFact(n) {
    let factorial;
    if (n == 1) {
    factorial = 1;
    } else {
    factorial = n * nFact(n-1);
    }
    result3.textContent = factorial;
    return factorial;
}

button3.addEventListener('click', getFactorialValue);
window.addEventListener('load', () => {
    nFact(6);
  });

/*---VALUE CHECK FUNCTIONS---*/

function getValuesToCheck() {
    let firstValue = prompt("Enter a Number");
    let secondValue = prompt("Enter a Number");
    let thirdValue = prompt("Enter a Number");

    let x = parseInt(firstValue);
    let y = parseInt(secondValue);
    let z = parseInt(thirdValue);
    let array = [x, y, z]
    checkValues(array, function(num){
        return num < 7;
    });
}

function checkValues(array, callback) {
    let booleanValue;
    
    if(callback(array[0])){
		array.shift(); // remove first element from array
		return checkValues(array, callback);
	} else {
		booleanValue = 'False';
	}

    if(array.length === 0) booleanValue = 'True';

    result4.textContent = booleanValue;
    return booleanValue;
}

button4.addEventListener('click', getValuesToCheck);
window.addEventListener('load', () => {
    checkValues([6, 7, 8], function(num){
        return num < 7;
    });
});

/*---PRODUCT of ARRAY VALUES FUNCTIONS---*/

function getValuesToMultiply() {
    let firstValue = prompt("Enter a Number");
    let secondValue = prompt("Enter a Number");
    let thirdValue = prompt("Enter a Number");
    let fourthValue = prompt("Enter a Number");

    let x = parseInt(firstValue);
    let y = parseInt(secondValue);
    let z = parseInt(thirdValue);
    let t = parseInt(fourthValue);

    let array = [x, y, z, t];
    multiplyValues(array);
}

function multiplyValues(array) {

    let multipliedValue;

    if(array.length == 1){
        multipliedValue = array[0];
	} else {
		multipliedValue = array.shift() * multiplyValues(array);
	}

    result5.textContent = multipliedValue;
    return multipliedValue;
}

button5.addEventListener('click', getValuesToMultiply);
window.addEventListener('load', () => {
    multiplyValues([6, 7, 8, 9]);
});


/*---OBJECT SEARCH FUNCTIONS---*/

const nestedObject1 = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

const nestedObject2 = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function getNumberValueToCheckInObject() {
    let numberValue = prompt("Enter a Number as a MagicNumber value");
    let x = parseInt(numberValue);

    containsNumber(nestedObject1, x);
}

function getStringValueToCheckInObject() {
    let string = prompt("Enter a String as a Something value");

    containsString(nestedObject2, string);
}


function containsNumber(obj, valueForNumber) {

    let booleanValueForNumber;

    for(let key in obj){
		if(typeof obj[key] === 'object'){
            return containsNumber(obj[key], valueForNumber);
		} else if(obj[key] === valueForNumber) {
			booleanValueForNumber = `For Number: True`;
		} else {
            booleanValueForNumber = `For Number: False`;
        }
	}
    result6.textContent = booleanValueForNumber;
    return booleanValueForNumber;
}

function containsString(obj, valueForString) {

    let booleanValueForString;

    for(let key in obj){
		if(typeof obj[key] === 'object'){
            return containsString(obj[key], valueForString);
		} else if(obj[key] === valueForString) {
			booleanValueForString = `For String: True`;
		} else {
            booleanValueForString = `For String: False`;
        }
	}
    
    result7.textContent = booleanValueForString;
    return booleanValueForString;
}

button6.addEventListener('click', getNumberValueToCheckInObject);
button7.addEventListener('click', getStringValueToCheckInObject);
window.addEventListener('load', () => {
    containsNumber(nestedObject1, 33);
    containsString(nestedObject2, 'foo');
});

/*---SQUARES SUM of ARRAY VALUES FUNCTIONS---*/

function getValuesToSumSquares() {

    let firstValue = prompt("Enter a Number");
    let secondValue = prompt("Enter a Number");
    let thirdValue = prompt("Enter a Number");
    let fourthValue = prompt("Enter a Number");

    let x = parseInt(firstValue);
    let y = parseInt(secondValue);
    let z = parseInt(thirdValue);
    let t = parseInt(fourthValue);

    let array = [x, [[y], z], [t]];

    SumSquares(array);
}

function SumSquares(array){

	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
	}
    result8.textContent = total;
	return total;
}

button8.addEventListener('click', getValuesToSumSquares);
window.addEventListener('load', () => {
    SumSquares([10,[[10],10],[10]]);
});

/*---REPLICATE FUNCTIONS---*/

function getValuesToReplicate() {
    let valueToReplicate = prompt("Enter a Number to Replicate");
    let replicationValue = prompt("Enter a Number as a Replication Value");
    let x = parseInt(valueToReplicate);
    let n = parseInt(replicationValue);
    replicate(n, x);
}

function replicate(n, x) {
    let array;
    if(n <= 0) {
    array = [];
    } else {
	array = [x].concat(replicate(n - 1, x));
    }
    result9.textContent = array;
    return array;
}

button9.addEventListener('click', getValuesToReplicate);
window.addEventListener('load', () => {
    replicate(3, 24);
});

/*---FIBONACCI SUM of a RANGE FUNCTIONS---*/

function getNValueForFib() {
    let value = prompt("Enter a Number");
    let n = parseInt(value);
    fibRange(n);
}

function fibRange(n) {
    let fib;
    if(n < 2) {
    fib = n;
    } else {
	fib = fibRange(n - 1) + fibRange(n - 2);
    }
    result10.textContent = fib;
    return fib;
}

button10.addEventListener('click', getNValueForFib);
window.addEventListener('load', () => {
    fibRange(6);
})

/*---MERGE SORT FUNCTIONS---*/

function getValuesForMergeSort() {
    let value1 = prompt("Enter 1st number of an array with 10 elements");
    let value2 = prompt("Enter 2nd number of an array with 10 elements");
    let value3 = prompt("Enter 3rd number of an array with 10 elements");
    let value4 = prompt("Enter 4th number of an array with 10 elements");
    let value5 = prompt("Enter 5th number of an array with 10 elements");
    let value6 = prompt("Enter 6th number of an array with 10 elements");
    let value7 = prompt("Enter 7th number of an array with 10 elements");
    let value8 = prompt("Enter 8th number of an array with 10 elements");
    let value9 = prompt("Enter 9th number of an array with 10 elements");
    let value10 = prompt("Enter 10th number of an array with 10 elements");
    let a = parseInt(value1);
    let b = parseInt(value2);
    let c = parseInt(value3);
    let d = parseInt(value4);
    let e = parseInt(value5);
    let f = parseInt(value6);
    let g = parseInt(value7);
    let h = parseInt(value8);
    let i = parseInt(value9);
    let j = parseInt(value10);
    let array = [a,b,c,d,e,f,g,h,i,j];
    mergeSort(array);
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const midPoint = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, midPoint));
    const rightHalf = mergeSort(array.slice(midPoint));
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = [];

  while (left.length > 0 && right.length > 0) {
    const arrayWithMin = left[0] < right[0] ? left : right;
    const mergeElement = arrayWithMin.shift();
    result.push(mergeElement);
  }
  while (left.length > 0) {
    const mergeElement = left.shift();
    result.push(mergeElement);
  }
  while (right.length > 0) {
    const mergeElement = right.shift();
    result.push(mergeElement);
  }
  result11.textContent = result;
  return result.concat(left, right);
}

button11.addEventListener('click', getValuesForMergeSort);
window.addEventListener('load', () => {
    let array = [4,7,5,9,3,6,8,1,0,2];
    mergeSort(array);
})