// // script.js

alert("Welcome to the calculator")
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function del(value) {
    document.getElementById("result").value -= value;

}