'use strict'
let attempts = 0;
let roll;
while (true) {
    roll = Math.floor(Math.random() * 6 + 1)
    attempts++;
    console.log(roll);
    if (roll=== 6) {
        console.log('success');
        console.log(` it took ${attempts} times to show roll6`);
        break;
    }
}
