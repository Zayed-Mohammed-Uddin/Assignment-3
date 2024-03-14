document.addEventListener("DOMContentLoaded", function () {
    alert("Calculator Loaded");
});

const display = document.getElementById("displayBox");
const btns = document.getElementsByClassName("btn");

let btn_value = "";

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener("click", function () {

        if(btn_value == "AC"){
            btn_value = "";
            display.value = btn_value;
        }
        else if(btn_value == ""){}
        btn_value += btn.innerText;
        display.value = btn_value;

    });
}