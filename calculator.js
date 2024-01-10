// Get DOM elements
const box = document.getElementById('box');
const buttons = document.querySelectorAll(".button");
const mode1 = document.getElementById("mode");

// Initialize variables
let calculation = '';
let light = true;

// Function to update the display
function Display(value){
    calculation = calculation + value;
    change(calculation);
}

// Function to change input in the box
function change(calculation){
    box.value = calculation;
}

// Function to evaluate and display result
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

// Function to remove the last digit
function removeOne(){
    calculation = calculation.slice(0, -1);
    box.value = calculation;
}

// Function to reset the calculator
function reset(){
    box.value = '';
    calculation = '';
}

// Function to toggle between light and dark modes
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

// Function to toggle between light and dark modes and update the button text
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
