
const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const title = document.querySelector('.title');
const dot = document.querySelector('.dot');
const clear = document.querySelector('.off');
const del = document.querySelector('.back');
const equal = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');

let firstExp = '';
let secondExp = '';
let operator = '';
let result;


numbers.forEach((number) => {
    number.addEventListener('click', populateScreen);
});


function populateScreen(e) {
    if (screen.textContent === '' || screen.textContent === '0'){
        screen.textContent = '';
    }
    if (operator === '') {
        screen.textContent += e.target.id;
        firstExp += e.target.id;
    } else {
        screen.textContent = secondExp
        screen.textContent += e.target.id;
        secondExp += e.target.id;
        
        
    }
    
    
}

operators.forEach((operato) => {
    operato.addEventListener('click', storeValue)
});

function storeValue(e) {        
        operator = e.target.id;
}

equal.addEventListener('click', () => {
    result = operate(operator, parseFloat(firstExp), parseFloat(secondExp))
    
    if (isNaN(result) || result % 1 === 0) {
        firstExp = result;
        secondExp = '';
        screen.textContent = result
    } else  {
        result = result.toFixed(7)
        firstExp = result;
        secondExp = '';
        screen.textContent = result
    } 
    
})

clear.addEventListener('click', () => {
    screen.textContent = '0';
    firstExp = '';
    secondExp = '';
    operator = '';
    result = undefined;
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.substr(0, screen.textContent.length - 1)
    if (operator === '') {
        firstExp = screen.textContent;
    } else {
        secondExp = screen.textContent
    }
})

dot.addEventListener('click', (e) => {
    if (screen.textContent.includes(e.target.id)) {
        return
    } else {
        screen.textContent += e.target.id;
        if (operator === '') {
            firstExp = screen.textContent;
        } else {
            secondExp = screen.textContent
        }
    }
})

function add(num1, num2) {
    return num1 + num2;
    
}

function subtract(num1, num2) {
    return num1 - num2;
    
}

function multiply(num1, num2) {
    return num1 * num2;
    
}

function divide(num1, num2) {
    return num1 / num2;
    
}

function operate(operator, num1, num2) {
   switch (operator) {
       case '+':
           return add(num1, num2)
           break;

        case '-':
           return subtract(num1, num2)
           break;

        case '*':
            return multiply(num1, num2)
            break;

        case '/':
            if (num1 === 0) {
                return 'oops! zero error'
            } return divide(num1, num2)
           break;
   }
}
