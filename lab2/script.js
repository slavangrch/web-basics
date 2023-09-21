const form = document.getElementById('form');
const username = document.getElementById('username');
const variant = document.getElementById('variant');
const group = document.getElementById('group');
const phonenumber = document.getElementById('phone-number');
const idcard = document.getElementById('id-card');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (checkInputs()) {
        // Якщо всі дані валідні, підготуємо рядок з даними для передачі на сторінку "result.html"
        const userData = `
            <p><strong>ПІБ:</strong> ${username.value}</p>
            <p><strong>Варіант:</strong> ${variant.value}</p>
            <p><strong>Група:</strong> ${group.value}</p>
            <p><strong>Телефон:</strong> ${phonenumber.value}</p>
            <p><strong>ID-card:</strong> ${idcard.value}</p>
        `;

        // Збережемо дані в локальне сховище (LocalStorage)
        localStorage.setItem('userData', userData);

        // Переходимо на сторінку "result.html"
        window.location.href = "result.html";
    }
});

// Додамо обробник події для кнопки "Reset"
form.addEventListener('reset', () => {
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(formControl => {
        formControl.classList.remove('error', 'success');
    });
});

// Функція для перевірки валідності введених даних
function checkInputs() {
    const usernameValue = username.value.trim();
    const variantValue = variant.value.trim();
    const groupValue = group.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const idcardValue = idcard.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setErrorFor(username);
        isValid = false;
    } else if (!isName(usernameValue)) {
        setErrorFor(username);
        isValid = false;
    } else {
        setSuccessFor(username);
    }

    if (variantValue === '') {
        setErrorFor(variant);
        isValid = false;
    } else if (!isVariant(variantValue)) {
        setErrorFor(variant);
        isValid = false;
    } else {
        setSuccessFor(variant);
    }

    if (groupValue === '') {
        setErrorFor(group);
        isValid = false;
    } else if (!isGroup(groupValue)) {
        setErrorFor(group);
        isValid = false;
    } else {
        setSuccessFor(group);
    }

    if (phonenumberValue === '') {
        setErrorFor(phonenumber);
        isValid = false;
    } else if (!isPhoneNumber(phonenumberValue)) {
        setErrorFor(phonenumber);
        isValid = false;
    } else {
        setSuccessFor(phonenumber);
    }

    if (idcardValue === '') {
        setErrorFor(idcard);
        isValid = false;
    } else if (!isIdCard(idcardValue)) {
        setErrorFor(idcard);
        isValid = false;
    } else {
        setSuccessFor(idcard);
    }

    return isValid;
}

function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isName(username) {
    return /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/.test(username);
}

function isVariant(variant) {
    return /^\d+$/.test(variant);
}

function isGroup(group){
    return /^[A-ZА-Я]{2}-\d{2}$/.test(group);
}

function isPhoneNumber(phonenumber) {
    return /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phonenumber);
}

function isIdCard(idcard) {
    return /^[A-Z]{2} №\d{6}$/.test(idcard);
}

