'use strict';

function max() {
    let numberOne = +prompt('Введите первое число');
    let numberTwo = +prompt('Введите второе число');

    numberOne = Math.abs(numberOne);
    numberTwo = Math.abs(numberTwo);

    while (numberOne != 0 && numberTwo !=0) {
        if (numberOne > numberTwo) {
            numberOne = numberOne % numberTwo;
        } else {
            numberTwo = numberTwo % numberOne;
        }
    }
    alert(numberOne + numberTwo);
}