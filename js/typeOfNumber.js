'use strict';

function typeOfNumber() {
    let positive = 0;
    let negative = 0;
    let odd = 0;
    let even = 0;
    let zero = 0;

    for (let i = 1; i <= 10; i++) {
        const number = +prompt(`Тип числа: ${i}`);

        if (number === 0) {
            zero = zero +1;
        } else if (number > 0) {
            positive = positive +1;
        } else if (number < 0) {
            negative = nrgative +1;
        } else if (number % 2) {
            even = even +1;
        }  else {
            odd = odd + 1;
        }
    }
    let massage = `\n
                    Количество положительных чисел = ${positive}\n
                    Количество отрицательных чисел = ${negative}\n
                    Количество четных чисел = ${odd}\n
                    Количество нечетных чисел = ${even}\n
                    Количество нулей = ${zero}\n`
    alert(massage);
}
