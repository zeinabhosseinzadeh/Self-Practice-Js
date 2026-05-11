'use strict'
function Captcha() {
    return Math.trunc(Math.random() * (10000 + 90000));
}
const captcha = Captcha()
console.log(captcha);
let user = prompt('enter captcha');
if (user == captcha) {
    console.log('accepted');
} else {
    console.log('wrong captcha');
}