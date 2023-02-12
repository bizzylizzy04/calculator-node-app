// The Calculator
// Requirements:
// 1. Ask user, "What operation would you like to perform?".
// 2. User enters one of these options: "/", "*", "-", "+".
// 3. If user enters an invalid character, print "That is not a valid operation." and then restart the program.
// 4. After user enters a valid operation, ask user "Please enter the first number.".
// 5. User then enters any group of numbers. If user enters something that isn't a number, print "This is not a number." and then re-ask the question.
// 6. After a valid number is entered, ask user "Please enter the second number.". Perform the same error handling as before.
// 7. Then perform the proper math operation and print the result as "The result is: X" where it is the actual result.

let rs = require("readline-sync");
let operations = ['+', '-', '*', '/'];
let operator = null;
let firstNumber = 0;
let secondNumber = 0;

function operationQuestion() {
    operator = rs.question('What operation would you like to perform?'
        + '\nOptions:'
        + '\nSum (' + operations[0] + ')'
        + '\nSubtraction (' + operations[1] + ')'
        + '\nMultiplication (' + operations[2] + ')'
        + '\nDivision (' + operations[3] + ')\n'
    );

    if (!operations.includes(operator)) {
        console.log('That is not a valid operation.');
        operationQuestion();
    }

    firstNumber = rs.questionInt('Type the first number: ');
    secondNumber = rs.questionInt('Type the second number: ');
    switch (operator) {
        case '+':
            console.log('The result of ' + firstNumber + operator + secondNumber + ' = ' + (firstNumber + secondNumber));
            break;
        case '-':
            console.log('The result of ' + firstNumber + operator + secondNumber + ' = ' + (firstNumber - secondNumber));
            break;
        case '*':
            console.log('The result of ' + firstNumber + operator + secondNumber + ' = ' + (firstNumber * secondNumber));
            break;
        case '/':
            console.log('The result of ' + firstNumber + operator + secondNumber + ' = ' + (firstNumber / secondNumber));
            break;
        default:
            console.log('Something went wrong');
    }
}

operationQuestion();
