let display = document.querySelector('#display');
let output = document.querySelector('#output');
let currentValue = '';
let previousValue = '';
let operator = '';

document.querySelectorAll('.numbers').forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length < 11) {
            currentValue += button.textContent;
            display.textContent += button.textContent;

            if (operator) {
                calculateInRealTime();
            }
        }
    });
});

document.querySelectorAll('.operators').forEach(button => {
    button.addEventListener('click', () => {
        if (currentValue) {
            previousValue = currentValue;
            currentValue = '';
            operator = button.textContent;
            display.textContent += ' ' + operator + ' ';
        }
    });
});

document.querySelectorAll('.clear').forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = '';
        output.textContent = '';
        currentValue = '';
        previousValue = '';
        operator = '';
    });
});

document.querySelector('.backspace').addEventListener('click', () => {
    if (currentValue) {
        currentValue = currentValue.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
});

document.querySelectorAll('.equalto').forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = output.textContent.replace('=', '').trim();
        output.textContent = '';
        currentValue = display.textContent;
        previousValue = '';
        operator = '';
    });
});

document.querySelector('.plus-minus').addEventListener('click', () => {
    if (currentValue) {
        currentValue = (parseFloat(currentValue) * -1).toString();
        if (operator) {
            let currentDisplay = display.textContent.split(' ');
            currentDisplay[currentDisplay.length - 1] = currentValue;
            display.textContent = currentDisplay.join(' ');
        } else {
            display.textContent = currentValue;
        }
        calculateInRealTime();
    }
});

function calculateInRealTime() {
    let result = 0;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '×':
            result = prev * curr;
            break;
        case '÷':
            if (curr !== 0) {
                result = prev / curr;
            } else {
                result = 'Error';
            }
            break;
        default:
            return;
    }
    output.textContent = `= ${result}`;
}
