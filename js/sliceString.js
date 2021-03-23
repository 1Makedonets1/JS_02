'use strict';

function sliceString() {
    const number = prompt('Введите число');
    const shiftDigits = prompt('Укажите на сколько нужно сдвинуть ваше число');

    let result = number.slice(shiftDigits) + number.slice(0, shiftDigits);
    alert(result);
}