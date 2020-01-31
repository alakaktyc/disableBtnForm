const btn = document.querySelector('#req');
let fieldIndex = 0;
let buttonIndex = 0;

function showSlides() {
    const fields = document.getElementsByTagName('fieldset');
    const buttons = document.querySelectorAll('.btn--next');
    const inps = fields[fieldIndex].querySelectorAll('input');

    for (let i = 0; i < fields.length; i++) {
        fields[i].classList.remove('active');
    }

    for (let j = 0; j < inps.length; j++){
        fields[fieldIndex].addEventListener('input', function () {
            if (inps[j].value === ''){
                buttons[buttonIndex - 1].disabled = true
            } else {
                buttons[buttonIndex - 1].disabled = false
            }
        })
    }

    buttonIndex++;
    if (buttonIndex > buttons.length){
        buttonIndex = 1;
    }
    fields[fieldIndex].classList.add('active');

    buttons[buttonIndex - 1].addEventListener('click', function () {
        showSlides(fieldIndex++);

    })
}

function showForm(){
    document.querySelector('.reg-form').classList.add('active');
    showSlides()
}

btn.addEventListener('click', showForm);
