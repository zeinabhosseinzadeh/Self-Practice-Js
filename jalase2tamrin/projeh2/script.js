'use strict'
const bill = [100, 45, 200, 70, 60, 350, 210];
let tip = [];
let totallbill = 0;
let totalltip = 0;
for (let i = 0; i < bill.length; i++) {
    if (bill[i] > 100) {
        tip = bill[i] * 0.05;
    } else {
        tip = bill[i] * 0.10;
    }
    console.log(tip);
    totallbill += bill[i];
    totalltip += tip;
}

const totallAll = totallbill + totalltip;
console.log(totallbill);
console.log(totalltip);
console.log(totallAll);

