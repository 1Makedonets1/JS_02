'use strict';

function caunt() {
    const fromNumber = +prompt('Введите первое число');
    const toNumber = +prompt('Введите второе число');
    let result = 0;
    let start, finish;
    if (fromNumber > toNumber) {
        start = toNumber;
        finish = fromNumber;
    } else { 
        start = fromNumber;
        finish = toNumber;
    }
    result = (start + finish) / 2 * (finish - start + 1);
    alert(result);
}