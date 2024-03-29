"use strict";
const display = document.getElementById("displayBox");
const btns = document.getElementsByClassName("btn");

let currentValue = "";

const evaluateExpression = function () {
    const convertedValue = currentValue
        .replace("%", "*0.01")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("tan", `Math.tan`)
        .replace("log", "Math.log")
        .replace("π", "Math.PI");
    const result = eval(convertedValue);
    currentValue = "";
    currentValue += result;
    display.value = result.toString();
}

try {
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
} catch (error) {
    console.error(error);
    currentValue = "ERROR";
    display.value = currentValue;
}