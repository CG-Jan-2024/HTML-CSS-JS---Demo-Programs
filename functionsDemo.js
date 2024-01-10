
// 1st way of creating a function 
function displayAlert(){
    alert("alert message displayed by calling a function!!");
}

// 2nd way of creating a function
let sum = function(){
    // 1. access the value of the text boxes 
            //with id num1 and num2 and store them in variables
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    // 2. add both the numbers and store it in another variable
    let output = +number1 + (+number2);
    // 3. output the variable
    document.getElementById("display").innerHTML = "The sum of " + number1 + " and " + number2 + " is " + output;
}

// 3rd way creating a function - arrow functions
// let displayAlertArrow1 = function(){
//     alert("message displayed by an arrow function!!");
// }
let displayAlertArrow = () => alert("message displayed by an arrow function!!");

let arrayDestructure = () => {
    let myDetails = ["123456", "abc@gmail.com", "address1"];

    let myAddress = myDetails[2];
    let myPhone = myDetails[0];
    let myEmail = myDetails[1];

    // can do it in an easier way using array destructuring
    let [myPh, myEm, myAdd ] = myDetails;

    console.log(myAddress, myPhone, myEmail);
    console.log(myPh, myEm, myAdd);
}

let objectDestructure = () => {
    // in JS we can create an object without a class(never possible in java)
    let myProfile =  {
        firstName: "John",
        lastName: "Smith",
        contact: 89898989
    }  

    let fName = myProfile.firstName;
    let lName = myProfile.lastName;
    let con = myProfile.contact;

    // easier way is using obejct destructuring
    let {firstName:fN, lastName:lN, contact:cont} = myProfile;
    let {firstName, lastName, contact} = myProfile;
    console.log(fName, lName, con);
    console.log(fN, lN, cont);
}