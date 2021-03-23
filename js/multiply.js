'use strict';

function multiply() {

    let text = document.getElementById('table');

    for (let i = 2; i <= 9; i++) {
        for (let n = 1; n <= 10; n++) {
            text.innerHTML += `${n} * ${i} = ${i * n}<br>`;
        }
    }
}