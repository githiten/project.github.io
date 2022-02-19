// const { response } = require("express");
// const path = require("path/posix");
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            location.replace('/');
        }
    }
}
const loader = document.querySelector('.loader');
// finally some javascript
// we gave null using || at end of some variables becase we are
// using same elements from here for login.
// login has only two values
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password') || null;
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-conditions') || null;
const notification = document.querySelector('#notification' || null);

submitBtn.addEventListener('click', () => {
    if (name != null) { //signup page
        if (name.value.length < 3) {
            showAlert('name must be 3 letter long');
        } else if (!email.value.length) {
            showAlert('Enter your email Address');
        } else if (password.value.length < 8) {
            showAlert('password should 8 characters long');
        } else if (!number.value.length) {
            showAlert('enter your phone number');
        } else if (!Number(number.value) || number.value.length < 10) {
            showAlert('invalid number');
        } else if (!tac.checked) {
            showAlert('you must agree to our terms and conditions');
        } else {
            // form submition
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
            })
        }
    } else { // if name is null then we are in login page simple
        // login page
        if (!email.value.length || !password.value.length) {
            showAlert("fill all the inputs");
        } else {
            loader.style.display = 'block';
            sendData('/login', {
                //name: name.value,
                email: email.value,
                password: password.value,
                //number: number.value,
                //tac: tac.checked,
                //notification: notification.checked,
                //seller: false
            })
        }
    }
})