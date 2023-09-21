const form = document.getElementById('form');
const username = document.getElementById('username');
const variant = document.getElementById('variant');
const group = document.getElementById('group');
const phonenumber = document.getElementById('phone-number');
const idcard = document.getElementById('id-card');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    window.location.href = "result.html";
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const variantValue = variant.value.trim();
    const groupValue = group.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const idcardValue = idcard.value.trim();

    if (usernameValue === '') {
        setErrorFor(username);
    } else if (!isName(usernameValue)) {
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }

    if (variantValue === '') {
        setErrorFor(variant);
    } else if (!isVariant(variantValue)) {
        setErrorFor(variant);
    } else {
        setSuccessFor(variant);
    }

    if (groupValue === '') {
        setErrorFor(group);
    } else if (!isGroup(groupValue)) {
        setErrorFor(group);
    } else {
        setSuccessFor(group);
    }

    if (phonenumberValue === '') {
        setErrorFor(phonenumber);
    } else if (!isPhoneNumber(phonenumberValue)) {
        setErrorFor(phonenumber);
    } else {
        setSuccessFor(phonenumber);
    }

    if (idcardValue === '') {
        setErrorFor(idcard);
    } else if (!isIdCard(idcardValue)) {
        setErrorFor(idcard);
    } else {
        setSuccessFor(idcard);
    }
}

function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
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

