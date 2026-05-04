//Function

//Syntax
// function functionName(parameter1, parameter2) {
// code to be executed
// }
// functionName(argument1, argument2)

//Function declaration
//sum of two number

//Normal function
// function sumOfTwoNumbers(a, b){
//     return a - b
// }

// const a = sumOfTwoNumbers(3, 5)
// console.log("outptut: ", a)

// arrow function
//syntax
// const variableName = (parameter1, parameter2) => {
// code to be executed
// }
// console.log(variableName(argument1, argument2))

//example
// const sum = (a, b) => { //B sathi
//     return a + b + b
// }

// console.log(sum(250, 250)) //A manxe

//calculator function
function calculatorFunction(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2
        default :
        return "Invalid operator"
    }
}
console.log(calculatorFunction(10, 5, '*'))