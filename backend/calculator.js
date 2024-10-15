const display = document.getElementById('display');

document.querySelectorAll('.numbers, .operators').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        display.innerText += value;
    });
});

document.querySelector('.clear').addEventListener('click', () => {
    display.innerText = '';
});
