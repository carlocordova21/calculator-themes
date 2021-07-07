const body = document.querySelector('BODY');
const labels = document.querySelectorAll('.toogle__lbl');
const radios = document.querySelectorAll('.toogle__radio');
const numbers = document.querySelectorAll('.topbar__number');

function changeSelectedSwitch() {
    //Agregar clase .scale al cargar la pagina
    /* radios.forEach(function(radio, i) {
        if(radio.checked) {
            numbers[i].classList.add('scale');
        }
    }); */

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










