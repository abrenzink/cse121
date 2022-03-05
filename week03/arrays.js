let newArray = ['one', 'two', 'three'];

let myList = newArray.map((item) => {
    return `<li>${item}</li>`
});

let ul = document.querySelector('#myList')
ul.innerHTML = myList.join();

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

let total = myPoints.reduce((prev, curr) => prev + curr);

const gpa = total / myPoints.length;

