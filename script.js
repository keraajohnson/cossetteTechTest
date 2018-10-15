// js email validation
// reg ex email validator 
function regEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// email input
const email = document.getElementById('email')

// validating email (function to be called on the click of submit)
function validateEmail() {
    if(regEmail(email.value)) {
        return true;
    } else {
        alert('You have not entered a valid e-mail address, please try again. i.e sam@email.com')
        return false;
    }
}

// js phone validation 
// reg ex phone validator
function regPhone(phone) {
    const re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    return re.test(phone)
}

// phone number input
const phone = document.getElementById('phone');

// validating phone number (function to be called on the click of submit)
function validatePhone() {
    if(regPhone(phone.value)) {
        return true;
    } else {
        alert('You have not entered a valid phone number, please try again. i.e (123)456-7890')
        return false;
    }
}

// js postal code validation
// reg ex postal code validator
function regPostal(postalCode) {
    const re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return re.test(postalCode);
}

// postal code input
const postalCode = document.getElementById('postalCode');

function validatePostal() {
    if(regPostal(postalCode.value)) {
        return true;
    } else {
        alert('You have not entered a correct postal code, please try again. i.e A1B 2C3');
        return false;
    }
}

// first name input
const firstName = document.getElementById('firstName');

// last name input
const lastName = document.getElementById('lastName');

// on click event handler on the click of the submit button
document.getElementById('submit').addEventListener('click', function (e) {
    console.log('hello')
    if (firstName.value === ""
    || lastName.value === ""
    || validateEmail() === false
    || validatePhone() === false
    || validatePostal() === false) {
        alert('Please be sure to fill out all of the required elements!')
        return false;
    } else {
        alert('Thank you for submitting this form');
    }
});
