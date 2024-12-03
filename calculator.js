
const box = document.getElementById('box');
const buttons = document.querySelectorAll(".button");
const mode1 = document.getElementById("mode");


let calculation = '';
let light = true;

function Display(value){
    calculation = calculation + value;
    change(calculation);
}


function change(calculation){
    box.value = calculation;
}


function cal(){
    try {
        if (calculation.includes("**") || calculation.includes("//")) {
            throw new Error('Invalid input. Expected a number.');
        } else {
            box.value = eval(calculation);
            calculation = box.value;
        }
    } catch(err) {
        alert("Error input / Maybe repeated sign input");
        reset();
    }
}


function removeOne(){
    calculation = calculation.slice(0, -1);
    box.value = calculation;
}


function reset(){
    box.value = '';
    calculation = '';
}


function calcTheme(){
    if(light){
        buttons.forEach(e => {
            e.classList.remove('button');
            e.setAttribute("id", "dark");
        });
        document.getElementById("box").style.backgroundColor = "rgb(34,37,45)";
        document.getElementById("box").style.color ="white";
        document.getElementById("board").style.backgroundColor = "rgb(34,37,45)";
        document.getElementById("board").style.borderColor= "rgb(34,37,45)";
    } else {
        buttons.forEach(e => {
            e.classList.add('button');
            e.removeAttribute("id", "dark");
        });
        document.getElementById("box").style.color ="black";
        document.getElementById("box").style.backgroundColor = "rgb(242,243,248)";
        document.getElementById("board").style.backgroundColor = "rgb(242,243,248)";
        document.getElementById("board").style.borderColor= "rgb(242,243,248)";
    }
}


function mode(){
    if(light){
        mode1.innerText = "Dark Mode";
        calcTheme();
        light = false;
    } else {
        mode1.innerText = "Light Mode";
        calcTheme();
        light = true;
    }
}
