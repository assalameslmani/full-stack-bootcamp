//challenge 3

//step 1

let num1;
let num2;

function addNumbers(num1, num2) {
    return num1 + num2
}

console.log(addNumbers(5, 5));
console.log(addNumbers(55, 55));
console.log(addNumbers(25, 15));

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both are equal";
    }
}

console.log(findMax(5, 5));
console.log(findMax(55, 75));
console.log(findMax(25, 15));


function compute(num1, num2, operation) {
    function add() {
        return num1 + num2;
    }

    function subtract() {
        return num1 - num2;
    }

    function multiply() {
        return num1 * num2;
    }

    function divide() {
        return num1 / num2;
    }

    switch (operation) {
        case "add":
            return add();
        case "subtract":
            return subtract();
        case "multiply":
            return multiply();
        case "divide":
            return divide();
        default:
            return "Invalid operation";
    }
}

console.log(compute(50, 5));

