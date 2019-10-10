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
    clearForm();
}

function getStudentFromForm():Student{
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}

// Helper function to extract user input from form
function getInputValue(id:string):string{
    return (<HTMLInputElement>document.getElementById("id")).value;
}