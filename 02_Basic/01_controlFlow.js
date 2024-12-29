// if & if else statements............ 

//const age = 59
// if (age >= 60){
//     console.log(`The person is senior citizen since his age is ${age}`);
//     }


// if (age<=18){
//     console.log("The person is not eligible for voting");   
// }
// else{
//     console.log("This person is eligible for voting"); 
// }


// if (age<= 18){
//     console.log("The person is not eligible for voting");   
// }
// else if (age> 18 && age< 60){
//     console.log("The person is Adult");
//     }
// else{
//     console.log("The person is sinior citzen");
    
// }


// Switch case---- used when multiple if else atatement is there.
// break is essential in switch statements to prevent fall-through behavior.
//Without break, JavaScript will execute all cases after a matching condition, even if they don’t match.

const fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('It’s an apple!');
        break;
    case 'banana':
        console.log('It’s a banana!');
        break;
    default:
        console.log('Unknown fruit');
}
//Without break: Both 'apple' and 'banana' cases would execute.


/* 
?: (Ternary Operator)
The ternary operator (?:) is a conditional (if-else) operator.
It evaluates a boolean condition and returns one of two values based on whether the condition is true or false.
*/

const score = 85;
const grade = score >= 60 ? 'Pass' : 'Fail';

console.log(grade); // Output: 'Pass'

