const screen = document.querySelector('.screen__content');

function showContentScreen(value) {
    if (screen.value.length<12) {
        //Botones que no se muestran en pantalla
        if (value !== 'DEL' && value !== '=' && value !== 'RESET' && value !== '+' && value !== '-' && value !== 'x' && value !== '/') {
            screen.value += value;
        }
    }
}

function refreshScreen(text) {
    screen.value = '';
}  
