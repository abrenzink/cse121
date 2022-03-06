/* Lesson 3 */

/* FUNCTIONS */

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

function add(number1, number2){

    return number1 + number2;
}

function addNumbers(){
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);

    let result = add(addend1, addend2);
    document.querySelector('#sum').value = result;
}



/* ------------------------------------------------------------------------------------------------ */

function subtract(number1, number2){

    return number1 - number2;
}

function subtractNumbers(){
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);

    document.querySelector('#difference').value = subtract(minuend, subtrahend);
}




/* ------------------------------------------------------------------------------------------------ */

function multiply(number1, number2){

    return number1 * number2;
}

function multiplyNumbers(){
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}




/* ------------------------------------------------------------------------------------------------ */

function divide(number1, number2){

    return number1 / number2;
}

function divideNumbers(){
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").textContent = numbers.filter(num => num % 2);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numbers.filter(num => num % 2 === 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = numbers.reduce((prev, curr) => prev + curr, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = numbers.map(num => num * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((prev, curr) => prev + curr, 0);