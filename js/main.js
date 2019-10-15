var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Bob";
var fName = stu.firstName;
stu.address = "123 fake street";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var nextStu = getStudentFromForm();
    displayStudent(nextStu);
}
function getStudentFromForm() {
    var tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu.program);
    return tempStu;
}
function getInputValue(id) {
    return document.getElementById(id).value;
}
function displayStudent(s) {
    var newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    var displaySection = document.querySelector("#student-list");
    var list = displaySection.querySelector("ul");
    list.appendChild(newItem);
    console.log(newItem);
    newItem.setAttribute("data-program", stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-dateOfBirth", stu.dateOfBirth.toString());
    newItem.onclick = showStudentData;
}
function showStudentData() {
    console.log(this);
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute("data-program");
    alert(name + " is studying " + program);
    document.querySelector("#display > h2").innerHTML = name;
    var p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}
