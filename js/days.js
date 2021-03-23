'use strict';

function days() {

    let repeat = true;
    let i = 0;

    do {
        const days = ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

         repeat = confirm(`${days[i]} \nХотите продолжить?`);
         i = ++i % days.length;
    } while (repeat);
}