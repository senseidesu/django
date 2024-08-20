let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}
//dog
function setOperation(operation) {
    firstOperand = display.value;
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}
