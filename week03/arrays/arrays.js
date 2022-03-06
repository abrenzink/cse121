//---------------------------------MAP------------------------------------

let newArray = ['one', 'two', 'three'];

let myList = newArray.map((item) => {
    return `<li>${item}</li>`
});

document.querySelector('#myList').innerHTML = myList.join();


let otherArray = ['A', 'B', 'A'];

function convertGPA(letter){
    switch(letter){
        case 'A': return 4;
            break;
        case 'B': return 3;
            break;
        case 'C': return 2;
            break;
        default: break;
    }
}

let myPoints = otherArray.map(convertGPA);
console.log(myPoints);


//---------------------------------REDUCE------------------------------------


let total = myPoints.reduce((prev, curr) => prev + curr);

const gpa = total / myPoints.length;

//---------------------------------FILTER------------------------------------

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let filteredArray = fruits.filter(fruit => fruit.length > 6);

//---------------------------------INDEX OF------------------------------------

let numbers = [12, 34, 21, 54];
let luckNumber = 21;

let result = numbers.indexOf(number => luckNumber);