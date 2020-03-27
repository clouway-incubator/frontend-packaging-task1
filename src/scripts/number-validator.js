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

function isNumber(number) {
    const regex = /^(-?\d{1,10}[.|,]\d{1,5}|-?\d{1,10})$/
    return regex.test(number);
}

function validatorTest(){
    let sample = [
        ['1000000001.30505', true],
        ['10.35', true],
        ['10,35', true],
        ['111.45', true],
        ['100', true],
        ['100.0', true],
        ['-3004', true],
        ['-40.10', true],
        ['10000000001', false],
        ['10000000001.123456', false],
        ['10000000001,123456', false],
        ['1000.5000555', false],
        ['1000,5000555', false],
        ['.0000', false],
        ['0000.', false],
        [',1111', false],
        ['1111,', false],
        ['99,99,99', false],
        ['88.88.88', false],
        ['asd', false],
        ['asdasd.', false],
        ['.asdasd', false]
    ];
    sample.forEach((test) => {
        let result = isNumber(test[0]);
        expect(result).toBe(test[1], "expected isNumber('" + test[0] + "') to be " + test[1] + ", but was: " + result);
    });
}

//validatorTest();
