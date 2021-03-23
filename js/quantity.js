'use strict';

function quantity() {
    const number = prompt('Введите любое число');
    if (isFinite(number)) {
        alert('Количиство цифр в вашем числе = ' + number.length);    
    } else {
        alert('Не корректный ввод! Ввидите число!');
    }
}