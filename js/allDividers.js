 'use strict';

function allDividers() {
    let number = +prompt('Введите число');

    number = Math.abs(number);
    let result = '';

    for(let i = 1; i <= number; i++) {
        if (number % i == 0) {
            result = result + `${i}; `;
        }
    }
    alert('Все делители этого числа: ' + result)
}