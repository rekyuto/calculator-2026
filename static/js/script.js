let a = null;
let b = null;
let operator = null;

// Declare functions for each operator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Calculate an operation

 function operate(a, operator, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "×") {
        return multiply(a, b);
    } else if (operator == "÷") {
        if (b == 0) {
            return "wtf!!!!!"
        } else {
            return divide(a, b);
        }
    }
 }