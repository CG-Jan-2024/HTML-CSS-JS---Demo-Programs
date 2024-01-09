
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

// 3rd way creating a function