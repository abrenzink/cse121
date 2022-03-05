const PI = 3.14;
let area = 0;

area = circleArea(3);
console.log("Area 1:", area);

area = circleArea(12);
console.log("Area 2:", area);


function circleArea(radius) {

    let area = radius * radius * PI;
    return area;
}