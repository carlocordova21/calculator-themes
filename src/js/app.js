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

