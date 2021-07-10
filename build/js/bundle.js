document.addEventListener('DOMContentLoaded', function() {
    createButtons();
    changeSelectedSwitch();
    getLocalStorageThemes();
    refreshScreen();
    pressButton();
});


function getLocalStorageThemes() {
    removeThemes();
    
    //Utilizar tema blue por defecto al cargar por primera vez la pagina
    if(window.localStorage.length === 0) {
        body.classList.add('blue-theme');
        radios[0].checked = true;
        numbers[0].classList.add('scale');
    }

    //Obtenemos el modo actual del localStorage
    if(localStorage.getItem('theme') === 'blue') {
        body.classList.add('blue-theme');
        radios[0].checked = true;
        numbers[0].classList.add('scale');
    } else if(localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        radios[1].checked = true;
        numbers[1].classList.add('scale');
    } else if(localStorage.getItem('theme') === 'purple') {
        body.classList.add('purple-theme');
        radios[2].checked = true;
        numbers[2].classList.add('scale');
    }
}


const keypad = document.querySelector('.keypad');

//Lista de clases de los botones
const numpad = {
    classes: 
    ['keypad__7', 'keypad__8', 'keypad__9', 'keypad__del',
    'keypad__4', 'keypad__5', 'keypad__6', 'keypad__sum',
    'keypad__1', 'keypad__2', 'keypad__3', 'keypad__minus',
    'keypad__dot', 'keypad__0', 'keypad__div', 'keypad__multi',
    'keypad__reset', 'keypad__equal'],
    values: 
    ['7', '8', '9', 'DEL',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '.', '0', '/', 'x',
    'RESET', '=']
}

function createButtons() {
    for (let i=0; i<18; i++) {
        const btn = document.createElement('BUTTON');
        btn.dataset.btnId = i;
        btn.textContent = numpad.values[i];
        keypad.appendChild(btn);
        btn.classList.add(numpad.classes[i], 'btn');
    }
}

function pressButton() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(btn, i) {
        btn.dataset.btnId = i;
        btn.onclick = function(e) {
            btn.classList.add('press');
            const value = numpad.values[e.target.dataset.btnId];
            showContentScreen(value);
        }
    });
}



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
}
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






const body = document.querySelector('BODY');
const labels = document.querySelectorAll('.toogle__lbl');
const radios = document.querySelectorAll('.toogle__radio');
const numbers = document.querySelectorAll('.topbar__number');

function changeSelectedSwitch() {
    //Agregar clase .scale al hacer click en los numeros
    numbers.forEach(function(num, i) {
        num.dataset.numberId = i;
        num.onclick = function(e) {
            numbers.forEach(function(num) {
                num.classList.remove('scale');
            });
            const id = parseInt(e.target.dataset.numberId);
            radios[id].checked = true;
            numbers[id].classList.add('scale');
            saveLocalStorageTheme(id);
        };
    });

    //Agregar clase .scale al hacer click en el switch
    labels.forEach(function(lbl, i) {
        lbl.dataset.lblId = i;
        lbl.onclick = function(e) {
            numbers.forEach(function(num) {
                num.classList.remove('scale');
            });
            const id = parseInt(e.target.dataset.lblId);
            radios[id].checked = true;
            numbers[id].classList.add('scale');
            saveLocalStorageTheme(id);
        }
    });
}

//Agregamos la clase del tema y lo guardamos en el localstorage
function saveLocalStorageTheme(idTheme) {
    removeThemes();
    switch(idTheme) {
        case 0: 
            body.classList.add('blue-theme');
            localStorage.setItem('theme', 'blue');
            break;
        case 1: 
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            break;
        case 2: 
            body.classList.add('purple-theme');
            localStorage.setItem('theme', 'purple');
            break;
        default:
            alert('El tema no ha sido seleccionado');
    }
}

//Remover todos los temas
function removeThemes() {
    body.classList.remove('blue-theme');
    body.classList.remove('light-theme');
    body.classList.remove('purple-theme');
}










