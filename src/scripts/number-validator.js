import {isNumber} from './utilities';

let input = document.getElementById('numberInput');

let msg = document.createElement('small');
input.insertAdjacentElement('afterend', msg);

input.addEventListener('input', () => {
    let number = isNumber(input.value);
    msg.innerText = 'Does\'t meet the conditions!';
    msg.className = 'text-danger';
    if (number) {
        msg.innerText = 'The number meets the conditions!';
        msg.className = 'text-success';
    }
    else if (input.value === '') {
        msg.innerText = '';
    }
})

