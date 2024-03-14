"use strict";
const display = document.getElementById("displayBox");
const btns = document.getElementsByClassName("btn");

let currentValue = "";

const evaluateExpression = function(){
    const result = eval(currentValue);
    display.value = result.toString();
}

for (let i = 0; i < btns.length; i++) {
    const button = btns[i];
    button.addEventListener("click", function () {
        const val = button.innerText;

        if (val == "AC") {
            currentValue = "";
            display.value = currentValue;
        } else if (val == "=") {
            evaluateExpression();
        } else {
            currentValue += val;
            console.log(currentValue);
            display.value = currentValue;
        }
    });
}