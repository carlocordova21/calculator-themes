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


