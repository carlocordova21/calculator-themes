const valuesOperation = {
    num: 0,
    simbol: '',
    screenEmpty: true,
};

function calculate(num, simbol) {
    switch (simbol) {
        case '+':
            valuesOperation.num += num;
            break;
        case '-':
            valuesOperation.num -= num;
            break;
        case 'x':
            valuesOperation.num *= num;
            break;
        case '/':
            valuesOperation.num /= num;
            break;
    }
}

function del() {
    const lenght = screen.value.length;
    const newValue = screen.value.substring(0, lenght-1);
    screen.value = newValue;
}

function reset() {
    screen.value = '';
    valuesOperation.num = 0;
    valuesOperation.simbol = '';
    valuesOperation.screenEmpty = true;
    parentScreen.setAttribute('data-content', '');
}