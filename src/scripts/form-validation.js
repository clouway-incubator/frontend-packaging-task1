import {setErrorMsg} from './utilities';

let form = document.getElementById('formID');
form.addEventListener('submit', () => {
    let isValid = validateForm();
    if (!isValid) {
        event.preventDefault();
    }
    else {
        alert('Data submitted successfully!');
    }
});

function validateForm() {
    const namePatt = /^[a-zA-z]{1,15}$/;
    const egnPatt = /^\d{10}$/;
    const agePatt = /^1[89]|[2-9][0-9]|10[0-9]|11[0-8]$/;
    const addrPatt = /^.{1,100}$/;
    const passPatt = /^[a-zA-z0-9]{6,18}$/;

    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let egn = document.getElementById('egn').value;
    let age = document.getElementById('age').value;
    let addr = document.getElementById('address').value;
    let pass = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPass').value;

    let isFnameMatch = namePatt.test(fname);
    let isLnameMatch = namePatt.test(lname);
    let isEgnMatch = egnPatt.test(egn);
    let isAgeMatch = agePatt.test(age);
    let isAddrMatch = addrPatt.test(addr);
    let isPassMatch = passPatt.test(pass);

    if (!isFnameMatch) {
        setErrorMsg('First name must be 1-15 characters long', 'fnameError');
        return false;
    }
    else {
        setErrorMsg('', 'fnameError');
    }

    if (!isLnameMatch) {
        setErrorMsg('Last name must be 1-15 characters long', 'lnameError');
        return false;
    }
    else {
        setErrorMsg('', 'fnameError');
    }

    if (!isEgnMatch) {
        setErrorMsg('EGN must be exactly 10 digits', 'egnError');
        return false;
    }
    else {
        setErrorMsg('', 'egnError');
    }

    if (!isAgeMatch) {
        setErrorMsg('You have to be 18 or older, but not over 118', 'ageError');
        return false;
    }
    else {
        setErrorMsg('', 'ageError');
    }

    if (!isAddrMatch) {
        setErrorMsg('Address must be 1-100 characters', 'addrError');
        return false;
    }
    else {
        setErrorMsg('', 'addrError');
    }

    if (!isPassMatch) {
        setErrorMsg('Password can contain latin normal or capital leters and numbers and must be between 6 and 16', 'passError');
        return false;
    }
    else {
        setErrorMsg('', 'passError');
    }

    if (confirmPass != pass) {
        setErrorMsg('Passwords do not match', 'confirmPassError');
        return false;
    }
    else {
        setErrorMsg('', 'confirmPassError');
    }

    return true;
}