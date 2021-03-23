'use strict';

function calculator() {

    let repeat = true;

    do {
        let askNumberOne = +prompt('Введите число');
        let askNumberTwo = +prompt('Введите число');
        let askSign = prompt('Введите знак операции');

        if (askSign == '+') {
            alert(askNumberOne + askNumberTwo);
        } else if (askSign == '-') {
            alert(askNumberOne - askNumberTwo);
        } else if (askSign == '*') {
            alert(askNumberOne * askNumberTwo);
        } else if (askSign == '/') {
            alert(askNumberOne / askNumberTwo);
        }

        // alert (eval(askNumberOne + askSign + askNumberTwo);
        repeat = confirm('Хотите продолжить?');
    } while (repeat)
}