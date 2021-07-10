const parentScreen = document.querySelector('.screen');
const screen = document.querySelector('.screen__content');

//Refrescar screen al actualizar el navegador
function refreshScreen(text) {
    screen.value = '';
}  

function showContentScreen(value) {
    for (let i=0; i<=9; i++) {
        if (value === i.toString()) {
            if (valuesOperation.screenEmpty === true) {
                screen.value = '';
            }
            screen.value += value;
            valuesOperation.screenEmpty = false;
        }
    }
    
    if (value === '+' || value === '-' || value === 'x' || value === '/') {
        if(screen.value !== '') {
            valuesOperation.num = parseFloat(screen.value);
            valuesOperation.simbol = value;
            valuesOperation.screenEmpty = true;

            switch (value) {
                case '+':
                    parentScreen.setAttribute('data-content', '+');
                    break;
                case '-':
                    parentScreen.setAttribute('data-content', '-');
                    break;
                case 'x':
                    parentScreen.setAttribute('data-content', 'x');
                    break;
                case '/':
                    parentScreen.setAttribute('data-content', '/');
                    break;
            }
        }
    }

    if (value === '=') {
        if (valuesOperation.num !== 0 && valuesOperation.simbol !== '') {
            calculate(parseFloat(screen.value), valuesOperation.simbol);
            screen.value = valuesOperation.num.toString();
            parentScreen.setAttribute('data-content', '');
        }
    }

    if (value === '.') {
        if (screen.value.indexOf('.') === -1) {
            if (screen.value !== '') {
                screen.value += value;
            }
        }
    }

    if (value === 'DEL') {
        del();
    }

    if (value === 'RESET') {
        reset();
    }
    
}





