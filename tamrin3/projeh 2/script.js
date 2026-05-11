'use strict'
function button(){
    let newTitle = document.querySelector('.inputTitle').value;
    document.title= newTitle;
};
document.querySelector("button").addEventListener("click",button);