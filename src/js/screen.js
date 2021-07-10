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


            parentScreen.classList.remove('suma');
            parentScreen.classList.remove('resta');
            parentScreen.classList.remove('multi');
            parentScreen.classList.remove('div');
            switch (value) {
                case '+':
                    parentScreen.classList.add('suma');
                    break;
                case '-':
                    parentScreen.classList.add('resta');
                    break;
                case 'x':
                    parentScreen.classList.add('multi');
                    break;
                case '/':
                    parentScreen.classList.add('div');
                    break;
            }
        }
    }

    if (value === '=') {
        if (valuesOperation.num !== 0 && valuesOperation.simbol !== '') {
            calculate(parseFloat(screen.value), valuesOperation.simbol);
            screen.value = valuesOperation.num.toString();
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





