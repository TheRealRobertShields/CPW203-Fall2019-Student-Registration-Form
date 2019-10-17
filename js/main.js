var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Bob";
var fName = stu.firstName;
stu.address = "123 fake street";
var programAttr = "data-program";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var nextStu = getStudentFromForm();
    displayStudent(nextStu);
    clearForm();
}
function getStudentFromForm() {
    var tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}
function getInputValue(id) {
    return document.getElementById(id).value;
}
function displayStudent(stu) {
    var newItem = document.createElement("li");
    newItem.innerText = stu.firstName + " " + stu.lastName;
    var displaySection = document.querySelector("#student-list");
    var list = displaySection.querySelector("ul");
    newItem.setAttribute(programAttr, stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-dateOfBirth", stu.dateOfBirth.toString());
    console.log(newItem);
    list.appendChild(newItem);
    newItem.onclick = showStudentData;
}
function showStudentData() {
    console.log(this);
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    var h2 = document.querySelector("#display > h2");
    h2.innerHTML = name;
    var p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}
function clearForm() {
    var allTextBoxes = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < allTextBoxes.length; i++) {
        var currBox = allTextBoxes[i];
        currBox.value = "";
    }
}
