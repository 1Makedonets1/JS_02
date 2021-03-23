'use strict';

function game() {
    alert('Загадайте число от 0 до 100');

    let number = 100;
    let from = 0;
    let to = 100;

    while (true) {
        number = Math.floor((from + to) /2);
        if (confirm(`Число равно ${number}`)) return;
        if (confirm(`Число меньше чем ${number}`)) {
            to = number - 1;
            continue;
        }
        if (confirm(`число больше чем ${number}`)) {
            from = number + 1;
            continue;
        }
    }
}