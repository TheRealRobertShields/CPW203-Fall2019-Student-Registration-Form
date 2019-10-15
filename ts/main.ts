/**
 * Represents a college student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    /**
     * The full address of student (Street, City, State, Zip).
     */
    address:string;
    /**
     * The program of study.
     */
    program:string;

    //constructor(fName, lName){    }

    
}

// THIS IS TEST CODE
let stu = new Student();
stu.firstName = "Bob";      // SET
let fName = stu.firstName;  // GET
stu.address = "123 fake street";


window.onload = main;

function main(){
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm(){
    let nextStu:Student = getStudentFromForm();
    displayStudent(nextStu);
    //clearForm();
}

function getStudentFromForm():Student{
    
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu.program);
    return tempStu;
}

// Helper function to extract user input from form.
function getInputValue(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;
}

// Display functions don't return anything, void.
function displayStudent(s:Student):void{
    let newItem = document.createElement("li");     // Create <li>.
    newItem.innerText = s.firstName + " " + s.lastName;
    let displaySection = document.querySelector("#student-list");
    let list = displaySection.querySelector("ul");
    list.appendChild(newItem);    // Add <li> as a child to <ul>.
    // Embed student data in <li>
    console.log(newItem);
    newItem.setAttribute("data-program", stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-dateOfBirth", stu.dateOfBirth.toString());

    // Call showStudentData when the <li> is clicked
    newItem.onclick = showStudentData;

    

}

function showStudentData(){
    console.log(this);
    let currListItem = <HTMLLIElement>this;
    let name = currListItem.innerText;
    let program = currListItem.getAttribute("data-program");
    alert(name + " is studying " + program);
    document.querySelector("#display > h2").innerHTML = name;
    let p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}


/*
function clearForm(){
    
}
*/